import Menu from "@/Components/Menu/Menu";
import MenuTotal from "@/Components/Menu/MenuTotal";
import { fetchDataServer } from "@/utils/fetch"
import { useState } from "react";

export default function MenuContainer({ menuData, categories }) {
    let [activeProduct, setProduct] = useState(null)
    return (
        <div className="df">
            <Menu menuData={menuData} activeProduct={activeProduct} setProduct={setProduct} />
            <MenuTotal menuData={categories}  activeProduct={activeProduct} setProduct={setProduct} />
        </div>
    )
}


// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const [menuData] = await Promise.all([
        fetchDataServer({ url: '/menu' })
    ]);

    let categoriesNames = {
        'fruit': 'Фрукти',
        'vegetables': 'Овочі',
        'meat': "М'ясо/риба",
        'cereals': 'Крупи',
        'milk': 'Молочка'
    }

    let categories = {
        "fruit": {},
        "vegetables": {},
        "meat": {},
        "cereals": {},
        "milk": {}
    }

    menuData.forEach((day) => {
        return day.meal.forEach((meal) => {
            return (
                meal.products.forEach((product) => {
                    delete product.onlyInna
                    if (product.weight == product.original_weight) {
                        delete product.original_weight
                    }
                    if (categories?.[product.category]?.[product.title]) {
                        let amount = 0;
                        let weight = 0;
                        let original_weight = 0;

                        let currentProduct = { ...categories[product.category][product.title] };
                        if (product.amount) {
                            if (product.double) {
                                amount = +product.amount * 2
                            } else {
                                amount = +product.amount
                            }
                            if (+currentProduct.amount) {
                                currentProduct.amount = +currentProduct.amount + amount
                            } else {
                                currentProduct.amount = amount
                            }

                        }


                        if (product.weight) {
                            if (product.double) {
                                weight = +product.weight * 2
                            } else {
                                weight = +product.weight
                            }
                            if (+currentProduct.weight) {
                                currentProduct.weight = +currentProduct.weight + weight
                            } else {
                                currentProduct.weight = +weight
                            }
                        }
                        if (product.original_weight) {
                            if (product.double) {
                                original_weight = +product.original_weight * 2
                            } else {
                                original_weight = +product.original_weight
                            }

                            if (+currentProduct.original_weight) {
                                currentProduct.original_weight = currentProduct.original_weight + original_weight
                            } else {
                                currentProduct.original_weight = original_weight
                            }

                        }

                        delete currentProduct.double
                        delete currentProduct.category
                        categories[product.category][product.title] = { ...currentProduct };

                    } else {
                        let currentProduct = { ...product };
                        let amount= 0;
                        let weight= 0;
                        let original_weight= 0;
                        if (product.amount) {
                            if (product.double) {
                                amount = +product.amount * 2
                            } else {
                                amount = +product.amount
                            }
                            currentProduct.amount = amount

                        }


                        if (product.weight) {
                            if (product.double) {
                                weight = +product.weight * 2
                            } else {
                                weight = +product.weight
                            }
                            currentProduct.weight = +weight
                        }
                        if (product.original_weight) {
                            if (product.double) {
                                original_weight = +product.original_weight * 2
                            } else {
                                original_weight = +product.original_weight
                            }

                            currentProduct.original_weight = original_weight

                        }
                        categories[product.category][product.title] = currentProduct

                    }
                })
            );
        });
    });
    let clearCategories = [];

    for (let key in categories) {
        let tempObj = {
            category: categoriesNames[key],
            products: []
        }
        for (let key2 in categories[key]) {
            tempObj.products.push(categories[key][key2])
        }
        clearCategories.push(tempObj)
    }


    // Pass data to the page via props
    return {
        props: {
            menuData,
            categories: clearCategories
        }
    }
}
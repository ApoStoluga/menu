// import css from './MenuConstructor.module.scss';

import { useState } from "react";

export default function MenuConstructor() {

    const baseItem = {
        "onlyInna": false,
        "category": '',
        "title": '',
        "id": '',
        "amount": '',
        "double": true,
        "weight": '',
        "original_weight": ''
    }

    const [newItem, setItem] = useState(baseItem);

    function reset() {
        setItem(baseItem);
    }
    let categoriesData = {
        "fruit": [
            {
                title: "Апельсин",
                id: 'orange',
                category: 'fruit'
            },
            {
                title: "Банан",
                id: 'banana',
                category: 'fruit'
            },
            {
                title: "Яблуко",
                id: 'apple',
                category: 'fruit'
            },
            {
                title: "Грейпфрут",
                id: 'grape',
                category: 'fruit'
            },
            {
                title: "Фрукти",
                id: 'fruit',
                category: 'fruit'
            },
        ],
        "vegetables": [
            {
                title: "Картопля",
                id: 'potato',
                category: 'vegetables'
            },
            {
                title: "Капуста",
                id: 'cabbage',
                category: 'vegetables',
                coef: 1.2
            },
            {
                title: "Цибуля",
                id: 'onion',
                category: 'vegetables'
            },
            {
                title: "Морква",
                id: 'carrot',
                category: 'vegetables'
            },
            {
                title: "Сік томатний",
                id: 'tomato_juice',
                category: 'vegetables'
            },
            {
                title: "Суміш овочева",
                id: 'vegetables',
                category: 'vegetables'
            },
            {
                title: "Салат",
                id: 'salad',
                category: 'vegetables'
            },
        ],
        "meat": [
            {
                title: "Курятина",
                id: 'chicken',
                category: 'meat',
                coef: 1.25
            },
            {
                title: "Яловичина",
                id: 'beef',
                category: 'meat',
                coef: 1.25
            },
            {
                title: "Риба",
                id: 'fish',
                category: 'meat',
                coef: 1.2
            },
            {
                title: "Черврна риба",
                id: 'red_fish',
                category: 'meat',
                coef: 1.2
            },
        ],
        "cereals": [
            {
                title: "Крупа",
                id: 'cereals',
                category: 'cereals',
                coef: 0.45 
            },
            {
                title: "Вівсянка",
                id: 'oat',
                category: 'cereals',
                coef: .4
            },
            {
                title: "Мюслі",
                id: 'muesli',
                category: 'cereals'
            },
            {
                title: "Хлібці",
                id: 'bread',
                category: 'cereals'
            },
        ],
        "milk": [
            {
                title: "Йогурт",
                id: 'yogurt',
                category: 'milk'
            },
            {
                title: "Яйця",
                id: 'eggs',
                category: 'milk'
            },
            {
                title: "Кефір",
                id: 'old_milk',
                category: 'milk'
            },
            {
                title: "Сир кисломолочний",
                id: 'cheese',
                category: 'milk'
            },
        ]
    }

    let categories = [
        {
            title: 'Фрукти',
            id: 'fruit'
        },
        {
            title: 'Овочі',
            id: 'vegetables'
        },
        {
            title: "М'ясо/риба",
            id: 'meat'
        },
        {
            title: 'Крупи',
            id: 'cereals'
        },
        {
            title: 'Молочка',
            id: 'milk'
        }
    ];



    function getTitle(id) {
        const item = categoriesData[newItem.category].filter(item => {
            if (item.id === id) {
                return item
            }
        });
        return item[0].title
    }


    function getWeight(id, weight) {
        const item = categoriesData[newItem.category].filter(item => {
            if (item.id === id) {
                return item
            }
        });
        if (item[0].coef) {
            return item[0].coef * weight
        } 
        return weight
    }


    function clearItem(item) {
        let newItem = { ...item };
        for (let key in newItem) {
            if (newItem[key] === '') {
                delete newItem[key]
            }
        }
        return newItem
    }

    return (
        <div className='df ais'>
            <div>
            <pre>
                <label htmlFor="category">Категорія</label>
                <select id="category" value={newItem.category}
                    onChange={(e) => {
                        setItem({
                            ...newItem,
                            category: e.target.value
                        })
                    }}>
                    <option />
                    {
                        categories.map(category => {
                            return (
                                <option value={category.id} key={category.id}>
                                    {category.title}
                                </option>
                            )
                        })
                    }
                </select>


            </pre>
            {newItem.category &&
                <pre>
                    <label htmlFor="product">Продукт</label>
                    <select id="product" value={newItem.id}
                        onChange={(e) => {
                            setItem({
                                ...newItem,
                                id: e.target.value,
                                title: getTitle(e.target.value)
                            });
                        }}>
                        <option />

                        <>
                            {
                                categoriesData[newItem.category].map(category => {
                                    return (
                                        <option value={category.id} key={category.id}>
                                            {category.title}
                                        </option>
                                    )
                                })
                            }
                        </>

                    </select>
                </pre>
            }
            {newItem.id &&
                <>
                    <pre>
                        <label htmlFor="double">
                            <input type="checkbox" id="double" checked={newItem.double}
                                onChange={(e) => {
                                    setItem({
                                        ...newItem,
                                        double: e.target.checked
                                    })
                                }}
                            />
                            Інна буде
                        </label>
                    </pre>


                    <pre>
                        <label htmlFor="owner">
                            <input type="checkbox" id="owner" checked={newItem.owner}
                                onChange={(e) => {
                                    setItem({
                                        ...newItem,
                                        onlyInna: e.target.checked
                                    })
                                }}
                            />
                            Тільки Інна
                        </label>
                    </pre>
                    <pre>
                        <label htmlFor="amount">Кількість</label>
                        <input type="number" id="amount" value={newItem.amount}
                            onChange={(e) => {
                                setItem({
                                    ...newItem,
                                    amount: e.target.value,
                                    weight: '',
                                    original_weight: ''
                                })
                            }}
                        />
                    </pre>
                    <pre>
                        <label htmlFor="weight">Вага</label>
                        <input type="number" id="weight" value={newItem.weight}
                            onChange={(e) => {
                                setItem({
                                    ...newItem,
                                    amount: '',
                                    weight: e.target.value,
                                    original_weight: getWeight(newItem.id, e.target.value)
                                })
                            }}
                        />
                    </pre>
                </>
            }
            </div>
            <pre>
                {
                    JSON.stringify(clearItem(newItem), 0, 4)
                }
            </pre>
                <button style={{
                    margin: '1rem'
                }} onClick={reset}>reset</button>
        </div>
    )
}
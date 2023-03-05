import { useEffect } from 'react';
import css from './Menu.module.scss';

export default function Menu({ menuData, activeProduct, setProduct }) {

    // useEffect(()=> {
    //     setTimeout(() => {
    //         window.location.reload()
    //     }, 1000)
    // }, [])

    return (
        <div className={`${css.menu} df fdc`}>
            {
                menuData.map((day) => {
                    return (
                        <div key={day.title} className={`${css.day} df fdc`}>
                            <div className={css.day__title}>{day.title_uk}</div>
                            {
                                day.meal.map((meal) => {
                                    return (
                                        <div key={meal.title} className={`${css.meal} df aic`}>
                                            <div className={css.meal__title}>
                                                {meal.title}
                                            </div>
                                            <div className={`${css.meal__list} df`}>
                                                {meal.products.map((product, index) => {
                                                    return (
                                                        <div key={`${product.title}${index}`} onMouseEnter={() => {
                                                            setProduct(product.id)
                                                        }}
                                                            onMouseLeave={() => {
                                                                setProduct(null)
                                                            }}
                                                            className={`${css.product} ${product.id === activeProduct ? css.product__active : ''}`}>
                                                            {product.title}{' '}{product?.amount} {product?.weight}{product.onlyInna ? ' (Тільки для Інуськи)' : ''}{!product.double && !product.onlyInna ? ' (тільки я)' : ''}
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}
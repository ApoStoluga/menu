import { useEffect, useState } from 'react';
import css from './MenuTotal.module.scss';

export default function MenuTotal({ menuData, activeProduct, setProduct }) {

    return (
        <div className={`${css.wrap} df fdc`}>
            <div className={`${css.head} df`}>
                <div className={css.name}>
                    Назва
                </div>
                <div className={css.amount}>
                    Кількість
                </div>
                <div className={css.weight}>
                    Ваша
                </div>
                <div className={css.original_weight}>
                    вага в сирому вигляді
                </div>
            </div>
            {
                menuData.map(category => {
                    return (
                        <div key={category.category} className={css.category}>

                            <div className={css.category__name}>{category.category}</div>
                            <div className={css.products__list}>
                                {
                                    category.products.map(product => {
                                        return (<div key={product.id}
                                            className={` df
                            ${css.product} ${activeProduct === product.id ? css.product__active : ''}
                        `}
                                            onMouseEnter={() => {
                                                setProduct(product.id)
                                            }}
                                            onMouseLeave={() => {
                                                setProduct(null)
                                            }}
                                        >

                                            <div className={css.name}>
                                                {product.title}
                                            </div>
                                            <div className={css.amount}>
                                                {product?.amount}
                                            </div>
                                            <div className={css.weight}>
                                                {product?.weight}
                                            </div>
                                            <div className={css.original_weight}>
                                                {product.original_weight}
                                            </div>
                                        </div>
                                        )
                                    })
                                }
                            </div>

                        </div>


                    )
                })
            }
        </div>
    )
}
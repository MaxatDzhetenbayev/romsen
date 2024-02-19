import React from 'react'
import './NewProducts.css'

export const NewProducts = () => {
    return (
        <>
            <section className='newProds'>
                <article className='prod'>
                    <section style={{
                        borderBottom: '1px solid #A4ACAD',
                        padding: "10px"

                    }}>
                        <img src="/public/NewProduct/salomon.png" alt="" />
                        <h3 className='prodMainText'>Саломон сет</h3>
                        <p className='prodText'>??? грамм, ??? кусочков</p>
                    </section>
                    <h3 className='prodBottom'>
                        ??? СОМ
                    </h3>
                </article>

                <div className='prod'>
                    <div className='prodPhoto'>
                        <div><img src="/public/NewProduct/philadelphia.png" alt="" /></div>
                        <h3 className='prodMainText'>Филадельфия сет</h3>
                        <p className='prodText'>??? грамм, ??? кусочков</p>
                    </div>
                    <h3 className='prodBottom'>
                        ??? СОМ
                    </h3>
                </div>

                <div className='prod'>
                    <div className='prodPhoto'>
                        <div><img src="/public/NewProduct/bigPhiladelphia.png" alt="" /></div>
                        <h3 className='prodMainText'>Самая большая Филадельфия</h3>
                        <p className='prodText'>??? грамм, ??? кусочков</p>
                    </div>
                    <h3 className='prodBottom'>
                        ??? СОМ
                    </h3>
                </div>
            </section>




        </>
    )
}

import { useEffect, useState } from 'react'
export const PaymentPage = () => {




    return (
        <div>{
            products.map(({ id, name, imagePath }) => (
                <p key={id}>
                    <img src={imagePath} alt="name" />
                   {name}
                </p>
            ))
        }

        </div>
    )
}

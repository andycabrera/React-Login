import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './Products.css'

export const Products = () => {

    const [products, setProducts] = useState([])
    
    useEffect(() => {
        const url = 'http://localhost:8080/products'
        axios.get(url, )
        .then((res) => {
            setProducts(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [] )

    return (
        <div >
            <ul className="card">
                {products.map((item) => {
                    return(
                        <li className="card-products">
                            <img src={item.image} alt="iphone" className="logo" />
                            <h1>{item.name}</h1>
                            <p>{item.description}</p>
                        </li>
                    )
                })}
            </ul>
            
        </div>
    )
}
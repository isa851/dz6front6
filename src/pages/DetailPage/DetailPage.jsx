import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import './detail.scss'
import { cartStore } from "../../store/store";

const DetailPage = () => {
    const [product, setProduct] = useState({});
    const params = useParams();
    const navigate = useNavigate();
    const addCart = cartStore(s => s.addCart);

    useEffect(() => {
        axios(`https://fakestoreapi.com/products/${params.id}`)
            .then(({ data }) => setProduct(data))
    }, [params]);
    return (
        <div className="detail">
            <div className="row">
                <div className="col-6">
                    <img src={product.image} alt="" className="detail-img" />
                </div>
                <div className="col-6">
                    <h2 className="detail-title">{product.title}</h2>
                    <p className="detail-text">{product.description}</p>
                    <p className="detail-text">{product.category}</p>
                    <p className="detail-text">${product.price}</p>

                    <div className="detail-block">
                        <button
                        onClick={()=>{
                            addCart(product)
                        }}
                        >buy</button>
                        <button onClick={()=>{
                            navigate(-1)
                        }}>go back</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailPage;

import { Link } from "react-router-dom";
import './card.scss';
import { cartStore } from "../../store/store";

const Card = ({item}) => {
    const addCart = cartStore(s => s.addCart);
    return (
        <div className="card">
             <img src={item.image} alt="" className="card-img" />
            <Link to={`/product/${item.id}`}>
            <h4 className="card-title">{
            item.title.length > 30
            ? item.title.substr(0, 27).trim() + '...'
            : item.title
            }</h4>
            <p className="card-text">{
                  item.description.length > 50
            ? item.description.substr(0, 47).trim() + '...'
            : item.description
            }</p>
            <br />
            <p className="card-text">{item.category}</p>
            </Link>
            <div className="card-block">
                <p className='card-price'>${item.price}</p>
                <button className="card-btn" onClick={()=>{
                   addCart(item);
                }}>buy</button>
            </div>
        </div>
    );
}

export default Card;

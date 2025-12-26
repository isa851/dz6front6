import './cart.scss';
import { cartStore } from '../../store/store';

const CartPage = () => {
    const cartList = cartStore(s => s.cartList);
    const addCart = cartStore(s => s.addCart);
    const decrementCart = cartStore(s => s.decrementCart);
    const deleteCart = cartStore(s => s.deleteCart);
    return (
        <div>
             <div className='container'>
                <br />
                {
                    cartList.map(item => {
                        return <div className='card-item' key={item.id}>
                            <div className="card-item-left">
                                <img src={item.image} alt="" className="card-item-left-img" />
                                <h3 className="card-item-left-title">{item.title}</h3>
                            </div>
                            <div className="card-item-right">
                                <div className="card-item-right-count">
                                    <button onClick={() => {
                                        addCart(item)
                                    }}>+</button>
                                    <span>{item.count}</span>
                                    <button onClick={() => {
                                        decrementCart(item)
                                    }}>-</button>
                                </div>
                                <p>${(item.price * item.count).toFixed(2)}</p>
                                <button onClick={() => {
                                    deleteCart(item)
                                }}>delete</button>
                            </div>
                        </div>
                    })
                }

                <p>Total: ${cartList.reduce((acc, rec) => {
                    return acc + (rec.count * rec.price)
                }, 0).toFixed(2)}</p>
            </div>
            
        </div>
    );
}

export default CartPage;

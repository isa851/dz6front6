import { categoryStore, cartStore } from "../../store/store";
import { Link } from "react-router-dom";
import './header.scss';

const Header = () => {
    const categories = categoryStore(s => s.categories);
    const cartList = cartStore(s => s.cartList);

    const cartCount = cartList.reduce(
        (sum, item) => sum + item.count,
        0
    );

    return (
        <header className="header">
            <div className="container header-container">
                <h2 className="header-logo">
                    <Link to="/">Shop</Link>
                </h2>

                <nav className="header-nav">
                    <Link to="/" className="header-nav-link">home</Link>

                    {categories.map(item => (
                        <Link
                            key={item}
                            to={`/category/${item}`}
                            className="header-nav-link"
                        >
                            {item}
                        </Link>
                    ))}

                    <Link to="/cart" className="header-nav-link cart-link">
                        cart
                        {cartCount > 0 && (
                            <span className="cart-count">
                                {cartCount}
                            </span>
                        )}
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;

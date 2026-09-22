import { useContext } from 'react';
import CartContext from '../store/CartContext.jsx';
import UserProgressContext from '../store/UserProgressContext.jsx';
import logoImg from '../assets/logo.jpg';

import Button from './UI/Button';

export default function Header() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const totalItems = cartCtx.items.reduce((total, item) => total + item.quantity, 0);

    function handleShowCart() {
        userProgressCtx.showCart();
    }

    return <header id="main-header">
        <div id="title">
            <img src={logoImg} alt="ReactFood Logo" />
            <h1>ReactFood</h1>
        </div>
        <nav>
            <Button textOnly onClick={handleShowCart}>Cart ({totalItems})</Button>
        </nav>
    </header>;
}
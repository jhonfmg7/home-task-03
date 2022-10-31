import React from 'react';
import styles from '../../css-modules/footer.module.css';

// Components
import Logo from '../logo';

const Footer = () => {
    return (
        <footer className={ styles.background } data-testid="footer">
            <Logo />
        </footer>
    )
}

export default Footer
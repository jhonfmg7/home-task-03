import React from 'react';
import styles from '../../css-modules/header.module.css';

// Components
import Logo from '../logo';

const Header = () => {
    return (
        <header className={ styles.hero } data-testid="header">
            <div className={ styles.container }>
                <a href="#" className={ styles.noTextDecoration }>
                    <Logo />
                </a>
                <button className={ styles.mainButton }><span>+ </span>ADD MOVIE</button>
            </div>
            <div className={ styles.finder }>
                <h1 className={ styles.mainTitle }>FIND YOUR MOVIE</h1>
                <div className={ styles.secondaryContainer }>
                    <input className={ styles.searchInput } type="text" placeholder="What do you want to watch?" />
                    <button className={ styles.secondaryButton }>Search</button>
                </div>
            </div>
        </header>
    )
}

export default Header
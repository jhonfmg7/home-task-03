import React, { useState, useEffect } from 'react';
import styles from '../../css-modules/header.module.css';
import ErrorBoundary from '../ErrorBoundary';

// Components
import Logo from '../logo';

const Header = () => {

    // Local State
    const [ inputValue, setInputValue ] = useState('');

    useEffect(() => {
        if (inputValue.length > 10) {
            throw new Error('I crashed!');
        }
    }, [ inputValue ]);

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
                    <ErrorBoundary>
                        <input className={ styles.searchInput } type="text" placeholder="What do you want to watch?" value={ inputValue } onChange={ e => setInputValue(e.target.value) } />
                    </ErrorBoundary>
                    <button className={ styles.secondaryButton }>Search</button>
                </div>
            </div>
        </header>
    )
}

export default Header
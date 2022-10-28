import React from 'react';
import styles from '../../../css-modules/main.module.css';

// Prop Types
import PropTypes from 'prop-types';

const NavBar = ({ children, typeSelected, setTypeSelected, sortBySelected, setSortBySelected }) => {

    const changeItemSelected = (type) => {
        setTypeSelected(type)
    }

    return (
        <section>
            <nav className={ styles.navbar }>
                <ul className={ styles.navbarItems }>
                    <li className={ typeSelected === 'all' ? styles.navbarItemActive : styles.navbarItem } onClick={ () => changeItemSelected('all') }>All</li>
                    <li className={ typeSelected === 'action' ? styles.navbarItemActive : styles.navbarItem } onClick={ () => changeItemSelected('action') }>Action</li>
                    <li className={ typeSelected === 'documentary' ? styles.navbarItemActive : styles.navbarItem } onClick={ () => changeItemSelected('documentary') }>Documentary</li>
                    <li className={ typeSelected === 'comedy' ? styles.navbarItemActive : styles.navbarItem } onClick={ () => changeItemSelected('comedy') }>Comedy</li>
                    <li className={ typeSelected === 'horror' ? styles.navbarItemActive : styles.navbarItem } onClick={ () => changeItemSelected('horror') }>Horror</li>
                    <li className={ typeSelected === 'crime' ? styles.navbarItemActive : styles.navbarItem } onClick={ () => changeItemSelected('crime') }>Crime</li>
                </ul>
                <div className={ styles.sortBySelect }>
                    <p className={ styles.secondaryText }>Sort by</p>
                    <div className={ styles.selectContainer }>
                        <select className={ styles.selectInput } value={ sortBySelected } onChange={ e => setSortBySelected(e.target.value) }>
                            <option value="date">Release Date</option>
                            <option value="rating">Rating</option>
                            <option value="runtime">Runtime</option>
                        </select>
                        <div className={ styles.selectInputRow }></div>
                    </div>
                </div>
                <div className={ styles.grayStrike }></div>
            </nav>
            { children }
        </section>
    )
}

NavBar.propTypes = {
    children: PropTypes.element.isRequired,
    typeSelected: PropTypes.string.isRequired, 
    setTypeSelected: PropTypes.func.isRequired, 
    sortBySelected: PropTypes.string.isRequired, 
    setSortBySelected: PropTypes.func.isRequired, 
}

export default NavBar;
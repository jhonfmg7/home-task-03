import React from 'react';
import styles from '../../css-modules/main.module.css';

// Components
import CardMovie from './CardMovie';

const ListMovies = ({ moviesSelected }) => {

    return (
        <section className={ styles.moviesContainer }>
            { moviesSelected.length > 0 ? (
                moviesSelected.map( (item, i) => (
                    <CardMovie key={ i } movie={ item } />
                ) )
            ) : (
                <p className={ styles.emptyMessage }>De momento no hay ninguna pelicula para mostrar</p>
            ) }
        </section>
    )
}

export default ListMovies
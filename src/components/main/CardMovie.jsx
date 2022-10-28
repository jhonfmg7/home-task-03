import React from 'react';
import styles from '../../css-modules/main.module.css';

// Prop Types
import PropTypes from 'prop-types';

const CardMovie = ({ movie }) => {
    return (
        <article className={ styles.movieItem }>
            <img src={ process.env.PUBLIC_URL + movie.image } alt={ movie.title + '.png' } />
            <div className={ styles.titleContainer }>
                <p style={{ marginBottom: 0 }}>{ movie.title }</p>
                <p className={ styles.movieDate }>{ movie.releaseDate }</p>
            </div>
            <p className={ styles.genres }>
                { movie.genres.map( (genre, i) => {
                    if (movie.genres.length <= 1) {
                        return `${ genre } `
                    } else {
                        if (i === movie.genres.length - 1) {
                            return `& ${ genre }`
                        } else {
                            return `${ genre } `
                        }
                    }
                } ) }
            </p>
        </article>
    )
}

CardMovie.propTypes = {
    movie: PropTypes.object.isRequired
}

export default CardMovie
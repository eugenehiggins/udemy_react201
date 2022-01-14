import Hero from './Hero';
import {Col, Container, Row} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import secrets from '../secrets.json'

const MovieView = () => {
    const {id} = useParams()
    const [movieDetails, setMovieDetails] = useState({})
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${secrets.tmdb}`)
            .then(response => response.json())
            .then(data => {
                setMovieDetails(data)
                console.log(movieDetails)
            })
    }, [id])
    return (
        <>
            <Hero
                text={movieDetails.original_title}
                desc={movieDetails.overview}
                img={movieDetails.poster_path}
            />
            <Container>
                <Row>


                </Row>
            </Container>
        </>
    )
}

export default MovieView;
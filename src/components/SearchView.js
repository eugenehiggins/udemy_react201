import Hero from './Hero';
import {Button, Card, Col, Container, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';


const MovieCard = ({movie}) => {
    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    return (
        <Col lg={3} md={3} className="col-2 my-4">
            <Card style={{width: '18rem'}}>
                <Card.Img variant="top" className="img-fluid" src={posterUrl} alt={movie.original_title} />
                <Card.Body>
                    <Card.Title>{movie.original_title}</Card.Title>
                    <Card.Text>
                        {movie.overview}
                    </Card.Text>
                    <Button href={`/movies/${movie.id}`} variant="primary" as="a">Show</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}
const SearchView = ({keyword, searchResults}) => {
    const title = `you are searching for ${keyword}`
    console.log(searchResults)
    const resultsHtml = searchResults.map((obj, i) => {
        return <MovieCard movie={obj} key={i}/>
    })
    return (
        <>
            <Hero text={title}/>
            {resultsHtml &&
                <Container>
                    <Row>
                        {resultsHtml}
                    </Row>
                </Container>
            }
        </>
    )
}

export default SearchView;
import Hero from './Hero';
import {Button, Card, Col, Container, Row} from 'react-bootstrap';


// tmdb api key: b1d8c9d11e81f0217735d4ad44a21c12
// url: https://image.tmdb.org/t/p/w500/wigZBAmNrIhxp2FNGOROUAeHvdh.jpg

const MovieCard = ({movie}) => {
    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    console.log(movie.homepage,"is the homepage")
    return (
        <Col lg={3} md={3} className="col-2 my-4">
            <Card style={{width: '18rem'}}>
                <Card.Img variant="top" className="img-fluid" src={posterUrl} alt={movie.original_title} />
                <Card.Body>
                    <Card.Title>{movie.original_title}</Card.Title>
                    <Card.Text>
                        {movie.overview}
                    </Card.Text>
                    <Button as="a" variant="primary" href={movie.homepage}>Show Details</Button>
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
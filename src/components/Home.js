import {Button, Col, Container, Image, Row} from 'react-bootstrap';
import Hero from './Hero';


const Home = () => {
    return (
        <>
            <Hero text="Home"/>
            <Container>
                <Row>
                    <Col lg={{span:8, offset: 2}} className="my-5">
                        <p className="lead">Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.

                            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home;
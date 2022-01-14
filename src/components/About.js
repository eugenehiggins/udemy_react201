import Hero from './Hero';
import {Col, Container, Row} from 'react-bootstrap';

const AboutView = () => {
    return (
        <>
            <Hero text="About us" />
            <Container>
                <Row>
                    <Col lg={{span: 8, offset: 2}} className="my-5">
                        <p className="lead">
                            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.

                            Donec sollicitudin molestie malesuada.
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AboutView;
import {Button, Col, Container, Image, Row} from 'react-bootstrap';

const Hero = ({text,desc,img}) => {
    return (
        <>
            <Container xxl={8} className="px-4 py-5">
                <Row className="flex-lg-row-reverse align-items-center g-5 py-5">
                    <Col className="col-10" sm={8} lg={6}>
                        <Image src={`https://image.tmdb.org/t/p/w500${img}`} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes"
                               width="700" height="500" loading="lazy" />
                    </Col>
                    <Col lg={6}>
                        <h1 className="display-5 fw-bold lh-1 mb-3">{text}</h1>
                        <p className="lead">{desc}</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <Button variant="primary" size="lg" className="px-4 me-md-2">Primary</Button>
                            <Button variant="outline-secondary" size="lg" className="px-4">Default</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Hero
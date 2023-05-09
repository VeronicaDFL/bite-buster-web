import { Container, Row, Col } from "react-bootstrap";


export default function MainPage () {

    return (
        <Container className="text-bg-warning">
            <Row>
                <Col>
                <h1>Monday</h1>
                </Col>
            </Row>

            <Row>
            <ul>
                <li>Restaurant #1</li>
                <li>Restaurant #2</li>
                <li>Restaurant #3</li>
                <li>Restaurant #4</li>
                <li>Restaurant #5</li>
                <li>Restaurant #6</li>
                <li>Restaurant #7</li>
            </ul>
            </Row>
        </Container>

    )
}



    
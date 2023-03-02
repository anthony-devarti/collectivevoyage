import { Container, Row, Col } from "react-bootstrap"

export default function TripsCard(props){
    return(
        <div className="trips-card">
            <Container>
                <Row>
                    <Col>
                    Title
                    </Col>
                    <Col>
                    Go
                    </Col>
                </Row>
                <Row>
                    <Col>
                    Departure Date
                    </Col>
                    <Col>
                    Return Date
                    </Col>
                    <Col>
                    # Events
                    </Col>
                </Row>
                <Row>
                    <Col>
                    Attendees
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
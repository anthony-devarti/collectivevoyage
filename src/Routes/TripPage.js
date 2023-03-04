import Widget from "../Components/Subcomponents/Widget";
import Countdown from "../Components/Subcomponents/Countdown";
import { Container, Row, Col } from "react-bootstrap";
import Attendees from "../Components/Subcomponents/Attendees";
import TripComments from "../Components/Subcomponents/TripComments";

export default function TripPage() {

    //replace with a simple flag to show if there is more than one event on this trip
    const multiEventTrip = false

    return (
        <div className="trips">
            <div className="sidebar">
                <Widget
                    height={'90vh'}
                    width={'30vw'}
                    title={multiEventTrip ?
                        'Multiple Events'
                        :
                        'Event Details'}
                    content={
                        <Container>
                            <Row>
                                <Col>
                                    Start Date
                                </Col>
                                <Col>
                                    Some Date
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    End Date
                                </Col>
                                <Col>
                                    Some Date
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    Attendees
                                </Col>
                            </Row>
                        </Container>
                    }
                />
            </div>
            <div className="right-side">
                <div className="top-right">
                    <Widget
                        height={'18vw'}
                        width={'18vw'}
                        title={"Countdown"}
                        content={<Countdown distance={"7"} />}
                    />
                    <Widget
                        height={'18vw'}
                        width={'18vw'}
                        title={"Cards"}
                    />
                    <Widget
                        height={'18vw'}
                        width={'18vw'}
                        title={"Money"}
                    />
                    <Widget
                        height={'25vh'}
                        width={'27vw'}
                        title={"Vehicles"}
                    />
                    <Widget
                        height={'25vh'}
                        width={'27vw'}
                        title={"Lodging"}
                    />
                </div>
                <div>
                    <Widget
                        height={'30vh'}
                        width={'60vw'}
                        title={"Conversation"}
                        content={
                            <Container>
                                <Row>
                                    <Col xs={4}>
                                        <Attendees />
                                    </Col>
                                    <Col style={{overflowX:'scroll'}}>
                                        <TripComments />
                                    </Col>
                                </Row>
                            </Container>
                        }
                    />
                </div>
            </div>
        </div>
    )
}
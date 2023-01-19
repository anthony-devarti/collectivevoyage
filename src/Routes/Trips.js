import { Container, Row, Col } from "react-bootstrap";
import CreateTrip from "../Components/Trips/CreateTrip";
import PlannedTrips from "../Components/Trips/PlannedTrips";

export default function Trips() {
    return (
        <Container>
            <div>
                <h1>The Trips Page</h1>
            </div>
            <div>
                <CreateTrip />
            </div>
            <div>
                <h2>Planned Trips</h2>
            </div>
            <div>
                <PlannedTrips />
            </div>
        </Container>
    )
}
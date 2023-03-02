import { Container } from "react-bootstrap";
import TripsCard from "../Components/Subcomponents/TripsCard";
import CreateTrip from "../Components/Trips/CreateTrip";
import EventsTable from "../Components/Trips/EventsTable";

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
                <h2>Events</h2>
            </div>
            <div>
                <EventsTable />
            </div>
            <div>
                <h2>Trips</h2>
            </div>
            <div>
                <TripsCard />
            </div>
        </Container>
    )
}
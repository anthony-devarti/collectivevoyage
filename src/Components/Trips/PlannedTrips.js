import { Card } from "react-bootstrap";

const trips = [
    {
        name: 'Example Trip',
        date: '2023-01-10T05:00:00.00Z'
    },
    {
        name: 'Example Trip 2',
        date: '2023-01-10T05:00:00.00Z'
    },
    {
        name: 'Example Trip 3',
        date: '2023-01-10T05:00:00.00Z'
    }
]

export default function PlannedTrips() {


    return (
        <>
            {trips.map((trip, index) => {
                return (
                    <Card key={index} className='event-card'>
                        <Card.Header>
                        {trip.name}
                        </Card.Header>
                        <Card.Body>
                            General Information about the trip will go here.
                        </Card.Body>
                        <Card.Footer>
                            Edit
                        </Card.Footer>
                    </Card>
                )
            })}
        </>
    )
}
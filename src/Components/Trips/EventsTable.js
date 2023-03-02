import { Container, Button } from "react-bootstrap";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import CreateTrip from "./CreateTrip";

const exampleEvents = [
    {
        name: 'Modern RCQ',
        date: '2023-03-22T05:00:00.00Z',
        store: 'Bad Wolf Games',
        format: 'Modern',
        confirmed: true
    },
    {
        name: 'Sealed Pre-Release',
        date: '2023-03-19T05:00:00.00Z',
        store: 'CM Games',
        format: 'Sealed',
        confirmed: false
    },
    {
        name: 'Standard IQ',
        date: '2023-03-28T05:00:00.00Z',
        store: 'CM Games',
        format: 'Standard',
        confirmed: true
    }
]

export default function PlannedTrips() {

    let currentDate = moment(Date.now()).format('MM/DD/YYYY')

    const days = (date_1, date_2) => {
        let difference = date_1.getTime() - date_2.getTime();
        let totalDays = Math.ceil(difference / (1000 * 3600 * 24));
        let plural = 'days'
        if (totalDays < 2) {
            plural = 'day'
        }
        return totalDays + ' ' + plural + ' away';
    }

    //some sorting should happen before we start mapping, probably?
    // Should probably filter on the GET request instead 
    const futureEvents = exampleEvents.filter(trip => moment(trip.date) >= moment(Date.now()))

    if (futureEvents.length < 1) {
        return (
            <>
            <h2>
            No Events
            </h2>
            <p>There are no upcoming events that we know about given your filters.  Heard about an event? Add it to this service so you and others can plan a trip for it!</p>
            <CreateTrip />
            </>
        )
    }

    return (
        <Container className="planned-trips">
            <table className="table">
                <thead>
                    <tr className="header">
                        <th>Event Name</th>
                        <th>Date</th>
                        <th>Start Time</th>
                        <th>Time Left</th>
                        <th>Store</th>
                        <th>Format</th>
                        <th>Event Page</th>
                        <th>Confirmed?</th>
                    </tr>
                </thead>
                <tbody>

                    {futureEvents.map((event, index) => {

                        let eventDate = moment(event.date).format('MM/DD/YYYY')
                        let distance = days(new Date(eventDate), new Date(currentDate))
                        let warn = ''
                        if (distance.substring(0, distance.indexOf(' ')) < 3) {
                            warn = 'warn'
                        }


                        return (
                            <tr key={index}>
                                <td>
                                    {event.name}
                                </td>
                                <td>
                                    {eventDate}
                                </td>
                                <td>
                                    {event.startTime}
                                </td>
                                <td className={warn}>
                                    {distance}
                                </td>
                                <td>
                                    {event.store}
                                </td>
                                <td>
                                    {event.format}
                                </td>
                                <td>
                                    <Button><FontAwesomeIcon icon={faExternalLink} /></Button>
                                </td>
                                <td>
                                    {event.confirmed ? 'yes' : 'no'}
                                </td>
                            </tr>

                        )
                    })}
                </tbody>
            </table>
        </Container>
    )
}
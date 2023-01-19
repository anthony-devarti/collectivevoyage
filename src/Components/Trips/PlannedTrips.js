import { Card, Row, Col, Container, Button } from "react-bootstrap";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';

const trips = [
    {
        name: 'Modern RCQ',
        date: '2023-01-22T05:00:00.00Z',
        store: 'Bad Wolf Games',
        format: 'Modern'
    },
    {
        name: 'Sealed Pre-Release',
        date: '2023-01-19T05:00:00.00Z',
        store: 'CM Games',
        format: 'Sealed'
    },
    {
        name: 'Standard IQ',
        date: '2023-01-28T05:00:00.00Z',
        store: 'CM Games',
        format: 'Standard'
    }
]

export default function PlannedTrips() {

    let currentDate = moment(Date.now()).format('MM/DD/YYYY')
    console.log(currentDate)

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
                    </tr>
                </thead>
                <tbody>

                    {trips.map((trip, index) => {

                        let eventDate = moment(trip.date).format('MM/DD/YYYY')
                        let distance = days(new Date(eventDate), new Date(currentDate))
                        let warn = ''
                        if (distance.substring(0, distance.indexOf(' ')) < 3) {
                            warn = 'warn'
                        }


                        return (
                            <tr key={index}>
                                <td>
                                    {trip.name}
                                </td>
                                <td>
                                    {eventDate}
                                </td>
                                <td>
                                    {trip.startTime}
                                </td>
                                <td className={warn}>
                                    {distance}
                                </td>
                                <td>
                                    {trip.store}
                                </td>
                                <td>
                                    {trip.format}
                                </td>
                                <td>
                                    <Button><FontAwesomeIcon icon={faExternalLink} /></Button>
                                </td>
                            </tr>

                        )
                    })}
                </tbody>
            </table>
        </Container>
    )
}
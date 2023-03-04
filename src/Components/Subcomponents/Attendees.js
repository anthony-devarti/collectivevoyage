import { Container, Row, Col } from "react-bootstrap"

const attendees = [
    {
        firstName: "Anthony",
        lastName: 'DeVarti',
        id: 1
    },
    {
        firstName: "Ashley",
        lastName: 'Muhm',
        id: 2
    },
    {
        firstName: "Kyle",
        lastName: 'Griffis',
        id: 3
    }
]

export default function Attendees() {

    const initials = (first, last) => {
        return first.slice(0, 1) + last.slice(0, 1)
    }

    return(
        <Container className="user-bubble-container">
        {
            attendees.map(participant => {
                return (
                    <div className="user-bubble">
                        {initials(participant.firstName, participant.lastName)}
                    </div>
                )
        })
    }
        </Container>
    )
}
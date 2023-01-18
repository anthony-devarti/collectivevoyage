import { useState } from "react"
import { Button, Modal } from "react-bootstrap"
import TripForm from "../Forms/TripForm";

export default function CreateTrip() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <Button onClick={handleShow}>Let's Plan a Trip!</Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>New Trip</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Tell us about the Event.  Once it's created, you can add vehicles or lodging.
                    <TripForm handleClose={handleClose}/>
                </Modal.Body>
            </Modal>
        </>
    )
}
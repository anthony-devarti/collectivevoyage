import { useEffect } from "react"
import { getVehicleById } from "../api/api"

export default function MyAccount(){

    useEffect(() => {
        getVehicleById(1)
    })

    return (
        <>
        My Account Page
        </>
    )
}
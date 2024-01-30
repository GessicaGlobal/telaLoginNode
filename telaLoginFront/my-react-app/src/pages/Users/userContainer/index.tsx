import React from "react"
import { UserView } from "../userView"
import { Link } from 'react-router-dom'


export const UserContainer = () => {
    return (
        <>
        <h1>Página de usuários</h1>
        <Link style={{ color: 'white', padding: 15, fontWeight: 'normal' }} to="/">Retorne à página anterior!</Link>

        <UserView />
        </>
    )
}
import React from "react"
import { Link } from "react-router-dom"
import { RecoverPasswordView } from "../recoverPasswordView"


export const RecoverPasswordContainer = () => {
const handleRecover = () => {

}

    return (
        <div >
            {/* <h1>Pagina de recuparar senha</h1>
            <Link to="/">retornar a página inicial</Link> */}
            <RecoverPasswordView 
            handleRecover={handleRecover}
            />
        </div>
    )
}
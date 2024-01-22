import React from 'react'
import { LoginView }  from '../loginView'


export const loginContainer = () => {

    return (

        <LoginView placeholder={''} value={''} onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
            throw new Error('Function not implemented.')
        } } />
        )
}
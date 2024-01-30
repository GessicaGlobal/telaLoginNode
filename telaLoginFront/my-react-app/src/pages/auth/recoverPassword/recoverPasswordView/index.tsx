import React from "react"
import { InputText } from '../../../../components/InputText'
import { LoginButton } from "../../../../components/Button"
import { ButtonContent, Container, Content } from "./styles"
import { Paragraph } from "../../login/loginView/styles"
import { RegisterContainer } from "../../register/registerContainer/index"
import { Link } from "react-router-dom"

export const RecoverPasswordView = ({ handleRecover }) => {
    return (
        <Content>
            <Container>
                <Paragraph>Recupere seu acesso!</Paragraph>
                <InputText
                    placeholder={'Digite seu email...'}
                    onChange={undefined}
                    value={""}
                // onChange={(e) => setPassword(e.target.value)}
                />
                <ButtonContent>
                    <LoginButton
                        onClick={handleRecover} value={"Enviar"} />
                </ButtonContent>
               <Link style={{color:'white', padding:15, fontWeight:'normal'}} to="/">Retorne à página anterior!</Link>
            </Container>
        </Content>
    )
}
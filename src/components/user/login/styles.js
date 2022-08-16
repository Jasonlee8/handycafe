import styled from 'styled-components';
import {Button} from 'react-bootstrap'

const loginImg = process.env.REACT_APP_REGILOGIN_IMG

export const LoginContainer = styled.div`
        background: url(${loginImg});
        width: 100%;
        height: 50rem;
        overflow: auto;
        background-size: cover
      `

export const HeaderDiv = styled.div`
        width: 20rem;
        height: 3rem;
        margin-bottom: 0.8rem;
        text-align: center
      `

export const LoginDiv = styled.div`
        background-color: #E8E8E8;
        width: 30rem;
        height: auto;
        margin: auto;
        margin-top: 10rem;
      `

export const LoginForm = styled.div`
        background-color: #E8E8E8;
        width: 20rem;
        height: auto;
        margin: auto
      `

export const CancelBtn = styled(Button)`
        width: 6rem;
        margin-top: 2rem;
        margin-left: 1.2rem;
        margin-bottom: 2rem;
      `

export const SubmitBtn = styled(Button)`
        width: 6rem;
        margin-top: 2rem;
        margin-left: 5.5rem;
        margin-bottom: 2rem;
      `
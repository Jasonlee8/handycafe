import styled from 'styled-components';
import {Button} from 'react-bootstrap';

const regiImg = process.env.REACT_APP_REGILOGIN_IMG

export const RegiContainer = styled.div`
        background: url(${regiImg});
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

export const RegiForm = styled.div`
        background-color: #E8E8E8;
        width: 30rem;
        height: auto;
        margin: auto;
        margin-top: 6.2rem;
      `

export const RegiContext = styled.div`
        width: 20rem;
        height: auto;
        margin: auto;
      `

export const CancelButton = styled(Button)`
        margin-left: 1.2rem;
        margin-top: 2.3rem;
        margin-bottom: 2rem;
        width: 6rem;
      `

export const RegiButton = styled(Button)`
        width: 6rem;
        margin-left: 5.5rem;
        margin-top: 0.3rem;
      `

export const FormError = styled.p`
        color: red;
        margin-left: 0.2rem;
        margin-bottom: 0rem;
      `

export const FormSuccess = styled.p`
        color: #4BB543;
        width: 11rem;
        margin: 0 auto;
        margin-top: 0.5rem;
      `
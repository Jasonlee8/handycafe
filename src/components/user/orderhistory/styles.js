import styled from 'styled-components';
import { Container, Image } from 'react-bootstrap';

const apiUrl = process.env.REACT_APP_EXCLAMATION_MARK;

export const HistoryContainer = styled(Container)`
    margin-top: 1rem;
    height: 60rem;
`

export const Info = styled(Image)`
    background: url(${apiUrl}) no-repeat;
    background-size: cover;
    height: 2rem;
    width: 2rem;
    margin: 1rem 0 0 7%;
    cursor: pointer;
    border-radius: 0.4rem;
`

// export const TD1 = styled.td`
//     scope: Col;
//     width: 6rem;
// `

// export const TD2 = styled.td`
//     width: 15rem;
//     scope: Col;
// `

// export const TD3 = styled.td`
//     width: 20rem;
//     scope: Col;
// `
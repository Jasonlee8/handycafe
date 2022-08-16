import styled from 'styled-components';
import {Row, Button, Card} from 'react-bootstrap';

const menuImg = process.env.REACT_APP_MENU_IMG;
      
export const MenuContainer = styled.div`
    background: url(${menuImg});
    width: 100%;
    background-size: cover
    display: felx;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  `

export const PurchaseBtn = styled(Button)`
    width: 5rem;
    height: 2.6rem;
    border-width: 0.1rem;
    border-radius: 3rem;
    margin-top: 1.2rem;
    margin-right: 1.1rem
  `

export const CoffeeCard = styled(Card)`
      width: 17rem; 
      margin-bottom: 3.2rem;
      z-index: 9;
      flex-grow: 1;
      @media (max-width: 780px) {
        margin: auto auto 3rem auto;
      }
`

export const NewRow = styled(Row)`
      margin-left: 4rem; 
      margin-right: 2.3rem; 
      height: auto;
      padding-top: 3rem;
  `
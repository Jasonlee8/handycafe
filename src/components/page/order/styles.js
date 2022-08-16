import styled from 'styled-components';
import { Image, Button } from 'react-bootstrap';

const orderImg = process.env.REACT_APP_ORDER_IMG;

 export const BrandDiv = styled.div`
    width: 40rem;
    height: 10rem;
    padding-top: 2.8rem;
    padding-left: 3.2rem;
  `

  export const OrderContainer = styled.div`
    background: url(${orderImg});
    width: 100%;
    min-height: 60rem;
    max-height: 80rem;
  `

  export const OuterDiv = styled.div`
    background-color: #E8E8E8;
    min-width: 33rem;
    max-width: 56rem;
    min-height: 33rem;
    max-height: 80rem;
    margin: auto;
    margin-top: 1.9rem;
    position: relative;
  `

  export const ImgDiv = styled.div`
    min-height: 10rem;  
    max-height: 28rem;
    width: 28rem;
    margin-top: 2.5rem;
    margin-left: 2rem;
  `

  export const OrderImage = styled(Image)`
    width: 25rem;
    height: 27rem;
    object-fit: cover;
  `

  export const ManualDiv = styled.div`
    width: 22rem;  
    height: 25rem;
    margin-top: 3rem;
    margin-left: 2.8rem;
    margin-bottom: 3.5rem
  `

  export const CoffeeName = styled.div`
    text-align: left;
    width: 20rem;
    height: 2rem;
  `

  export const CoffeePrice = styled.div`
    text-align: left;
    width: 10rem;
    height: 1rem;
    margin-top: 1rem;
  `

  export const CoffeeDesp = styled.div`
    text-align: left;
    width: 18rem;
    height: 7.5rem;
    margin-top: 1.5rem;
  `

  export const Quantity = styled.div`
    text-align: right;
    margin-left: 8rem;
    width: 12rem;
    height: 2rem;
  `

  export const DelBtn = styled(Button)`
    margin-left: 1rem;
    width: 4rem;
    height: 4rem;
  `

  export const AddBtn = styled(Button)`
    width: 4rem;
    height: 4rem;
    margin-left: 3.3rem;
  `

  export const CupsNumber = styled.div`
    width: 4rem;
    height: 4rem;
    margin-top: 0.5rem;
    margin-left: 4.7rem;
  `

  export const TotalPriceDisplayDiv = styled.div`
    text-align: left;
    margin-left: 9.8rem;
  `

  export const CancelBtn = styled(Button)`
    margin-left: 2rem;
    width: 6rem;
    height: 2.5rem;
    margin-top: 3rem;
  `

  export const OrderBtn = styled(Button)`
    margin-left: 6rem;
    width: 6rem;
    height: 2.5rem;
    margin-top: 3rem;
  `
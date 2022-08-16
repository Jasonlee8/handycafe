import { Link } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import styled from 'styled-components';

 export const FooterContainer = styled.div`
          background-color: #242424;
          padding: 3.5rem 0 3.5rem 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        `

 export  const FooterLinks = styled.div`
          width: 100%;
          max-width: 62.5rem;
          display: flex;
          justify-content: center
        `

 export const FooterLinkWrapper = styled(Row)`
          display: flex
        `

 export const FooterLinkItems = styled.div`
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-left: 1rem;
          margin-right: 1rem;
          text-align: center;
          width: 12.9rem;
          box-sizing: border-box;
        `

 export const TitleFont = styled.h2`
          color: #fff;
          text-decoration: none;
          margin-bottom: 0.5rem;
        `

 export const Links = styled(Link)`
          margin-top: 0.2rem;
          color: #fff
        `
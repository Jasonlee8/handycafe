import styled from 'styled-components';
import { SiCoffeescript } from "react-icons/si";
import { NavItem } from  'react-bootstrap';

export const LogoPanel = styled.div`
        // width: 17rem;
        @media (max-width: 988px) {
          width: 100%;
          text-align: center;
        }
      `

export const NavLinkPage = styled(NavItem)`
        margin-top: 0.2rem;
        margin-right: 4.5rem;
        text-align: center;
        cursor: pointer;
        color: white;
        @media (max-width: 988px) {
          text-align: center;
          margin: 0 auto;
        }
      `

export const CafeIcon = styled(SiCoffeescript)`
        color: white;
        font-size: 2.2rem;
        cursor: pointer;
        margin-left: 1rem;
        margin-top: 0.1rem;
      `

export const FontDiv = styled.div`
        margin-left: 0.55rem;
        padding-top: 0.1rem;
        height: 2.3rem;
        font-family: "Papyrus";
        font-size: 1.5rem;
        width: 10rem;
        vertical-align: middle;
        color: #fff    
      `

export const Avatar = styled.img`
        vertical-align: middle;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        margin-right: 1rem;
        background-size: cover;
      `

export const RegiLink = styled(NavItem)`
        cursor: pointer;
        text-align: center;
        color: white;
        margin-right: 5rem;
        @media (max-width: 988px) {
          text-align: center;
          margin: 0.5rem 0 0 0;
        }
      `

export const LoginLink = styled(NavItem)`
        cursor: pointer;
        text-align: center;
        color: white;
        margin-right: 3rem;
        @media (max-width: 988px) {
          text-align: center;
          margin: 0 auto;
        }
      `
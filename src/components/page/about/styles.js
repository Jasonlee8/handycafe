import styled from 'styled-components';

const aboutImg = process.env.REACT_APP_ABOUT_IMG

export const AboutContainer = styled.div`
  background: url(${aboutImg});
  width: 100%;
  height: 57rem;
  background-size: cover;
  overflow: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
` 

export const SlogonDiv = styled.div`
  margin-top: 5%;
  margin-left: 12%;
  width: 30rem;
  height: 40%;
  display: flex;
  flex-direction: column
  @media (max-width: 1000px) {
    width: 100%;
  }
`

export const SlogonItem = styled.h3`
  font-family: "Papyrus";
  display: flex;
  margin-top: 5%
` 
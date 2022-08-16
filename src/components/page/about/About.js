import React from 'react';
import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';
// import { HeaderDiv } from '../../user/register/styles';
import {AboutContainer, SlogonDiv, SlogonItem} from './styles'
import {IconContainer, BrandDiv, IconImage} from '../../brandlogo/styles'
import Maps from '../../map/Maps'

function About() {

    return(
      <div>
        <Navbar />
        <AboutContainer>
          <SlogonDiv>
            <IconContainer>
              <BrandDiv style={{color: 'black', fontSize: '4rem', width: '23rem', marginTop: '1rem'}}>Handy Cafe</BrandDiv>
              <IconImage style={{color: 'black'}}/>
            </IconContainer>
            <div style={{marginTop: '6rem'}}>
              <SlogonItem style={{marginLeft: '8%', marginTop: '2rem'}}> • Coffee is all about choice. </SlogonItem> 
              <SlogonItem style={{marginLeft: '6%'}}> • A cup of coffee can complete your day.</SlogonItem>
              <SlogonItem style={{marginLeft: '4%'}}> • What's life without coffee?</SlogonItem>
              <SlogonItem style={{marginLeft: '2%'}}> • Hot and fresh coffee all around.</SlogonItem>
              <SlogonItem style={{marginLeft: '0%'}}> • Wake up your taste buds.</SlogonItem>
              <SlogonItem style={{marginLeft: '-2%'}}>• Power up with coffee.</SlogonItem>
            </div>
              
          </SlogonDiv>

          <Maps />
        </AboutContainer>

        <Footer />
      </div>
    )
}

export default About;
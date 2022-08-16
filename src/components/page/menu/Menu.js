import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';
import BrandLogo from '../../brandlogo/BrandLogo';
import { MenuContainer, PurchaseBtn, NewRow, CoffeeCard } from './styles'
import { getMenu } from '../../../api/MenuApi';
import { useSelector } from 'react-redux';

export default function Menu() {

  const [values, setValues] = useState({
    id: 0,
    title: '',
    price: 0,
    description: '',
    quantity: 0,
    image: '',
    menuArr: []
  })

  useEffect(() => {
    const getMenuInfo = async () => {
      const menuInfo = await getMenu().then(res => res.data);
      setValues({
        ...values,
        menuArr: menuInfo
      });
      
    } 
    getMenuInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const user = useSelector(state => state.user);

  return (
    <div>
      <Navbar />

      <MenuContainer>
        <NewRow xs={1} sm={2} lg={4}>
          {values.menuArr.map(values => (
            <div key={values._id}>
              <CoffeeCard>
                <Card.Img variant='top' src={values.url} style={{height: '12.3rem', objectFit: 'cover', cursor: 'pointer'}}/>
                <div style={{display: 'flex', flexDirection: "row"}}>
                  <Card.Body style={{width: '10rem', height: '4.7rem', paddingTop: '0.6rem'}}>
                    <Card.Title style={{width: '10rem'}}>{values.title}</Card.Title>
                    <Card.Subtitle style={{width: '10rem'}}>{'Price: $' + values.price}</Card.Subtitle>
                  </Card.Body >
            
                  <Link to={`/order/${values.id}`}>
                    <PurchaseBtn style={{display: !`${user.first_name}` && !`${user.last_name}` ? 'none' : 'block'}}>
                      {/* <Link to={{path: `/order/${values.id}`, query:{id: `${values.id}`}}}>
                        <p>Buy</p>
                      </Link> */}                
                        <p>Buy</p> 
                    </PurchaseBtn>
                  </Link>
                  
                </div>       
              </CoffeeCard>
            </div>
            ))
          }
        </NewRow>

        <BrandLogo />

      </MenuContainer>

      <Footer />
    </div>

  )
}
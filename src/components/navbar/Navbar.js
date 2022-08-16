import React from "react";
import { LinkContainer  } from "react-router-bootstrap";
import { Navbar as Navbars, Nav, NavItem, Dropdown, DropdownButton} from 'react-bootstrap';
import { Avatar, NavLinkPage, LogoPanel, CafeIcon, FontDiv, RegiLink, LoginLink } from './styles'
import { useDispatch, useSelector } from "react-redux";
import { handleLogoutValue } from '../../store/actions/userActions'
import { useNavigate } from 'react-router-dom';

function Navbar() {

  //const avatarDefaultImg = process.env.REACT_APP_AVATAR_IMG
  const user = useSelector(state => state.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(handleLogoutValue());
    navigate('/login');
  };

  const navButton = (
    <Nav className="mr-auto" >
      <LinkContainer to='/'>
        <NavLinkPage>Home</NavLinkPage>
      </LinkContainer>
      <LinkContainer to='/menu'>
        <NavLinkPage>Menu</NavLinkPage>
      </LinkContainer>
      <LinkContainer to='/cart'>
        <NavLinkPage>Cart</NavLinkPage>
      </LinkContainer>
      <LinkContainer to='/about'>
        <NavLinkPage>About</NavLinkPage>
      </LinkContainer>
    </Nav>
  )

  const userLoginMenu = (
    <Nav>             
      <LinkContainer to='/login'>
        <LoginLink>Login</LoginLink>
      </LinkContainer>        
    </Nav>
  )

  const userDropdown = (
    <Nav>
      <DropdownButton style={{ marginRight: '1.5rem'}} className='user' title={user.first_name} variant="info" align="end">
        <Dropdown.Item eventKey="1">
          <LinkContainer to='/profile'>
            <NavItem>Profile</NavItem>
          </LinkContainer>
        </Dropdown.Item>
        <Dropdown.Item eventKey="2">
          <LinkContainer to="/history">
            <NavItem>Order History</NavItem>
          </LinkContainer>
        </Dropdown.Item>   
        <Dropdown.Item eventKey="3">
          <LinkContainer to="/register">
            <NavItem>Register</NavItem>
          </LinkContainer>
        </Dropdown.Item>   
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4" onClick={handleLogout}>
          Logout
        </Dropdown.Item>
      </DropdownButton>
    </Nav>
  )

  return (

    <div>
      <Navbars collapseOnSelect expand="lg" className="bg-dark">
        <LogoPanel style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginRight: '1.5rem'}}>
            <LinkContainer to='/'>
              <CafeIcon />           
            </LinkContainer>
            <FontDiv>Handy Cafe</FontDiv>   
        </ LogoPanel>

        <Navbars.Toggle aria-controls="responsive-navbar-nav" className="bg-light" style={{margin: '0 39rem 0 1rem', fontSize: '13px'}}/>
        <Navbars.Collapse id="responsive-navbar-nav">
          {navButton}

          { user.isLogin === false ? 
            <Nav className="ms-auto">
                <LinkContainer to='/register'>
                    <RegiLink>Register</RegiLink>
                </LinkContainer>
            </Nav>
            :
            <div></div>
          }

        </Navbars.Collapse>

        <div style={{ display: 'flex', flexDirection: 'row', margin: '0 auto'}}>
          { user.isLogin === false ? <div></div> : 
              <Nav className="ms-auto">
                <LinkContainer to='/profile'>
                  <NavItem>
                    <Avatar  style={{cursor: 'pointer', backgroundImage: `url(${user.avatar}`, marginTop: '0.2rem'}}/> 
                  </NavItem>
                </LinkContainer>
              </Nav>
          }
          
            { user.isLogin === false ? userLoginMenu : userDropdown}
          
        </div>
    </Navbars>
    </div>
  )
}

export default Navbar;


      
import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';
import {LinkContainer} from "react-router-bootstrap"
import { RegiContainer, HeaderDiv, RegiForm, RegiContext, CancelButton, RegiButton, FormError, FormSuccess} from './styles'
import { handleRegister } from '../../../api/UserApi';

const Register = () => {

  const avatarImg = process.env.REACT_APP_AVATAR_IMG;

  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    avatar: avatarImg,
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const onChange = (e) => {
    setValues({
      ...values,
      // firstname: e.target.value,
      // lastname: e.target.value,
      // email: e.target.value,
      [e.target.name]: e.target.value
      // firstname]: e.target.firstname,
      // firstname]: e.target.firstname,
    })
  }

  const validate = (values) => {
    const errors = {};
    // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!values.firstname) {
      errors.firstname = "Firstname is required!"
    }
    if (!values.lastname) {
      errors.lastname = "Lastname is required!"
    } 
    if (!values.email) {
      errors.email = "Email is required!"
    }
    if (!values.password) {
      errors.password = "Password is required!"
    }
    return errors;
  };

  const navigate = useNavigate();

  const onSubmit = async (e) => { 
    e.preventDefault();  
    const newFormErrors = validate(values);
    setFormErrors(newFormErrors);
    if (!Object.keys(newFormErrors).length) {
      console.log('bbb');
      const {firstname, lastname, email, password, avatar} = values;

      const res = await handleRegister({
        first_name: firstname,
        last_name: lastname,
        email,
        password,
        avatar,
      });
      
      if(!res.error) {
        setIsSubmit(true);
        setTimeout(() => {
          navigate('/login');
        }, 1500)
        
      } else if (res.error === "User already exists") {
        setFormErrors({
          firstname: '',
          lastname: '',
          password: '',
          email: "Email already exists"
        });
      }  
    }
  }

  return(
    <div>
      <NavBar />
      <RegiContainer>
        <RegiForm>
          <RegiContext>
            <br/>
            <HeaderDiv><h1>Register</h1></HeaderDiv>
            <form onSubmit={onSubmit}>
              <Form.Group controlId="formFirstname">
                <Form.Label>First Name:</Form.Label>
                <Form.Control 
                          name="firstname"
                          placeholder="Enter your firstname"
                          value={values.firstname}
                          onChange={onChange}
                />
               {formErrors.firstname && <FormError>{formErrors.firstname}</FormError>}
              </Form.Group>

              <Form.Group controlId="formLastname" style={{marginTop: '0.8rem'}}>
                <Form.Label>Last Name:</Form.Label>
                <Form.Control 
                          name="lastname"
                          placeholder="Enter your lastname"
                          value={values.lastname}
                          onChange={onChange}
                />
                {formErrors.lastname && <FormError>{formErrors.lastname}</FormError>}
              </Form.Group>

              <Form.Group controlId="formBasicEmail" style={{marginTop: '0.8rem'}}>
                <Form.Label>Email address</Form.Label>
                  <Form.Control 
                      type="email"
                      name="email" 
                      placeholder="Enter your email" 
                      value={values.email}
                      onChange={onChange}
                  />
                  {formErrors.email &&<FormError>{formErrors.email}</FormError>}
                  <Form.Text className="text-muted">
                    We'll never share your details with anyone else.
                  </Form.Text>
              </Form.Group>

              <Form.Group style={{marginTop: '0.3rem'}} controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                  <Form.Control 
                      type="password"
                      name="password" 
                      placeholder="Password" 
                      value={values.password}
                      onChange={onChange}
                  />
                  {formErrors.password && <FormError>{formErrors.password}</FormError>}
              </Form.Group>
              {isSubmit && <FormSuccess>{"User registered successfully"}</FormSuccess>}
              <LinkContainer to="/">
                <CancelButton variant="danger">
                    Cancel
                </CancelButton>
              </LinkContainer>

              {/* <LinkContainer to="/login">*/}
              <RegiButton variant="dark" type="submit"> 
                Submit
                {/* <button style={{ width: '6rem', marginLeft: '5.5rem', marginTop: '0.3rem'}}>Submit</button> */}
              </RegiButton>
               {/*</LinkContainer> */}
            </form>
          </RegiContext>
        </RegiForm>
      </RegiContainer>
      
      <Footer />
    </div>
  )
}

export default Register;
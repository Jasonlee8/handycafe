import React, { useState } from 'react';
import {Form } from 'react-bootstrap'
import NavBar from '../../navbar/Navbar'
import Footer from '../../footer/Footer'
import {LinkContainer} from 'react-router-bootstrap'
import { LoginContainer, LoginDiv, HeaderDiv, LoginForm, CancelBtn, SubmitBtn } from './styles';
import jwtDecode from 'jwt-decode';
import { handleLoginApi } from '../../../api/UserApi';
import { handleUserValue } from '../../../store/actions/userActions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FormError } from '../register/styles';


export default function Login() {

    const [values, setValues] = useState({
      email: '',
      password: '',
      errorMessage: '',
      isLogin: false
    });

    const [formErrors, setFormErrors] = useState({});

    const onChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const validate = (values) => {
      const errors = {};
      // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!values.email) {
        errors.email = "Email is required!"
      }
      if (!values.password) {
        errors.password = "Password is required!"
      }
      return errors;
    };

    const onSubmit = async (e) => {
      e.preventDefault();
      const newFormErrors = validate(values);
      setFormErrors(newFormErrors);
      if (!Object.keys(newFormErrors).length) {
        const {email, password} = values;

        try {
          const response = await handleLoginApi(email, password);
          if (response) {
            values.isLogin = true;
            localStorage.setItem('token', JSON.stringify(response));   
            const decode = jwtDecode(response.data);
            console.log(decode);
            dispatch(handleUserValue(decode));
            //dispatch(loginStatus(isLogin));
            navigate('/menu');
          } 
        } catch(error) {      
          const errMsg = error.response.data.error;
          console.log(errMsg);
          if (errMsg === 'User does not exist!') {
            setFormErrors({
              email: 'User does not exist!',
              password: '',
            });
          } else if (errMsg === 'Invalid password! Please try again') {
            setFormErrors({
              email: '',
              password: 'Invalid password! Please try again',
            });
          } else {
            alert('Network issues, please wait, or contact the admin for further assist');
          }
        }
      }    
    }

    return (
        <div>
          <NavBar />
          <LoginContainer>
            <LoginDiv>
              <LoginForm>
                <br/>
                <HeaderDiv><h1>User Login</h1></HeaderDiv>  
                <Form 
                // onSubmit={
                //     (e) => this.onSubmit(e, this.state.email, this.state.password)}
                    >
                    <Form.Group controlId="formBasicEmail" >
                        <Form.Label >Email address</Form.Label>
                        <Form.Control 
                            type="email" 
                            name="email"
                            placeholder="Enter email" 
                            value={values.email}
                            onChange={onChange}             
                        />
                        {formErrors.email && <FormError>{formErrors.email}</FormError>}
                        <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
            
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            name="password"
                            placeholder="Password" 
                            value={values.password}
                            onChange={onChange}  
                        />
                        {formErrors.password && <FormError>{formErrors.password}</FormError>}
                        {/* <Form.Text className="text-muted" variant="danger">
                            {values.errorMessage}
                        </Form.Text> */}
                    </Form.Group>
                      <LinkContainer to="/">
                          <CancelBtn variant="danger">
                              Cancel
                          </CancelBtn>
                      </LinkContainer>

                      <SubmitBtn variant="dark" type="submit" onClick={onSubmit}>
                          Submit
                      </SubmitBtn>
                </Form>
              </LoginForm>
            </LoginDiv>
          </LoginContainer>
          <Footer />
        </div>
    )
}

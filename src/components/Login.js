import React, { Component } from 'react';
import { Segment, Grid, Form, Button, Header, Checkbox, Container } from 'semantic-ui-react';
import logo from '../images/bitmap.png';
import AllClasses from './Login.module.css';

class Login extends Component {

    render() {
        return (

            <Container fluid className={AllClasses.parentcontainer}>
                <Segment className={AllClasses.maincontent}>
                    <div className={AllClasses.signinheader}>

                        <img src={logo} alt="logo" className={AllClasses.logo} />
                        <div className={AllClasses.signupdiv}>
                            <span className={AllClasses.accspan}>Don't have an account yet?</span>
                            <Button content='Sign up' floated="right" className={AllClasses.btnsignup} />
                        </div>
                    </div>

                    <Grid>

                        <Grid.Column width={5}></Grid.Column>
                        <Grid.Column width={6} className={AllClasses.signinform}>
                            <Header as="h2" textAlign="center">Sign in</Header>
                            <Form>
                                <Form.Field >
                                    <label className={AllClasses.signinlabel}>Email</label>
                                    <input placeholder='Email' />
                                </Form.Field>
                                <Form.Field >
                                    <label className={AllClasses.signinlabel}>Password</label>
                                    <input placeholder='Password' />
                                </Form.Field>
                                <Form.Field >
                                    <Checkbox label='Keep me signed in' className={AllClasses.chkbox} />
                                    <a href="/#" className={AllClasses.forgotPassword}>Forgot Password?</a>
                                </Form.Field>
                                <Form.Field >
                                    <Button type='submit' fluid className={AllClasses.signinbtn}>Sign in</Button>
                                </Form.Field>
                            </Form>
                        </Grid.Column>
                        <Grid.Column width={5}>

                        </Grid.Column>
                    </Grid>

                </Segment>
            </Container>

        );
    }
}

export default Login;
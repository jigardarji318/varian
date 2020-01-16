import React, { Component } from 'react';
import logo from '../images/bitmap.png';
import AllClasses from './Login.module.css';

class Login extends Component {

    render() {
        return (
            <main className={AllClasses.mainContainer}>
                <header>
                    <img src={logo} alt="Logo" className={AllClasses.logo} />
                    <button type="button" className={AllClasses.signupbtn}><span className={AllClasses.signupspn}>Sign up</span></button>
                    <span className={AllClasses.accspan}>Don't have an account yet?</span>
                </header>
                <section className={AllClasses.signinContent}>
                    <div className={AllClasses.signindiv}>
                        <span className={AllClasses.signintext}>Sign in</span>
                        <form className={AllClasses.signinform}>
                            <div className={AllClasses.emaildiv}>
                                <label htmlFor="email" className={AllClasses.emaillabel}>Email</label>
                                <input type="text" id="email" className={AllClasses.emailinput} />
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        );
    }
}

export default Login;
{/*<div className={AllClasses.mainContainer}>
                <div className={AllClasses.headerContent}>
                    <img src={logo} alt="Logo" className={AllClasses.logo} />
                    <button className={AllClasses.signupbtn} type="button"><span className={AllClasses.signupspn}>Sign up</span></button>
                    <span className={AllClasses.accspan}>Don't have an account yet?</span>
                </div>

                <div className={AllClasses.signinContent}>
                    <span className={AllClasses.signintext}>Sign in</span>
                </div>
        </div>*/}
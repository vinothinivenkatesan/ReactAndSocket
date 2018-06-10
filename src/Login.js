import React, { Component } from 'react';

class Login extends Component {

    postLogin(e) {
        e.preventDefault();
        console.log(e.target.user.value);
        sessionStorage.setItem('user', e.target.user.value);
        this.props.sendUser(e.target.user.value);
    }

    render() {
        return (
            <div className="login-bg">
                <div className="login-page">
                    <div className="form">
                        <form className="register-form">
                            <input type="text" placeholder="name" />
                            <input type="password" placeholder="password" />
                            <input type="text" placeholder="email address" />
                            <button>create</button>
                            <p className="message">Already registered? <a href="#">Sign In</a></p>
                        </form>
                        <form className="login-form" onSubmit={e => this.postLogin(e)}>
                            <input type="text" name="user" placeholder="username" />
                            <input type="password" name="password" placeholder="password" />
                            <button>login</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
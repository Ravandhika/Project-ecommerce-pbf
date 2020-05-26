import React, {Component} from 'react'
import './style.scss'
import Button from './../Forms/Button'
import {signInWithGoogle} from './../../Firebase/util'

class Signin extends Component{
    handleSubmit = async e =>{
        e.preventDefault();
    }
    render(){
        return(
            <div className="signin">
                <div className="wrap">
                    <h2>
                        Login
                    </h2>
                    <div className="wrap-form">
                        <form onSubmit={this.handleSubmit}>
                            <div className="social-sign-in">
                                <div className="row">
                                    <Button onClick={signInWithGoogle}>
                                        Login with Google Account
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}    
export default Signin
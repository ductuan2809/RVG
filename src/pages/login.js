import React,{useState} from 'react'
import './login.css'
import {Link,useHistory} from 'react-router-dom'
import {useLoginState} from '../State'
function Login() {

    const [loginstate,dispatch]=useLoginState()
    const [user,setUser]=useState({userName:"",userPwd:""});
    const history=useHistory()
    
    
    const submitHandler=e=>{
        e.preventDefault();
        loginstate.islogin=true;
        loginstate.Uname=user.userName;
        console.log(loginstate)
        history.push('/')
        
    }
    return (
        <div className="div-login">
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor="name">UserName:</label>
                    <input type="text" name="name" id="name" required onChange={e=>setUser({...user,userName: e.target.value}) } value={user.userName}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" required onChange={e=>setUser({...user,userPwd: e.target.value}) } value={user.userPwd}></input>
                </div>
                
                <input type="submit" value="Login" ></input>
                
                <Link to='/Register'>
                <input type="submit" value="Register"></input>
                </Link>
            </div>
        
        </form>
        </div>
    )
}

export default Login

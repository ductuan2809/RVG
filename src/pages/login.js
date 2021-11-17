import React,{useState} from 'react'
import './login.css'
import {Link,useHistory} from 'react-router-dom'
import {useLoginState} from '../State'
import axios from 'axios';
function Login() {

    const [loginstate,dispatch]=useLoginState()
    //const [user,setUser]=useState({userName:"",userPwd:""});
    const history=useHistory()
    const [userName, setUsername] = useState('');
    const [userPwd, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    
    
    const submitHandler = async (e) =>{
        e.preventDefault();

        const response = await fetch('http://localhost:5000/user/login',{
            //mode:"no-cors",
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            //credentials: 'include',
            body: JSON.stringify({
                userName: userName,
                userPwd: userPwd
            })
        })

        if(response.ok)
        {
            setRedirect(true);
            loginstate.islogin=true;
            loginstate.Uname=userName;
            var content = await response.json();
            console.log(content.data)
        }
        //history.push('/')
    }

    //if(redirect)
    //return ('/Home')

    return (
        <div className="div-login">
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor="name">UserName:</label>
                    <input type="text" name="name" id="name" required onChange={e=>setUsername(e.target.value.toString())} ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" required onChange={e=>setPassword(e.target.value.toString()) }></input>
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
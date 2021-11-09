import React,{useState} from 'react'
import './register.css'
import {Link} from 'react-router-dom'
function Register() {
    const [user,setUser]=useState({userName:"",userPwd:"",confirmuserPwd:"",email:""});
    const submitHandler=e=>{
        e.preventDefault();
       
    }
    return (
        <div className="div-register">
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Register</h2>
                <div className="form-group">
                    <label htmlFor="name">UserName:</label>
                    <input type="text" name="name" id="name" required onChange={e=>setUser({...user,userName: e.target.value}) } value={user.userName}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" required onChange={e=>setUser({...user,userPwd: e.target.value}) } value={user.userPwd}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password2">Confirm Password:</label>
                    <input type="password" name="password" id="password2" required onChange={e=>setUser({...user,confirmuserPwd: e.target.value}) } value={user.confirmuserPwd}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" id="email" required onChange={e=>setUser({...user,email: e.target.value}) } value={user.email}></input>
                </div>
                
                <input type="submit" value="Register" onClick={console.log(user)}></input>
                <Link to='/Register'>
                <input type="submit" value="Login"></input>
                </Link>
            </div>
        
        </form>
        </div>
    )
}

export default Register

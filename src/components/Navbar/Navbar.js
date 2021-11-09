import React, {useState,useEffect} from 'react'
import {Link} from 'react-router-dom';
import { Button } from '../Button/Button';
import './Navbar.css';
import { useLoginState } from '../../State';



function Navbar() {
    const [loginstate,dispatch]=useLoginState()
    console.log(loginstate.islogin)
    const [click,setClick]=useState(false);
    const [button,setButton]=useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(!click);

    const onLoginEvent = () => {
        closeMobileMenu();
        loginstate.islogin=true
        
       
        console.log(loginstate)
        

    }
    const onLogoutEvent = () => {
        closeMobileMenu();
        loginstate.islogin=false
        
        console.log(loginstate)
        

    }
    const showButton = () =>{
        if(window.innerWidth<=960){
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(()=>{
        showButton();
    },[]);
    window.addEventListener('resize',showButton)
    const Rendermenu = () =>{
        if(loginstate.islogin){

            return (
                <>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>  
                    </li>
                    
                    <li className='nav-item'>
                        <Link to='/' className='nav-links-mobile' onClick={onLogoutEvent}>
                            Logout
                        </Link>
                    </li>
                </ul>
                
                {button && <Button buttonStyle='btn--outline' onClick={onLogoutEvent}>Hello,{loginstate.Uname}</Button>
                }
                </>
            )
            
        }else {
            return (
                <>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>  
                    </li>
                    
                    <li className='nav-item'>
                        <Link to='/Login' className='nav-links-mobile' onClick={onLoginEvent}>
                            Login
                        </Link>
                    </li>
                </ul>
                
                {button && <Button buttonStyle='btn--outline' onClick={onLoginEvent}>Login</Button>}
                </>
            )
        }

    }

    return (
        
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    rEviEwGamE <i className='fab fa-typo3'/>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <Rendermenu/>
                
            </div>
        </nav>
        
    )
}

export default Navbar

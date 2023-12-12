import { useRef, useState } from "react";
import "./login.scss";
const Login = () => {
    const [email,setEmail] = useState("")
    const [pass,setPass] = useState("")
    const psdref = useRef()
    const emailref = useRef()
    const handlestart =()=>{
        setEmail(emailref.current.value)
        console.log(email)
    }
    const handlend = () => {
      setPass(psdref.current.value)
    }
  return (
    <div className='register'>
      <div className='top'>
        <img
          src='https://www.freepnglogos.com/uploads/netflix-logo-history-png-33.png'
          alt=''
        />
        <button className='login'>Sign in</button>
      </div>
      <div className='container'>
        <h1>Unlimited movies, TV Shows and more</h1>
        <h2>Watch anywhere. Cancel anytime</h2>
        <p>Ready to watch? Enter your email to start the membership</p>
        {!email ? (
          <div className='input'>
            <input type='email' placeholder='enter your email' ref={emailref} />
            <button className='start' onClick={ handlestart}>
              Get started
            </button>
          </div>
        ) : (
          <form className='input'>
            <input type='password' placeholder='enter password' ref={psdref} />
            <button className='start' onClick={handlend}>
              Start 
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
export default Login
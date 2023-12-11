const Register = () => {
  return (
    <div className='register'>
      <a href='https://www.netflix.com/' target='_blank' className='logo'>
        <img src='https://www.freepnglogos.com/uploads/netflix-logo-history-png-33.png' alt='Netflix logo' />
      </a>
      <form className='login'>
        <h1 className='login__title'>Sign Up</h1>
        <div className='login__group'>
          <input
            className='login__group__input'
            type='text'
            required
            placeholder='Email or phone number'
          />
          <label className='login__group__label'>Email or phone number</label>
        </div>
        <div className='login__group'>
          <input
            className='login__group__input'
            type='password'
            required
            placeholder='Password'
          />
          <label className='login__group__label'>Password</label>
        </div>
        <button className='login__sign-in' type='button'>
          Sign Up
        </button>
        <div className='login__secondary-cta'>
          <a href='#' className='login__secondary-cta__text'>
            Remember me
          </a>
          <a
            href='#'
            className='login__secondary-cta__text login__secondary-cta__text--need-help'
          >
            Need help?
          </a>
        </div>
      </form>
    </div>
  )
}

export default Register

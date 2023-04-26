import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Form.scss'
const logo = require('../../assets/image/logo_form.png')

export const Form = ({
  formHandleClick,
  title,
  redirectLink,
  text,
  redirectText,
  subtitle,
}) => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  return (
    <div className="formUser">
      <div className="formUser__top">
        <div className="formUser__top-image">
          <img src={logo} alt="LogoForm" />
        </div>
        <h2 className="formUser__top-title">{title}</h2>
      </div>
      <form
        className="formUser__middle"
        onSubmit={(e) => {
          e.preventDefault()
          formHandleClick(email, pass)
        }}
      >
        <input
          className="formUser__middle-email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="formUser__middle-pass"
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <div className="formUser__middle-remember">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>
        <button className="formUser__middle-btn"> {subtitle} </button>
      </form>
      <p className="formUser__redirect">
        {text}
        <span>
          <Link to={redirectLink}> {redirectText} </Link>
        </span>
      </p>
      <a className="formUser__forgotLink" href="">
        Forgot a password?
      </a>
    </div>
  )
}

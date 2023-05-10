import { useDispatch } from 'react-redux'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { setUser } from '../../Store/userSlice'
import { Form } from '../Form/Form'

export const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogin = (email, password) => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        localStorage.setItem('userName', JSON.stringify(user.email))
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          }),
        )
        navigate('/allBooks')
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        alert('Invalid user!')
      })
  }
  return (
    <Form
      subtitle="Log In"
      title="Log In"
      redirectText="Sign In"
      redirectLink="/register "
      text="Back to registration."
      formHandleClick={handleLogin}
    />
  )
}

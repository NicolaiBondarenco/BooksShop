import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { Form } from '../Form/Form'
import { useNavigate } from 'react-router-dom'
import { setUser } from '../../Store/userSlice'

export const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleRegistre = (email, password) => {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
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
        console.log(errorCode, errorMessage)
      })
  }
  return (
    <Form
      subtitle="Register"
      redirectText="Log In"
      redirectLink="/login"
      title="REGISTRATION"
      text="Already have an account?"
      formHandleClick={handleRegistre}
    />
  )
}

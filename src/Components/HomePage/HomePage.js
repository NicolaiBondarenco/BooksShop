import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const HomePage = () => {
  const { email } = useSelector((state) => state.user)
  return (
    <div>
      <p>
        You can enter tup to link
        <span>
          <Link to="/register"> Register </Link>
        </span>
      </p>
      <p>
        Already have an account?
        <span>
          <Link to="/login"> Log In </Link>
        </span>
      </p>
    </div>
  )
}

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Outlet, Navigate} from 'react-router-dom'

function ProtectedRoutes() {
  const user = useSelector(state => state?.user)
  const dispatch = useDispatch()

  return (
    user.user ? <Outlet/> : <Navigate to='/login'/>
  )
}

export default ProtectedRoutes
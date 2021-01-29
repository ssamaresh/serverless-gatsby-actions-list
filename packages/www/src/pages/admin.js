import React, { useContext } from 'react'
import { Container, Heading } from 'theme-ui'
import { Router } from '@reach/router'
import { IdentityContext } from '../../identity-context'
import Nav from '../components/nav'

const AdminLoggedIn = ({user}) => {
  return (
    <>
      <Nav />
      <span>Dash hasUser: {user && user.user_metadata.full_name}</span>
    </>
  )
}

const AdminLoggedOut = () => {
  return <Heading>{`You need to be logged in to view this page`}</Heading>
}

const Admin = () => {
  const { user } = useContext(IdentityContext)
  return (
    <Container>
      {user ? (
        <Router>
          <AdminLoggedIn
            path="/admin"
            user={user}
          />
        </Router>
      ) : (
        <Router>
          <AdminLoggedOut path="/admin" />
        </Router>
      )}
    </Container>
  )
}

export default Admin

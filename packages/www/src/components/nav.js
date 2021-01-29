import React, { useContext } from 'react'
import { Container, Text, Button, Flex, NavLink } from 'theme-ui'
// import { Link } from '@reach/router'
import { Link } from 'gatsby'
import { IdentityContext } from '../../identity-context'

const Nav = () => {
  const { user, identity: netlifyIdentity } = useContext(IdentityContext)

  return (
    <Container>
      <Flex
        as="nav"
        sx={{
          justifyContent: 'space-between',
        }}
      >
        <Flex
          sx={{
            alignItems: 'center',
          }}
        >
          <NavLink as={Link} to="/" p={2}>
            Home
          </NavLink>
          <NavLink as={Link} to="/dashboard" p={2}>
            Dashboard
          </NavLink>
          <NavLink as={Link} to="/admin" p={2}>
            Admin Portal
          </NavLink>
        </Flex>

        <Flex
          sx={{
            alignItems: 'center',
          }}
        >
          {user ? (
            <>
              <Text
                sx={{
                  fontWeight: 'bold',
                  mr: 4,
                }}
              >
                User: {user && user.user_metadata.full_name}
              </Text>
              <Button
                sx={{
                  mx: 'auto',
                  my: 3,
                }}
                onClick={() => {
                  netlifyIdentity.logout()
                }}
              >
                Log Out
              </Button>
            </>
          ) : (
            <Button
              sx={{
                mx: 'auto',
                my: 3,
              }}
              onClick={() => {
                netlifyIdentity.open()
              }}
            >
              Log In
            </Button>
          )}
        </Flex>
      </Flex>
    </Container>
  )
}

export default Nav

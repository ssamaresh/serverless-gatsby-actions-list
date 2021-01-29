import React, { useContext } from 'react'
import { Container, Heading, Flex } from 'theme-ui'
// import { Link } from 'gatsby'
import { IdentityContext } from '../../identity-context'
import Nav from '../components/nav';

const App = () => {
  const { user, identity: netlifyIdentity } = useContext(IdentityContext)

  console.log('USER', user, netlifyIdentity)

  return (
    <Container>
      <Nav />
      <Flex
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 3,
        }}
      >
        <Heading as="h1">Get Ready! Take Action.</Heading>
      </Flex>
    </Container>
  )
}

export default App

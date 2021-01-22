import React, {useEffect} from 'react';
import { Container, Heading, Button, Flex } from 'theme-ui'
import netlifyIdentity from 'netlify-identity-widget';

const App =  props => {

  useEffect(() => {
    netlifyIdentity.init({});
  });

  const handleLogin = () => {
    netlifyIdentity.open();
  };

  return (
    <Container>
      <Flex sx={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3
      }}
    >
      <Heading as='h1'>Get Ready! Take Action.</Heading>
      <Button
        sx={{
          mx: 'auto',
          my: 3
        }}
        onClick={handleLogin}
      >
        Log In
      </Button>
    </Flex>
  </Container>
  )
};

export default App;
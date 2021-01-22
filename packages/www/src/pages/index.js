import React from 'react';
import { Container, Heading, Button, Flex } from 'theme-ui'

export default props => {
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
                <Button sx={{
                    mx: 'auto',
                    my: 3
                }}>Log In</Button>
            </Flex>
        </Container>
    )
};

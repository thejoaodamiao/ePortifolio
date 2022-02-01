import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
} from '@chakra-ui/react'
import NextLink from 'next/link'

const NotFound = () => {
  return (
    <Container className="not-found">
      <Heading as="h1"> Not Found</Heading>
      <Text>A Pagina que você procurou não foi achada!</Text>
      <Divider my={6}></Divider>

      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="teal">Retornar para Home</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
export { getInitialProps } from '../libs/chakra'

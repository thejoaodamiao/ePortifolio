import { Box, Container, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container bg="dark">
      <Box borderRadius="lg" bg="red" p={3} mb={6} algign="center">
        Hello, I&apos;m a full-Stack developer based in brazil!{' '}
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            João Damião Jr
          </Heading>
          <p>Developer / Designer / brabo </p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page

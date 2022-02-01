import Head from 'next/head'
import NavBar from '../navbar.js'
import { Box, Container } from '@chakra-ui/react'
import VoxelDogLoader from '../voxel-dog-loader'
import dynamic from 'next/dynamic'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />,
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta name="author" content="João Damião" />
        <meta property="og:site_name" content="João Damião - Portifolio" />
        <link
          rel="shortcut icon"
          href="/images/footprint.png"
          type="image/x-icon"
        />
        <title>João Damião - Portifolio</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={5}>
        <LazyVoxelDog />
        {children}
      </Container>
    </Box>
  )
}

export default Main

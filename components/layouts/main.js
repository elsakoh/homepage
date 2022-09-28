import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import Loader from '../goose-loader'

const GooseModel = dynamic(() => import('../goose'), {
  ssr: false,
  loading: () => <Loader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Elsa's homepage" />
        <meta name="author" content="Elsa Koh" />
        <link rel="apple-touch-icon" href="/40414988.png" />
        <link rel="shortcut icon" href="/40414988.png" type="image/x-icon" />
        <meta name="twitter:title" content="Elsa's homepage" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content="Elsa Koh" />
        <meta name="og:title" content="Elsa Koh" />
        <meta property="og:type" content="website" />
        <meta property="og:image" href="/40414988.png" />
        <title>Elsa Koh - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <GooseModel />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main

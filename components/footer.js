import { Box, Link } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Elsa Koh. All Rights Reserved.
      <p>
        This website is built based on{' '}
        <Link href="https://www.craftz.dog/" target="_blank" rel="noreferrer">
          Takuya Matsuyama's website
        </Link>
        .
      </p>
    </Box>
  )
}

export default Footer

import React, { FunctionComponent } from 'react'
import { Box, Container } from 'theme-ui'
import { useSiteMetadata } from '../hooks/site-metadata'
import { Header } from './header'

const Layout: FunctionComponent = ({ children }) => {
  const { title, description } = useSiteMetadata()

  return (
    <>
      <Header
        siteTitle={title || `Title`}
        description={description}
      />
      <Container
        sx={{
          maxWidth: 'container',
        }}
      >
        <Box
          as="main"
          sx={{
            width: '100%',
            flex: '1 1 auto',
          }}
        >
          {children}
        </Box>
        <Box
          as="footer"
          sx={{
            marginTop: '2rem',
            fontSize: 'xl',
          }}
        >
          © {new Date().getFullYear()} Scott Spence. All Rights
          Reserved.
        </Box>
      </Container>
    </>
  )
}

export default Layout

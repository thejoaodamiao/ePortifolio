import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import { AnimatePresence } from 'framer-motion'
import Chakra from '../libs/chakra'

const Website = ({ Component, pageProps, router }) => {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </Chakra>
  )
}

export default Website

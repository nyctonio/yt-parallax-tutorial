import '../styles/globals.css'
import { ParallaxProvider } from 'react-scroll-parallax'

function MyApp({ Component, pageProps }) {
  return (
    <ParallaxProvider scrollAxis='horizontal'>
      <Component {...pageProps} />
    </ParallaxProvider>
  )
}

export default MyApp

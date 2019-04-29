import '../styles/styles.scss'
import Head from 'next/head'
import HeaderComponent from '../components/header'
import IntroComponent from '../components/intro'

export default () => (
  <div>
    <Head>
      <title>Basement Challenge</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <HeaderComponent />
    <main>
      <IntroComponent />
    </main>
  </div>
)

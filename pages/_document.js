import Document, { Head, Main, NextScript } from 'next/document'
import Header from '../components/header'
import Footer from '../components/footer'
import '../styles/index.scss'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <title>My App</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
          <Header />
          <Main />
          <NextScript />
          <Footer />
        </body>
      </html>
    )
  }
}

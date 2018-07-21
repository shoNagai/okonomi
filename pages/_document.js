import Document, { Head, Main, NextScript } from 'next/document'
import { Provider } from 'mobx-react'
import Store from '../mobx/store'
import Header from '../components/header'
import '../styles/index.scss'

export default class MyDocument extends Document {
  constructor(props) {
    super(props)
    this.store = new Store
  }

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
          <Provider store={this.store}>
            <Main />
          </Provider>
          <NextScript />
        </body>
      </html>
    )
  }
}

import { ApolloProvider } from '@apollo/client'

import Layout from '@/components/templates/Layout'
import '@/styles/globals.css'
import { client } from '@/helpers/graphql/client'
import { persistor, store } from '@/helpers/redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import 'flatpickr/dist/themes/confetti.css'
import 'react-toastify/dist/ReactToastify.css'

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PersistGate>
      </Provider>
    </ApolloProvider>
  )
}

import { Fragment } from 'react'
import Navbar from '../organisms/Navbar'
import Head from 'next/head'
import { ToastContainer } from 'react-toastify'

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Head>
        <title>Sunevents</title>
        <meta name='description' content='Sun events list' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='relative flex flex-col w-full h-screen'>
        <Navbar />
        <section className='h-[calc(100%-56px)] bg-orange-50 overflow-auto w-full'>
          {children}
        </section>
        <ToastContainer
          position='top-right'
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='light'
        />
      </main>
    </Fragment>
  )
}

export default Layout

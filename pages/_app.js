import Layout from '@/components/Layout'
import '@/styles/globals.css'

import { ThemeProvider } from 'next-themes'
import { useState, useEffect } from "react";
import { useTheme } from 'next-themes'

import { store } from '../store'
import { Provider } from 'react-redux'


export default function App({ Component, pageProps }) {

  const { theme, setTheme } = useTheme()
  const [toggle, setToggle] = useState(true)
  return (
    <ThemeProvider enableSystem={true} attribute="class" defaultTheme="system">
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} theme={theme} setTheme={setTheme} toggle={toggle} setToggle={setToggle} />
        </Layout>
      </Provider>
    </ThemeProvider>
  )
}

import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Main } from "src/components/Main"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>

      <Main page="about" />
    </>
  )
}

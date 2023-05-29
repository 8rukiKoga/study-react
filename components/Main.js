import styles from '@/styles/Home.module.css'
import { Inter } from 'next/font/google'
import { Links } from "../components/Links"
import { Logo } from "../components/Logo"
import { Headline } from "../components/Headline"

const inter = Inter({ subsets: ['latin'] })

export function Main(props) {
  return (
      <main className={`${styles.main} ${inter.className}`}>

      <Headline title={props.page}>
        <code className={styles.code}>pages/{props.page}.js</code>
      </Headline>

        <Logo />

        <Links />

      </main>
  )
}
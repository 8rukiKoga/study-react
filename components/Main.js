import styles from './Main.module.css'
import { Inter } from 'next/font/google'
import { Links } from "../components/Links"
import { Logo } from "../components/Logo"
import { Headline } from "../components/Headline"
import { Header } from "../components/Header"

const inter = Inter({ subsets: ['latin'] })

export function Main(props) {
    return (
        <main className={`${styles.main} ${inter.className}`}>

            <Header />

            <Headline title={props.page}>
                <code className={styles.code}>pages/{props.page}.js</code>
            </Headline>

            <Logo />

            <Links />

        </main>
    )
}
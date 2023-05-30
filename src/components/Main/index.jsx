import styles from 'src/components/Main/Main.module.css'
import { Inter } from 'next/font/google'
import { Links } from "src/components/Links"
import { Logo } from "src/components/Logo"
import { Headline } from "src/components/Headline"
import { Header } from "src/components/Header"

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
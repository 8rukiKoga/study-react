import Image from 'next/image'
import styles from './Headline.module.css'

export function Headline(props) {
    return (
        <div>
            <p>
                { props.title } Page
            </p>
            <p>
                { props.children }
            </p>
            <div>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    By{' '}
                    <Image
                        src="/vercel.svg"
                        alt="Vercel Logo"
                        className={styles.vercelLogo}
                        width={100}
                        height={24}
                        priority
                    />
                </a>
            </div>
        </div>
    );
}

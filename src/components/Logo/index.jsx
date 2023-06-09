import styles from 'src/components/Logo/Logo.module.css'
import Image from 'next/image'

export function Logo() {
    return (
        <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    )
}
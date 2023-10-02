import * as styles from './Header.module.css'

export function Header() {
    return (
        <header className={styles.header}>
            <img
                className={styles.logo}
                src="/assets/ignite-symbol.svg"
                alt="logo img"
            />
           <strong> Ignite Feed </strong>
        </header>
    )
}
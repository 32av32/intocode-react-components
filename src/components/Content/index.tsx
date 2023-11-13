import styles from './Content.module.css';


export function Content() {
    return (
        <div className={styles.container}>
            <div className={styles.counter}>0</div>
            <div className={styles.buttons_menu}>
                <button className={`${styles.button} ${styles.buttons_blue}`}>Увеличить</button>
                <button className={`${styles.button} ${styles.buttons_yellow}`}>Уменьшить</button>
                <button className={`${styles.button} ${styles.buttons_grey}`}>Сбросить</button>
            </div>
        </div>
    )
}
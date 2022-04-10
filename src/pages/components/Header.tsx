import styles from '../../styles/header.module.scss'

export default function Header() {
  return (
    <header id={styles.container}>
      <div>
        <h1 className={styles.title}>casebycase</h1>
        <p className={styles.description}>One today is worth two tomorrow.</p>
      </div>
    </header>
  )
}

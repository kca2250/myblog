import styles from '../../styles/header.module.scss'

export default function Header() {
  return (
    <header id={styles.container}>
      <h1 className={styles.title}>casebycase</h1>
    </header>
  )
}

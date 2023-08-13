import styles from "./index.module.css"

function Match({home, away, result, identifier, date, live}: MatchProps) {
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
  const formattedDate = date ? new Date(date).toLocaleString("de", { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", timeZone: tz }) : null
  return (
    <div className={styles.flex}>
      <span className={identifier === 1 ? styles.winner : undefined}>{home}</span>
      <span className={identifier === 2 ? styles.winner : undefined}>{away}</span>
      <span className={live ? styles.winner : undefined}>{result ? result : "–:–"}</span>
      {formattedDate && <span>{formattedDate}</span>}
    </div>
  )
}

export default Match
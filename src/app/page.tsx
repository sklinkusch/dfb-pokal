import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", padding: "3rem" }}>
      <h1 style={{ marginBottom: "1rem" }}>Liste von DFB-Pokal-Spielzeiten</h1>
      <ul style={{ listStylePosition: "inside" }}>
        <li>
          <Link href="/2023-24" style={{ color: "blue"}}>Saison 2023/24</Link>
        </li>
      </ul>
    </main>
  )
}

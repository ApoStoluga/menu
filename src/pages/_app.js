import '@/styles/globals.scss'
import Link from 'next/link'

export default function App({ Component, pageProps }) {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/menu">Menu</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}

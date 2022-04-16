import Link from 'next/link'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark border-b p-4'>
        <p className="text-4xl font-bold">REVOLT Marketplace</p>
        <div className="flex mt-4">
          <Link href="/">
            <a className="mr-6 text-blue-500 font-bold">
              Home
            </a>
          </Link>
          <Link href="/list-property">
            <a className="mr-6 text-blue-500 font-bold">
              List Property
            </a>
          </Link>
          <Link href="/my-property">
            <a className="mr-6 text-blue-500 font-bold">
              My Property
            </a>
          </Link>
          <Link href="/your-dashboard">
            <a className="mr-6 text-blue-500 font-bold">
              Your Dashboard
            </a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp

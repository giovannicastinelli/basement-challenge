import React from 'react'
import Link from 'next/link'
import '../styles/footer.scss'

export default class FooterComponent extends React.Component {
  render () {
    return (
      <footer>
        <nav className='footer_nav'>
          <Link href='#intro'>
            <a><img className='logo' src='/static/grey-triangle.svg' alt='' /></a>
          </Link>
          <ul>
            <li>
              <Link href='#'>
                <a>Company</a>
              </Link>
            </li>
            <li>
              <Link href='#'>
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </footer>)
  }
}

import React from 'react'
import Link from 'next/link'
import '../styles/header.scss'

export default class HeaderComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = { position: 0 }
  }

  componentDidMount () {
    window.addEventListener('scroll', () => {
      this.setState({
        opened: false,
        position: window.pageYOffset
      })
    })
  }
  render () {
    return (
      <div className='header_spacing'>
        <div className={`header_wrapper ${this.state.position > 80 ? 'shrink' : ''}`}>
          <input type='checkbox' id='menu' name='menu' />
          <header>
            <label htmlFor='menu'>
              <svg className={`menu ham hamRotate ham8  ${this.state.opened ? 'active' : ''}`} viewBox='0 0 100 100' width='48' onClick={() => this.setState({ opened: !this.state.opened })}>
                <path className='line top' d='m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20' />
                <path className='line middle' d='m 30,50 h 40' />
                <path className='line bottom' d='m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20' />
              </svg>
            </label>
            <Link href='#intro'>
              <a><img className='logo' src='/static/triangle.svg' alt='' /></a>
            </Link>
            <nav className='main_nav'>
              <ul>
                <li>
                  <Link href='#intro'>
                    <a>Intro</a>
                  </Link>
                </li>
                <li>
                  <Link href='#features'>
                    <a>Features</a>
                  </Link>
                </li>
                <li>
                  <Link href='#cases'>
                    <a>Use Cases</a>
                  </Link>
                </li>
              </ul>
              <aside className='sign_actions'>
                <a>Login</a>
                <a className='button'>Join Free</a>
              </aside>
            </nav>
          </header>
        </div>
      </div>)
  }
}

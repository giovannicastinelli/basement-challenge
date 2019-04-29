import React from 'react'
import '../styles/intro.scss'

export default class IntroComponent extends React.Component {
  render () {
    return (
      <section id='intro'>
        <h1>Serverless framework</h1>
        <p>
          The open standard for <b>serverless development.</b><br />
          With over 6 million downloads, the Serverless Framework is the tool<br />
          developers trust to <b>build and deploy serverless applications.</b>
        </p>
        <div className='actions'>
          <button className='button'>LEARN MORE</button>
          <button className='button dark'>START WITH GITHUB</button>
        </div>
      </section>)
  }
}

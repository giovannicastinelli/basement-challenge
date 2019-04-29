import React from 'react'
import '../styles/cases.scss'

export default class CasesComponent extends React.Component {
  render () {
    return (
      <section id='cases'>
        <h2>Use Cases</h2>
        <p>These are the 3 main use cases for the Serverless Framework that you <b>should know about</b></p>
        <div className='main_cases'>
          <aside>
            <h4>Simple, scaleable APIs</h4>
            <p>The Serverless Framework provides a simple way to develop infinitely scaleable, pay-per-execution APIs. A single configuration file allows you to list your functions and define the endpoints that they’re subscribed to. <br /><b>Hit deploy and you’re live</b></p>          </aside>
          <aside>
            <h4>Easy Automation</h4>
            <p>The Serverless Framework makes automating anything quick and easy. Simply subscribe a function to the event and <b>let the framework take care of the rest.</b></p>
          </aside>
          <aside>
            <h4>Data Processing</h4>
            <p>Transforming data and building data pipelines <b>has never been easier.</b></p>
          </aside>
        </div>
      </section>
    )
  }
}

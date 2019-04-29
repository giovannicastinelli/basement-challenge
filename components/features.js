import React from 'react'
import '../styles/features.scss'

export default class FeaturesComponent extends React.Component {
  render () {
    return (
      <section id='features'>
        <div className='features_wrapper'>
          <div className='features_card' />
          <aside>
            <h2>Open source</h2>
            <p>
            The Serverless Framework supports 8 different cloud providers with a single developer experience, giving you the choice to pick the proper tool for the job.
              <br /><br />
            Over 28,000 Github stars, 100+ example apps, and 200+ open source plugins. The Serverless Framework has been adopted by thousands of companies worldwide.
            </p>
            <button className='button'>QUICK START</button>
          </aside>
          <aside>
            <ul className='main_features'>
              <li><b>Simple</b> Developer Experience</li>
              <li>Keep your workflow in the CLI, <b>focus on code</b>, avoid the AWS console.</li>
              <li><b>29k</b> GitHub stars</li>
              <li><b>Amazing Community</b></li>
              <li>Supports <b>Top Cloud Providers</b></li>
              <li><b>Vendor Agnostic</b></li>
            </ul>
          </aside>
        </div>
      </section>
    )
  }
}

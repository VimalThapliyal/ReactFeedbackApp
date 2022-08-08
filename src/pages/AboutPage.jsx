import React, { Component } from 'react'
import Card from '../shared/Card'
import { Link } from 'react-router-dom';

export class AboutPage extends Component {
  render() {
    return (
      <Card>
        <div className="about">
            <h1>About This Project</h1>
            <p>This is a React app to leave feedback for a product or service</p>
            <p>Version: 1.0.0</p>

            <p>
                <Link to="/">Back To Home</Link>
            </p>
        </div>
      </Card>
    )
  }
}

export default AboutPage
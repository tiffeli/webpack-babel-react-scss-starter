// Import React
import React from 'react';

// Create class called HelloText that extends the base React Component class
export default class HelloText extends React.Component {
  constructor() {
    super();
    this.state = {
      intro: 'This is your index page.'
    }
  }

  render() {
    return <p>This is your index page</p>
  }
}

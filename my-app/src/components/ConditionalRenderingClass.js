import React, { Component } from 'react'

export class ConditionalRenderingClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoaded: true,
         isLoggedIn: true
      }
    }

    render() {
        return (
        <div>
            <h1>{this.state.isLoaded ? 'Data loaded!' : 'Loading...'}</h1>
            {this.state.isLoggedIn ? (
                <div>
                    <p>Welcome!</p>
                    <ol>
                        <li>Confirm email</li>
                        <li>Complete profile</li>
                        <li>Get newsletter</li>
                    </ol>
                </div>
            ) : (<p>Please sign in</p>)}
        </div>
        )
    }
}

export default ConditionalRenderingClass
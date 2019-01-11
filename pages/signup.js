import { Component } from 'react'

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password1: '',
      password2: '',
    }
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">Signup New User</h1>
        <div className="columns">
          <div className="column is-one-third">
            <form method="POST" noValidate>
              <div className="field">
                <label className="label">Username</label>
                <div className="control">
                  <input className="input" type="text" placeholder="Your username"/>
                </div>
              </div>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input className="input" type="email" placeholder="Your email"/>
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input className="input" type="password" placeholder="Your password"/>
                </div>
              </div>
              <div className="field">
                <label className="label">Password Confirmation</label>
                <div className="control">
                  <input className="input" type="password" placeholder="Confirm your password"/>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <label class="checkbox">
                    <input type="checkbox"/> I agree to the <a href="#">terms and conditions</a>
                  </label>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <button class="button is-link">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Signup
import { Component } from 'react'
import axios from 'axios'

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = this._getInitialState()

    this._onchangeUsername = this._onchangeUsername.bind(this)
    this._onchangeEmail = this._onchangeEmail.bind(this)
    this._onchangePassword1 = this._onchangePassword1.bind(this)
    this._onchangePassword2 = this._onchangePassword2.bind(this)
    this._submitForm = this._submitForm.bind(this)
  }

  _getInitialState() {
    return {
      username: '',
      email: '',
      password1: '',
      password2: '',
    }
  }

  _onchangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  _onchangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  _onchangePassword1(e) {
    this.setState({
      password1: e.target.value
    })
  }

  _onchangePassword2(e) {
    this.setState({
      password2: e.target.value
    })
  }

  _submitForm(e) {
    e.preventDefault()
    axios.post('/signup', this.state).then((response) => {
      console.log(response)
    }).catch((error) => {
      console.log(error)
    })
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">Signup New User</h1>
        <div className="columns">
          <div className="column is-one-third">
            <form method="POST" onSubmit={this._submitForm} noValidate>
              <div className="field">
                <label className="label">Username</label>
                <div className="control">
                  <input className="input" type="text" onChange={this._onchangeUsername}
                    value={this.state.username} placeholder="Your username"/>
                </div>
              </div>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input className="input" type="email" onChange={this._onchangeEmail}
                    value={this.state.email} placeholder="Your email"/>
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input className="input" type="password" onChange={this._onchangePassword1}
                    value={this.state.password1} placeholder="Your password"/>
                </div>
              </div>
              <div className="field">
                <label className="label">Password Confirmation</label>
                <div className="control">
                  <input className="input" type="password" onChange={this._onchangePassword2}
                    value={this.state.password2} placeholder="Confirm your password"/>
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <label className="checkbox">
                    <input type="checkbox"/> I agree to the <a href="#">terms and conditions</a>
                  </label>
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button className="button is-link">Submit</button>
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
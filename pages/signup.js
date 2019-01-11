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
      errorUsername: [],
      errorEmail: [],
      errorPassword1: [],
      errorPassword2: []
    }
  }

  _resetValueState() {
    this.setState({
      username: '',
      email: '',
      password1: '',
      password2: ''
    })
  }

  _resetErrorState() {
    this.state.errorUsername = []
    this.state.errorEmail = []
    this.state.errorPassword1 = []
    this.state.errorPassword2 = []
  }

  _getPostData() {
    return {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password1
    }
  }

  _onchangeUsername(e) {
    this.setState({
      username: e.target.value
    })

    if (this.state.errorUsername.length > 0) this.state.errorUsername = []
  }

  _onchangeEmail(e) {
    this.setState({
      email: e.target.value
    })

    if (this.state.errorEmail.length > 0) this.state.errorEmail = []
  }

  _onchangePassword1(e) {
    this.setState({
      password1: e.target.value
    })

    if (this.state.errorPassword1.length > 0) this.state.errorPassword1 = []
  }

  _onchangePassword2(e) {
    this.setState({
      password2: e.target.value
    })

    if (this.state.errorPassword2.length > 0) this.state.errorPassword2 = []
  }

  _validate() {
    let isValid = true

    if (this.state.username == '') {
      let error = [...this.state.errorUsername]
      error.push("Username required")
      this.setState({
        errorUsername: error
      })
      isValid = false
    }

    if (this.state.email == '') {
      let error = [...this.state.errorEmail]
      error.push("Email required")
      this.setState({
        errorEmail: error
      })
      isValid = false
    }

    if (this.state.password1 == '') {
      let error = [...this.state.errorPassword1]
      error.push("Password required")
      this.setState({
        errorPassword1: error
      })
      isValid = false
    }

    if (this.state.password2 == '') {
      let error = [...this.state.errorPassword2]
      error.push("Password confirmation required")
      this.setState({
        errorPassword2: error
      })
      isValid = false
    }

    return isValid
  }

  _submitForm(e) {
    e.preventDefault()

    this._resetErrorState()

    if (this._validate()) {
      const data = this._getPostData()
      axios.post('/signup', data).then((response) => {
        console.log(response)
      }).catch((error) => {
        console.log(error)
      })
    } else {
      console.log(this.state)
    }
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
                  <input className={"input" + (this.state.errorUsername.length > 0 ? ' is-danger' : '')}
                    type="text" onChange={this._onchangeUsername} value={this.state.username}
                    placeholder="Your username"/>
                </div>
                {
                  this.state.errorUsername.map((errorMsg, idx) => <p key={idx} className="help is-danger">{errorMsg}</p>)
                }
              </div>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input className={"input" + (this.state.errorEmail.length > 0 ? ' is-danger' : '')}
                    type="email" onChange={this._onchangeEmail} value={this.state.email}
                    placeholder="Your email"/>
                </div>
                {
                  this.state.errorEmail.map((errorMsg, idx) => <p key={idx} className="help is-danger">{errorMsg}</p>)
                }
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input className={"input" + (this.state.errorPassword1.length > 0 ? ' is-danger' : '')}
                    type="password" onChange={this._onchangePassword1} value={this.state.password1}
                    placeholder="Your password"/>
                </div>
                {
                  this.state.errorPassword1.map((errorMsg, idx) => <p key={idx} className="help is-danger">{errorMsg}</p>)
                }
              </div>
              <div className="field">
                <label className="label">Password Confirmation</label>
                <div className="control">
                  <input className={"input" + (this.state.errorPassword2.length > 0 ? ' is-danger' : '')}
                    type="password" onChange={this._onchangePassword2} value={this.state.password2}
                    placeholder="Confirm your password"/>
                </div>
                {
                  this.state.errorPassword2.map((errorMsg, idx) => <p key={idx} className="help is-danger">{errorMsg}</p>)
                }
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
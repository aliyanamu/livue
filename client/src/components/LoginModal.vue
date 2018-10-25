<template>
  <div>
    <button class='btn btn-warning' @click='logtoggle()'>Log in</button>
    <div>
      <transition name='fade'>
        <div class='modal' v-show='logshow'>
          <div class='modal-message'>
            <button class="close" @click='close()'>x</button>
            <div>
              <h2>Log In</h2>
            </div>
            <p> {{notif}} </p>
            <div>
              <div class='ui form'>
                <div class='field'>
                  <label>Email</label>
                  <input placeholder='Enter your email' type='text' v-model='email'>
                </div>
                <div class='field'>
                  <label>Password</label>
                  <input placeholder='Enter your password' type='password' v-model='password'>
                </div>
                <div class='actions'>
                  <button class='ui button signup-btn' @click='login()'>Log in</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'login-modal',
  data () {
    return {
      logshow: false,
      password: '',
      email: '',
      notif: '',
      baseurl: 'http://localhost:3000'
    }
  },
  methods: {
    close () {
      this.logtoggle()
      this.notif = ''
    },
    logtoggle () {
      this.logshow = !this.logshow
    },
    login () {
      let self = this
      axios({
        method: 'POST',
        url: this.baseurl + '/users/login',
        data: {
          email: self.email,
          password: self.password
        }
      })
        .then(response => {
          console.log('login', response)
          let token = response.data.token
          localStorage.setItem('token', token)
          location.reload()
        })
        .catch(error => {
          console.log(error.response)
          if (!self.email) {
            self.notif = 'email is required'
          } else if (!self.password) {
            self.notif = 'password is required'
          } else {
            self.notif = error.response.data.message
          }
        })
    }
  }
}
</script>

<style scoped>
.signup-btn {
  width: 100%;
  color: whitesmoke;
  background: dimgray;
}

.modal {
  position: fixed;
  left: 38%;
  top: 20%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 400px;
  height: fit-content;
  background: orange;
  border-radius: 10px;
  box-shadow: 0px 0px 0px 3000px rgba(52, 56, 60, 0.6);
}

.modal .modal-exit {
  position: absolute;
  right: 0;
  font-weight: bold;
  color: black;
}

.modal-message {
  margin: 5% auto 10%;
  width: 60%;
  color: whitesmoke;
}
.modal-message h2 {
  text-align: center;
  line-height: 3;
}
</style>

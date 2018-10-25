<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">Vuedio</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link to="/about" class="nav-link">
                Trending
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">
                Liked Videos <span class="badge badge-info">13</span>
              </router-link>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item" v-if="isLogin">
              <button class="btn btn-danger" @click='logout()'>Logout</button>
            </li>
            <li class="nav-item" v-else>
              <login-modal></login-modal>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import LoginModal from '@/components/LoginModal.vue'

export default {
  name: 'app',
  components: {
    LoginModal
  },
  data () {
    return {
      isLogin: false
    }
  },
  methods: {
    logout () {
      localStorage.clear()
      location.reload()
      this.$router.push('/')
    }
  },
  created () {
    let token = localStorage.getItem('token')
    if (token) {
      this.isLogin = true
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

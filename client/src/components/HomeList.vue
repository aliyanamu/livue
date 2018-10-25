<template>
  <div>
    <!-- Search Form -->
    <form>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Search videos across YouTube..."
          aria-label="Search videos across YouTube..."
          aria-describedby="go-button-addon"
          auto-complete="off"
          autofocus v-model="search">
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="go-button-addon" @click="getSearch()">
            Go!
          </button>
        </div>
      </div>
    </form>

    <!-- Video List -->
    <ul class="list-unstyled">
      <li class="media my-4 ui segment" style="width: 100%" v-for="(video, index) in videos" :key="index">
        <img style="float: left" class="mr-3" :src="video.snippet.thumbnails.default.url" alt="Thumbnail">
        <div class="media-body">
          <h5 class="mt-0 mb-1"> {{video.snippet.title}} </h5>
          {{video.snippet.description}}
          <br />
        </div>
        <!-- <router-link :to='{name:"details", params: {id: `${video.id.channelId}`}}>Details</router-link> -->
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'home-list',
  data () {
    return {
      search: ''
    }
  },
  methods: {
    ...mapActions([
      'getAllVid',
      'getVideoById'
    ]),
    getSearch () {
      this.getAllVid(this.search)
    }
  },
  computed: {
    ...mapState([
      'videos',
      'video',
      'like'
    ])
  },
  created() {
    this.getAllVid()
  },
  watch: {
    // getSearch () {
    //   this.getAllVid(this.search)
    // }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

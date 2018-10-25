<template>
  <div>
    <div class="mt-4">
      <div class="card mb-2" style="width: 100%;">
        <div class="card-body">
          <h5 class="card-title">YouTube Player goes here</h5>
          <img style="width: 80%" class="mr-3" :src="data.image" alt="Video">
        </div>
      </div>
      <strong>{{data.title}}</strong>&nbsp;
      <button class="btn btn-sm btn-primary" v-if="isLogin" @click="likeVid(data)">Like this Video!</button><br />
      <br />
      <pre class="card">{{data.desc}}</pre>
      <br />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'video-detail',
  props: ['isLogin'],
  data () {
    return {
      data: this.$router.history.current.query
    }
  },
  methods: {
    ...mapActions([
      'likeVid',
      'unlikeVid'
    ])
  },
  computed: {
    ...mapState([
      'likes',
      'like'
    ])
  },
  created () {
    console.log(this.$router.history.current.query)
  }
}
</script>

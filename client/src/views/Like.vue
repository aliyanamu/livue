<template>
  <div class="about">
    <ul class="list-unstyled">
      <li class="media my-4 ui segment" style="width: 100%" v-for="(video, index) in likes" :key="index">
        <img style="float: left" class="mr-3" :src="video.image" alt="Thumbnail">
        <div class="media-body">
          <h5 class="mt-0 mb-1"> {{video.title}} </h5>
          {{video.desc}}
          <br/>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'like',
  props: ['isLogin'],
  data () {
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
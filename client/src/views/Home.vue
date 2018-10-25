<template>
  <div class="home">
    <!-- Content -->
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-7">
          <div class="mt-4">
            <HomeList />
          </div>
        </div>
        <div class="col-xl-5">
          <!-- Player and Detail -->
          <video-detail></video-detail>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeList from '@/components/HomeList.vue'
import VideoDetail from '@/components/VideoDetail.vue'

export default {
  name: 'home',
  components: {
    HomeList,
    VideoDetail
  }
}
</script>

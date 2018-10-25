<template>
  <div class="home">
    <!-- Content -->
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-7">
          <div class="mt-4">
            <home-list></home-list>
          </div>
        </div>
        <div class="col-xl-5">
          <!-- Player and Detail -->
          <router-view :key="$route.fullPath" :isLogin="isLogin"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeList from '@/components/HomeList.vue'

export default {
  name: 'home',
  props: ['isLogin'],
  components: {
    HomeList
  }
}
</script>

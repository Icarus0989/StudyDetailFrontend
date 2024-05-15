<template>
  <div id="app">
    <StudyDetail studyId="1" />
  </div>
</template>

<script>
import StudyDetail from './components/StudyDetail.vue';

export default {
  name: 'App',
  components: {
    StudyDetail
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

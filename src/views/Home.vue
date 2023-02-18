<template>
  <div class="home">
    <TestView msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import TestView from "@/components/TestView.vue";

export default {
  name: "Home",
  components: {
    TestView,
  },
};
</script>

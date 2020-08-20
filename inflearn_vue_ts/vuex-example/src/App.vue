<template>
  <div id="app">
    <count></count>
    <button @click="increase">증가</button>
    <button @click="decrease">감소</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import count from '@/components/count.vue';
import { Action } from 'vuex-class';

@Component({
  components: {
    count,
  },
})

export default class App extends Vue {
  @Action readonly increase;
  
  @Action readonly decrease;

  // increase() {
  //   this.$store.dispatch('increase');
  // }

  // decrease() {
  //   this.$store.dispatch('decrease');
  // }
}
</script>
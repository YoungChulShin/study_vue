<template>
  <div id="app">
    <app-header/>
    <memo-app/>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader"; /* 다른 뷰를 불러온다*/
import MemoApp from "./components/MemoApp";

export default {
  name: "app",
  components: {
    AppHeader, /* 다른 뷰를 컴포넌트에 등록한다*/
    MemoApp
  }
};
</script>

<style>
@import "./styles/reset.css";

#app {
  /* .: 클래스, #: ID */
  width: 560px;
  margin: 0 auto; /* 위-아래, 왼쪽-오른족 */
}
</style>

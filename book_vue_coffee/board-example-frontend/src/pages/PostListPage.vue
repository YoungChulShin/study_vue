<template>
  <div class="post-list-page">
    <h1>포스트 게시글</h1>
    <post-list :posts="posts"/>
    <router-link :to="{ name: 'PostCreatePage' }">글쓰기</router-link>
  </div>
</template>

<script>
  import PostList from '@/components/PostList'
  import { mapActions, mapState } from 'vuex'

  export default {
    name: "PostListPage",
    components: {
      PostList
    },
    created() {
      this.fetchPostList()
    },
    methods: {
      ...mapActions(['fetchPostList'])
    },
    computed: {
      ...mapState(['posts'])
    }
  };
</script>

<style scopped>
  .post-list-page {
    width: 940px;
    margin: 60px auto 0;
    padding: 40px 30px 60px;
  }
  .post-list-page:after {
    content: "";
    display: block;
    clear: both;
  }
  .post-list-page h1 {
    margin-bottom: 20px;
    text-align: left;
    font-size: 24px;
  }
  .post-list-page > div {
   background-color: #fff;
  }
  .post-list-page > div table {
   width: 100%;
  }
  .post-list-page > div table thead {
    font-size: 14px;
    font-weight: normal;
    color: #fff;
    background-color: #888;
  }
  .post-list-page > div table thead th {
    position: relative;
    padding: 10px;
  }
  .post-list-page > div table thead th:after {
    content: '|';
    position: absolute;
    right: 0;
    color: #c3b9b9;
  }
  .post-list-page > div table thead th:last-child:after {
    content: '';
  }
  .post-list-page > div table tbody td {
    padding: 20px;
    font-weight: normal;
    border-bottom: 1px solid #ededed;
  }
  .post-list-page > div table tbody td:nth-child(2) {
    text-align: left;
  }
  .post-list-page > a {
    margin-top: 13px;
    float: right;
    padding: .5rem 1.75rem;
    background-color: #414141;
    border-radius: .25rem;
    color: #fff;
    text-decoration: none;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }
  .post-list-page > a:hover {
    background-color: #181818;
  }

</style>

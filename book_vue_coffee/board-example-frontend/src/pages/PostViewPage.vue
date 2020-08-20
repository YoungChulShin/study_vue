<template>
  <div class="post-view-page">
    <post-view v-if="post" :post="post"/>
    <p v-else>게시글 불러오는 중...</p>
    <router-link :to="{ name: 'PostEditPage', params: { postId }}">수정</router-link>
    <button @click="onDelete">삭제</button>
    <router-link :to="{ name: 'PostListPage' }">목록</router-link>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import PostView from '@/components/PostView'
  import api from '@/api'

  export default {
    name: 'PostViewPage',
    components: {
      PostView
    },
    props: {
      postId: {
        type: String,
        required: true
      }
    },
    methods: {
      onDelete() {
        const { id } = this.post;
        api.delete(`/posts/${id}`)
          .then(res => {
            alert('게시물이 성공적으로 삭제되었습니다');
            this.$router.push({ name: 'PostListPage' });
          })
          .catch(err => {
            if (err.reponse.status === 401) {
              alert('로그인이 필요합니다');
              this.$router.push({ name: 'Signin' });
            } else {
              alert(err.reponse.data.msg);
            }
          });
      }, 
      ...mapActions(['fetchPost'])
    },
    computed: {
      ...mapState(['post'])
    },
    created() {
      this.fetchPost(`/${this.postId}`)
        .catch(err => {
          alert(err.response.data.msg)
          this.$router.back()
        })
    }
  }
</script>

<style scopped>
  .post-view-page {
    width: 940px;
    margin: 60px auto 0;
    padding: 40px 30px 60px;
    background-color: #fff;
    box-shadow: 0 4px 10px -4px rgba(0, 0, 0, 0.2);
    text-align: right;
  }

  .post-view-page h1 {
    margin-bottom: 12px;
    text-align: left;
    font-size: 24px;
  }

  .post-view-page > p {
    text-align: center;
    margin: 1rem 0;
  }

  .post-view-page .post-view > div {
    padding: 20px;
    text-align: left;
    font-size: 14px;
    border-bottom: 2px solid #868e96;
  }

  .post-view-page .post-view > div > h1 {
    font-size: 24px;
  }

  .post-view-page .post-view > div > span {
    display: block;
    margin-bottom: 2px;
    color: #868e96;
  }

  .post-view-page .post-view > div > strong {
    font-weight: normal;
    color: #868e96;
  }

  .post-view-page .post-view > p {
    margin-bottom: 20px;
    padding: 20px;
    text-align: left;
  }

  .post-view-page a, .post-view-page button {
    display: inline-block;
    padding: .5rem 1.75rem;
    background-color: #414141;
    border-radius: .25rem;
    color: #fff;
    text-decoration: none;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }

  .post-view-page > a:hover, .post-view-page > button:hover {
    background-color: #181818;
  }

</style>

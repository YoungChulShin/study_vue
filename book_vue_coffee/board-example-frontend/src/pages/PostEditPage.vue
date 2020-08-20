<template>
  <div class="post-edit-page">
    <h3>게시글 수정</h3>
    <post-edit-form v-if="post" :post="post" @submit="onSubmit" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import PostEditForm from "@/components/PostEditForm";
import api from '@/api';

export default {
  name: "PostEditPage",
  props: {
    postId: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState(["post"])
  },
  components: {
    PostEditForm
  },
  methods: {
    onSubmit(payload) {
      const { title, contents } = payload;
      api.put(`/posts/${this.postId}`, { title, contents })
        .then(res => {
          alert("게시물이 성공적으로 수정되었습니다.");
          this.$router.push({
            name: "PostViewPage",
            params: { postId: res.data.id.toString() }
          });
        })
        .catch(err => {
            if (err.response.status === 401) {  // 허가되지 않음. 익명의 사용자
                alert('로그인이 필요합니다');
                this.$router.push( { name: 'Signin' });
            } else if (err.reponse.status === 403) {    // 권한없음. 
                alert(err.reponse.data.msg);
                this.$router.back();
            } else {
                alert(err.reponse.data.msg);
            }
        });
    }
  }
};
</script>
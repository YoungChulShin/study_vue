<template>
  <div class="sign-up-page">
    <h3>회원가입</h3>
    <signup-form @submit="onSubmit"/>
    <p>이미 가입하셨나요? <router-link :to="{ name : 'Signin' }">로그인하러 가기</router-link></p>
  </div>
</template>

<script>
  import SignupForm from '@/components/SignupForm';
  import api from '@/api';

  export default {
    name: 'Signup',
    components: {
      SignupForm
    },
    methods: {
      onSubmit (payload) {
        const { email, password, name } = payload;
        api.post('/auth/signup', { email, password, name })
          .then(res => {
            alert('회원 가입이 완료되었습니다');
            this.$router.push({ name: 'Signin'});
          })
          .catch(err => {
            alert(err.response.data.msg);
          });
      }
    }
  }
</script>

<style scoped>
 .sign-up-page {
   position: absolute;
   left: 50%;
   top: 50%;
   width: 456px;
   height: 396px;
   margin: -186px 0 0 -228px;
   padding: 45px 60px 60px;
   background-color: #fff;
   border: 1px solid #ededed;
 }

 .sign-up-page h3 {
   margin-bottom: 20px;
   text-align: left;
 }


.sign-up-page > p {
    font-size: 16px;
    text-align: left;
  }
</style>

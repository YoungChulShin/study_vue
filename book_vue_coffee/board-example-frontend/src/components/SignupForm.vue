<template>
  <form @submit.prevent="submit" novalidate>
    <fieldset>
      <input type="text" v-model="name" placeholder="이름을 입력해주세요" />
      <input type="email" v-model="email" placeholder="이메일을 입력해주세요" />
      <input type="password" v-model="password" placeholder="비밀번호를 입력해주세요" />
      <input type="password" v-model="passwordConfirm" placeholder="비밀번호를 다시한번 입력해주세요" />
      <button type="submit">회원가입</button>
    </fieldset>
  </form>
</template>

<script>
  export default {
    name: 'SignatureForm',
    data () {
      return {
        name: '',
        email: '',
        password: '',
        passwordConfirm: ''
      }
    },
    methods: {
      submit () {
        const { name, email, password, passwordConfirm } = this;
        if (!name || !email || !password || !passwordConfirm) {
          alert('모든 항목을 입력해주세요');
          return
        }
        if (password !== passwordConfirm) {
          alert('비밀번호가 일치하지 ㅇ낳습니다');
          return
        }

        this.$emit('submit', { name, email, password});
      }
    }
  }
</script>

<style scoped>
  form fieldset input {
    margin-bottom: 8px;
  }

  form fieldset input[type="text"], .sign-up-page form fieldset input[type="password"], .sign-up-page form fieldset input[type="email"] {
    width: 100%;
    height: calc(1.5em + .75rem + 2px);
    margin-bottom: 8px;
    padding: 5px 12px;
    color: #495057;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    font-size: 14px;
  }

  form fieldset button[type="submit"] {
    width: 100%;
    margin: 16px 0 8px;
    padding: .75rem;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    border-radius: .25rem;
    background-color: #414141;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }

  form fieldset button[type="submit"]:hover {
    background-color: #181818;
  }

</style>

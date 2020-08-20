<template>
    <form @submit.prevent="submit">
        <fieldset>
            <input type="text" v-model="email" placeholder="이메일을 입력해주세요" />
            <input type="password" v-model="password" placeholder="비밀번호를 입력해주세요" />
            <button type="submit">로그인</button>
        </fieldset>
    </form>
</template>
<script>
    export default {
        name: 'SigninForm',
        data () {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            submit () {
                const { email, password } = this;
                this.$emit('submit', { email, password });
            }
        }
    }
</script>

<style scoped>
    form fieldset input {
        margin-bottom: 20px;
    }

    form fieldset input[type="text"], form fieldset input[type="password"] {
        width: 100%;
        height: calc(1.5em + .75rem + 2px);
        margin-bottom: 8px;
        padding: 5px 12px;
        color: #495057;
        border: 1px solid #ced4da;
        border-radius: .25rem;
        font-size: 14px;
    }

    form fieldset input[type="password"] {
      margin-bottom: 16px;
    }

    form fieldset button[type="submit"] {
        width: 100%;
        margin-bottom: 8px;
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
<template>
    <div class="sign-in-page">
        <h3>로그인</h3>
        <signin-form @submit="onSubmit" />
        <p>회원이 아니신가요? <router-link :to="{ name: 'Signup' }">회원가입하러 가기</router-link></p>
    </div>

</template>

<script>
    import SigninForm from '@/components/SigninForm'
    import api from '@/api'
    import { mapActions} from 'vuex'

    export default {
        name: 'Signin',
        components: {
            SigninForm
        },
        methods: {
            onSubmit(payload) {
                const { email, password } = payload;
                this.signin(payload)
                    .then(res => {
                        alert('로그인이 완료되었습니다');
                        this.$router.push({name: 'PostListPage'});
                    })
                    .catch(err => {
                        alert(err.response.data.msg);
                    });
            },
            ...mapActions( ['signin'] )
        }
    };
</script>

<style scoped>
    .sign-in-page {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 456px;
        height: 330px;
        margin: -165px 0 0 -228px;
        padding: 45px 60px 60px;
        background-color: #fff;
        border: 1px solid #ededed;
    }

    .sign-in-page h3 {
        margin-bottom: 20px;
        text-align: left;
    }

    .sign-in-page > p {
        font-size: 16px;
        text-align: left;
    }
</style>
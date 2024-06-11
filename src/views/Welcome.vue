<template>
    <div class="welcome container">
        <!-- <p>Welcome</p> -->
        <div v-if="showLogin">
            <h2>Login</h2>
            <LoginForm  @login="enterChatroom"/>
            <p>No account yet? <span @click="showLogin = false">Signup</span> insted</p>
        </div>
        <div v-else>
            <h2>Sign up</h2>
            <SignupForm  @signup = "enterChatroom"/>
            <p>Already registered? <span @click="showLogin = true">Login</span> insted</p>

        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import LoginForm from '../components/LoginForm.vue'
import SignupForm from '../components/SignupForm.vue'
import {  useRouter } from 'vue-router'
export default {
    components:{ SignupForm, LoginForm },
    setup(){
        const showLogin = ref(true);
        const router = useRouter();

    const enterChatroom = () => {
        router.push({name: 'Chatroom'});
    }


        return { showLogin, enterChatroom};
    }
}
</script>

<style>
    .welcome {
        text-align: center;
        padding: 20px 0;
    }
    .welcome form {
       width: 300px;
       margin: 20px auto;
    }
    .welcome label {
        display: block;
        margin: 20px 0 10px;
    }
    .welcome input {
        width: 100%;
        margin: 5px auto;
        padding: 10px ;
        border: 1px solid #eee;
        border-radius: 20px;
        color: #999;
        outline: none;
    }
    .welcome span {
        text-decoration: underline;
        font-weight: bold;
        cursor: pointer;
    }
    .welcome button {
        margin: 15px auto;
    }


</style>
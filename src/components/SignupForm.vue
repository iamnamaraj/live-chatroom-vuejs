<template>
    <form @submit.prevent="handelSubmit">
        <input type="text" placeholder="user name" v-model="userName" required>
        <input type="email" placeholder="email" v-model="email" required>
        <input type="password" placeholder="password" v-model="password" required>
        <div v-if="error" class="error">{{ error }}</div>
        <button>Sign up</button>
    </form>
</template>

<script>
import { ref } from 'vue'
import  useSignup  from '../composables/useSignup'
export default {
    setup (props, context){
        const { error, signUp } = useSignup()

        const userName = ref('')
        const email = ref('')
        const password = ref('')


        const handelSubmit = async ()=>{
            await signUp(email.value, password.value, userName.value)
            if(!error.value){
                context.emit('signup')
            }
        }



        return { userName, email, password, handelSubmit, error }
    }

}
</script>

<style>

</style>
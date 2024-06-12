<template>
    <div class="container">
        <NavBar />
        <ChatsWindow />
        <ChatForm />
    </div>
</template>

<script>
import getUser from '../composables/getUser'
import NavBar from '../components/NavBar.vue'
import ChatForm from '../components/ChatForm.vue'
import ChatsWindow from '../components/ChatsWindow.vue'
import { watch } from 'vue';
import { useRouter } from 'vue-router';

export default {
    components: { ChatForm, NavBar, ChatsWindow },

    setup(){
        const {  user } = getUser();
        const router = useRouter();

         watch(user, () => {
            console.log('User state changed: ', user.value);
            if (!user.value) {
                router.push({ name: 'Welcome' });
            }
        });

        return { user };
    }
}
</script>

<style>

</style>
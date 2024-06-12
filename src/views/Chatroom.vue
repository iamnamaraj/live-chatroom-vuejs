<template>
    <div class="container">
        <NavBar />
    </div>
</template>

<script>
import getUser from '../composables/getUser'
import NavBar from '../components/NavBar.vue'
import { watch } from 'vue';
import { useRouter } from 'vue-router';

export default {
    components: {  NavBar },

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
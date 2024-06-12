<template>
    <nav v-if="user">
        <div>
            <p>Hey {{ user.displayName }} </p>
            <p class="email">{{ user.email }}</p>
        </div>
        <button @click="handelLogout">Log out</button>
    </nav>
</template>

<script>
import useLogout from '../composables/useLogout'
import getUser from '../composables/getUser'


export default {
    setup(){
        const { error, logout } = useLogout();
        const { user } = getUser();

        const handelLogout = async () =>{
            await logout()
            if(!error.value){
                console.log('User logged out');
            }
        }

        return { handelLogout, user }
    }

}
</script>

<style>
     nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        border-bottom: 1px solid #eee;
    }
    nav p {
        margin: 2px auto;
        font-size: 16px;
        color: #444;
    }
    nav p.email {
        font-size: 12px;
        color: #999;
    }
</style>
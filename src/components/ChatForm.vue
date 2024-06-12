<template>
    <form >
        <textarea
            placeholder="Type a message and hit enter.."
            v-model="message"
            @keypress.enter.prevent="handelSubmit"
        ></textarea>
    </form>

</template>

<script>
import { ref } from 'vue'
import getUser from '../composables/getUser'
import { timestamp } from '../firebase/config';
export default {
    setup(){
        const message = ref('');
        const { user } = getUser();

        const handelSubmit = async () => {
            const chat = {
                name:user.value.displayName,
                message:message.value,
                createdAt:timestamp
            }

            console.log(chat)
            message.value = ''
        }


        return {  message, handelSubmit}
    }
}
</script>

<style scoped>
    form{
        margin: 10px;
    }
    textarea {
        max-width: 100%;
        width: 100%;
        margin-bottom: 6px;
        padding: 10px;
        border: 0;
        border-radius: 20px;
        font-family: inherit;
        outline: none;
        box-sizing: border-box;

    }
</style>
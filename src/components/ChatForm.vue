<template>
    <form >
        <textarea
            placeholder="Type a message and hit enter.."
            v-model="message"
            @keypress.enter.prevent="handelSubmit"
        ></textarea>
        <div  v-if="error" class="error">{{ error }}</div>
    </form>

</template>

<script>
import { ref } from 'vue'
import getUser from '../composables/getUser'
import useCollection from '../composables/useCollection'
import { timestamp } from '../firebase/config';
export default {
    setup(){
        const message = ref('');
        const { user } = getUser();
        const { error, addDocument} = useCollection('messages');


        const handelSubmit = async () => {
            const chat = {
                name:user.value.displayName,
                message:message.value,
                createdAt:timestamp
            }

           await addDocument(chat)
           if(!error.value){
            message.value = ''
           }

        }


        return {  message, handelSubmit, error, addDocument}
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
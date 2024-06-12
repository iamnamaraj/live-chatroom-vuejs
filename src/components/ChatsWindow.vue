<template>
    <div class="chat-window">
        <div v-if="error" class="error">{{ error }}</div>
        <div v-if="documents" class="messages">
            <div v-for="doc in documents" :key="doc.id" class="single">
                <span class="created-at">{{ doc.createdAt.toDate() }}</span>
                <span class="name">{{ doc.name }}</span>
                <span class="message">{{ doc.message }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import getCollection from '../composables/getCollection'
export default {
    setup(){
        const { error, documents } = getCollection('messages')

        return { error, documents }
    }
}
</script>

<style>
    .chat-window{
        background: #fafafa;
        padding: 30px 20px;
    }
    .single{
        margin: 18px 0;
    }
    .created-at{
        display: block;
        margin-bottom: 4px;
        font-size: 12px;
        color: #999;
    }
    .name{
        margin-right: 10px;
        font-weight: bold;
    }
    .messages {
        max-height: 400px;
        overflow: auto;
    }
</style>
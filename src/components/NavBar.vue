<template>
    <nav>
        <div>
        <p>Hey there --- display name </p>
        <p class="email">Currently logged in as --- email</p>
    </div>
    <button>Log out</button>
    </nav>
</template>

<script>
export default {

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
        font-size: 14px;
        color: #999;
    }
</style>
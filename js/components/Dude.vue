<template>
    <li :title="title">
        <article>
            {{ name }}
            <span>{{ title }}</span>
        </article>
    </li>    
</template>

<script>
export default {
    props:[
        'title', 'name'
    ],
    data(){
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
    
</style>


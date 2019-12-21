<template>

    <aside>
        <form class="add-new" @submit.prevent="addNewDude">
            <input type="text" ref="input" v-model="newDude">
        </form>

        <p class="preview">
            {{ newDude }}
        </p>
    </aside>

</template>



<script>
    export default {
        data(){
            return {
                newDude: ''
            }
        },
        methods: {
            addNewDude() {
                this.$emit('add-dude', this.newDude)
                this.$refs.input.value=''
                this.$refs.input.focus()
                this.newDude = '' 
            }
        }
    }
</script>

<style lang="scss" scoped>
    .add-new {
        max-width: 320px;
        margin: 3em auto 3em;

        input {
            font-size: 14px;
            color: #fff;
            background: none;
            border: none;
            border-bottom: 2px solid rgba(255, 255, 255, .9);
            display: block;
            margin: 0 auto;
            text-align: center;
            margin-bottom: 0.5em;
        }

        input:focus {
            outline: none;
        }

        input:first-child {
            font-weight: bold;
        }

        input:last-child{
            font-size: 13px;
            width: 100%;
        }
    }

    .preview {
        font-size: 13px;
        opacity: .5;
    }
</style>
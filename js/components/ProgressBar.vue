<template>
    <div class="progress" @click="raiseBar">
        <div 
        class="progress-bar bg-success" 
        role="progressbar" 
        :style="{ width: value + '%'}" 
        aria-valuenow="value" 
        aria-valuemin="0" 
        aria-valuemax="100">{{ value}}% Complete</div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                value: 20
            }
        }, 
        methods: {
            raiseBar(){
                if(this.value < 100) {
                    this.value += 10
                }
                else {
                    this.value = 0
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .progress {
        margin: 0 auto;
        width: 17.75em;
        border-radius: 0.5em;
        .progress-bar{
            font-size: 0.5em;
            font-weight: bold;
            padding: 0 1em;
        }
    }
</style>
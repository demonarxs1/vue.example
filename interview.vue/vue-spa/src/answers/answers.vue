<template>
    <div class="interview-answers">
        <answer  v-for="qInterview in interview" :qInterview='qInterview'/>
    </div>
</template>

<script>
import Answer from './answer/answer.vue';
import Vue from 'vue'

export default {

    components: {
        'answer': Answer,
    },
    props: [ 'interview' ],
    
    
}
</script>


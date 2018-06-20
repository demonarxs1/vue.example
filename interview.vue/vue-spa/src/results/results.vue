<template>
    <div class="res js-more">
        <div class="interview-answers">
            <result v-for="qInterview in interview" :qInterview='qInterview'/>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import result from './result/result.vue';
export default {
   components: {
        'result': result,
    },
   props: [ 'interview' ]
}
</script>


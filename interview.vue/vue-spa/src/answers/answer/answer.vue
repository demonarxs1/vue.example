<template>
    <div class="interview__answers">                   
        <input v-bind:id="'answer-'+ qInterview.id" name="answer" v-bind:value="qInterview.id" type="radio">
        <label class="interview-answer" v-bind:for="'answer-'+ qInterview.id">
            <span>{{ qInterview.text }}</span>
        </label>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'interview-answer',
 props: [ 'qInterview' ],
  
}
</script>


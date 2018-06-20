<template>
    <div class="flex">
        <div class="interview-answer">
            <span>{{qInterview.text}}</span>
        </div>
        <div class="interview-stat">
            <div class="interview-stat_percent" v-bind:style="{ width: qInterview.percent+'%'}"></div>
            <div class="interview-stat_count">{{qInterview.count}}</div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'interview-result',
  props: [ 'qInterview' ],
  
}
</script>


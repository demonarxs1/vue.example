 
<div class="interview-answers" id="ki" > 
<div class="interview__answers" v-for="answer in answers" >                   
        <input v-bind:id="'answer-' + answer.id" name="answer" v-bind:value="answer.id" type="radio">
        <label class="interview-answer" v-bind:for="'answer-' + answer.id">
            <span>{{ answer.text }}</span>
        </label>
    </div>
  </div>
<script>
export default {
  name: 'interview-answer',
  data () {
    return {
        answers: [] 
    }
  }
}
</script>

let vm = new Vue({
    el: '#ki',
    data:{
      green: 'red',
      answers:[
        {
          id: 1,
          text: '123',
        },
        { 
          id: '1' ,
          text: '123' 
        },
        {
           id: '1' ,
           text: '123' 
        }
      ],

     },
});


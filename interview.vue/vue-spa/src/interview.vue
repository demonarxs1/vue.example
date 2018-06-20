<template>
    <form class="interview" v-on:submit.prevent="onSubmit">
            
        <h3>{{ interview.title }}</h3>
                <answers :interview='interview.answers' v-if="allowed"/>

                <button class="interview-send" type="submit" v-if="allowed">отправить</button>
                <hr v-if="allowed">
                <div v-if="!resultSeen && allowed"  v-on:click="showResult" class="interview__show" >
                    Показать результат
                </div>
                <results v-if="resultSeen || !allowed" :interview='interview.answers'/>
                
    </form>
</template>

<script>
import Vue from 'vue'
import results from './results/results.vue';
import Answers from './answers/answers.vue';
export default {
	name: 'interview',
	components: {
		'results': results,
		'answers': Answers
	},
	props: [ 'interview', 'allowed' ],
	data:  function() {
		return{
			resultSeen: false,
			}
	},
	methods: {
	
		showResult: function(){
				this.resultSeen = !this.resultSeen;
			},
		onSubmit: function(event){
			this.$emit('submit', event.target.elements.answer.value)
		}
	
	}
	
}
</script>
<style lang="scss">
.interview{
    
    display: flex;
    flex-direction: column;

    &-title{
        margin-bottom: 20px;
    }

    &-title, * {
        font-family: "Roboto";
        font-size: 14px;
        font-weight: 300;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.14;
        letter-spacing: normal;

    }
    
    input{
        display: none;
    }

    label{
        font-family: "Roboto";
        font-size: 14px;
        font-weight: 300;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.14;
        letter-spacing: normal;
        display: flex;
        align-items: flex-end;
        margin-bottom: 10px;
        cursor: pointer;

        width: -moz-max-content;    
        width: -webkit-max-content;
        &:before{
            content: "";
            width: 18px;
            height: 18px;
            border-radius: 50%;
            display: block;
            margin-right: 19px;
            border: solid 1px #009fe3;
            background-color: white;
        }
    }
    input:checked + label{

        &:before{
            background-repeat: no-repeat;
            background-position: center;
            background-image: radial-gradient(circle,#003d70 70%, white 70%);
            background-size: 13px 13px;
            
        }
    
    }

    hr{
        width: 100%;
        margin: 30px 0;
    }

    &__show{
        font-size: 24px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 0.67;
        letter-spacing: normal;
        text-align: left;
        color: #8bd3f9;
        cursor: pointer;
        width: max-content;
        margin-bottom: 50px;
    }
    
    .interview-stat{
        width: 70%;
        height: 28px;
        background-color: #ffffff;
        border: solid 1px #009fe3;
        position: relative;
        &_percent{
            position: absolute;
            height: 100%;
            left: 0;
            top: 0;
            background-color: #5eafd7;
        }
        &_count{
            display: flex;
            align-items: center;
            position: absolute;
            color: black;
            left: 20px;
            top: 0;
            bottom: 0;
            margin: auto;
        }
    }

    .flex{
		display: flex;
        align-items: center;
        margin-bottom: 10px;
        justify-content: space-between;
    }

    .res{
        margin-bottom: 20px;
        &.hasOpen{
            display: block;
        }
    }

    &__back{
        width: max-content;
        display: flex;
        align-items: center;

        div{margin-right: 10px;}
    }

}
</style>

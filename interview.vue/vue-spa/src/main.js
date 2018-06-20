import Vue from 'vue'
import Interview from './interview.vue'

var vm = new Vue({
	el: '#app',
	data:{
		answers:[],
		title: '',
		allowed: true,
		id: ''
	},   
	created: function(){
			this.getQuestion();
	},
	components: { 
		'Interview': Interview,
	},
	template: `<Interview :interview='answers' :title='title' v-on:submit="submitData" :allowed='allowed' />`,
	methods: {
	
		getQuestion: function(){
			let idAnswer = document.location.pathname.replace('/interviews/', '');	
			let question = {};
		
			//return fetch(`/interviews/api/v1/questions/${idAnswer}`)
			return fetch(`/interviews/api/v1/questions/${idAnswer}`, {cache: "no-store"})
            .then(res => {
                if (res.status != 200)
                    throw new Error('Ошибка! Опрос не получен.');
                return res.json();
            })
            .then(quest => {

                question = quest;

                let promises = quest.answers.map(
                    answer => fetch(answer.url).then( res => res.json() )
                );

                return Promise.all(promises);

            })
            .then(answers => { 

                let newAnswers = this.getPercentAnswer(answers);
                question.answers = newAnswers;
                return question;

            })
            .then(question => {
                this.answers = question;
                if (!question.available){
						this.allowed=false;
					}
				this.id = question.id;

            })
            .catch(err => { console.log(err); });
		},
		getPercentAnswer: function(answers){

        let counts = null;

        answers.forEach(answer => {
            counts += Number(answer.count);
        });

        answers.forEach(answer => {
            answer.percent = Math.round((answer.count / counts) * 100);
        });

        return answers;

    	},
    	submitData: function(id){
				if(id){
					this.allowed=false;
					let questionId = this.id;
					let options = {
						method: 'PUT',
					};
					fetch(`/interviews/api/v1/answers/${id}`, options)
					.then(res => {
						this.statusCode(questionId, res);
					})
					.catch(err => { console.log(err); });
				}
			},

    statusCode(questionId, res) {

        switch (res.status) {
            case 204:

                this.getQuestion(questionId)
                sf.alert('Ваш голос принят', 'ok')
                break;
            case 403:
                sf.alert('Вы уже голосовали', 'err')
                break;
            case 404:
                sf.alert('Вариант ответа не найден', 'err')
                break;
            case 500:
                sf.alert('Ошибка обновления счетчика', 'err')
                break;
            default:
                sf.alert('Ошибка отправки результата', 'err')
                console.log(res.status);
                break;
        }

    }

	}
})

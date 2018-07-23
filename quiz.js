const nextBtn = document.getElementById('next-btn');
const questionDisplay = document.getElementById('question-display');
const optionDisplay = document.getElementById('option-display');
const form = document.forms['quiz-form'];
const resultPanel = document.getElementById('result-panel');

const questions = [
	"Who is the president of America?",
	"Who discovered penicillin?",
	"What is collective noun for a group of fish?",
	"Which of these viruses is responsible for common cold?",
	"Where is brother jibola's house."
];

const options = [
	[
		"Donald Trump",
		"Banki Moon",
		"Shi Jing Pin",
		"Arda Turan"
	],
	[
		"Mary Hirsch",
		"Alexander Flemming",
		"Arnold Schwartz",
		"Indira Gandhi"
	],
	[
		"Tribe",
		"Colony",
		"School",
		"Gang"
	],
	[
		"Ebola Virus",
		"SARS Virus",
		"AIDS Virus",
		"Rhinovirus"
	],
	[
		"ikeja","agege","ipaja","Ile Iwe"
	]
];

const answers = [
	"Donald Trump",
	"Alexander Flemming",
	"School",
	"Rhinovirus","ile iwe"
];

const maxCount = questions.length;
var currentQuestion = -1;
var score = 0;

nextBtn.addEventListener('click', startQuiz, false);

function startQuiz(){

	if(currentQuestion >= 0){
		var selVal = form.question.value;
		if(!selVal)
			return;
		(selVal === answers[currentQuestion]) ? score++ : score = score;
	}

	currentQuestion++;

	(currentQuestion >= maxCount) ?
		(
			questionDisplay.style.display = 'none',
			optionDisplay.style.display = 'none',
			resultPanel.style.display = 'block',
			resultPanel.innerHTML = `${score > 4?'EXCELLENT!':(score > 3?'GOOD JOB!':(score > 2?'FAIR!':'POOR!'))}
			You earned ${score} point${score!==1?'s':''} in this session.`,
			score = 0,
			nextBtn.innerHTML = 'START NEW SESSION',
			currentQuestion = -1
		):
		(
			(currentQuestion == maxCount - 1) ?
				(
					nextBtn.innerHTML = 'SUBMIT',
					optionDisplay.innerHTML = "",
					setupQuestions()
				)
			:
				(
					optionDisplay.innerHTML = "",
					nextBtn.innerHTML = 'NEXT QUESTION',
					setupQuestions()
				)
		)
}
function setupQuestions(){
	questionDisplay.style.display = 'block';
	optionDisplay.style.display = 'block';
	resultPanel.style.display = 'none';
	questionDisplay.innerHTML = questions[currentQuestion];
	for(let i = 0; i < options[i].length; i++){
		var radioInput = document.createElement('input');
		radioInput.setAttribute('type', 'radio');
		radioInput.setAttribute('value', options[currentQuestion][i]);
		radioInput.setAttribute('name', 'question');
		var optionVal = document.createTextNode(options[currentQuestion][i]);
		var label = document.createElement('label');
		label.appendChild(radioInput);
		label.appendChild(optionVal);
		optionDisplay.appendChild(label);
	}
}
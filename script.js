const quiz = document.getElementById('quiz');
const results = document.getElementById('results');
const resultText = document.getElementById('result-text');
const submit = document.getElementById('submit');

const questions = [
    {
        question: 'What is your curl pattern?',
        answers: {
            wavy: 'Wavy',
            curly: 'Curly',
            coily: 'Coily',
        },
        userAnswer: '',
    },
    // Add more questions here
];

questions.forEach((question, index) => {
    const p = document.createElement('p');
    p.textContent = `Question ${index + 1} of 10`;
    quiz.appendChild(p);

    const label = document.createElement('label');
    label.textContent = question.question;
    quiz.appendChild(label);

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = `q${index}`;
    input.id = `q${index}-${Object.keys(question.answers)[0]}`;
    input.value = Object.keys(question.answers)[0];
    input.required = true;
    quiz.appendChild(input);

    const labelAnswer = document.createElement('label');
    labelAnswer.htmlFor = `q${index}-${Object.keys(question.answers)[0]}`;
    labelAnswer.textContent = question.answers[Object.keys(question.answers)[0]];
    quiz.appendChild(labelAnswer);

    // Add more options here

    if (index < questions.length - 1) {
        const br = document.createElement('br');
        quiz.appendChild(br);
    }
});

submit.addEventListener('click', () => {
    quiz.style.display = 'none';
    results.style.display = 'block';

    let score = 0;

    questions.forEach((question) => {
        if (question.userAnswer === '') {
            score = -1;
            return;
        }

        if (question.userAnswer === 'wavy') {
            score += 1;
        }

        // Add more conditions here
    });

    if (score === -1) {
        resultText.textContent = 'Please answer all questions.';
    } else {
        resultText.textContent = `Curl Pattern: Wavy
Curl Type: 2C
Porosity: low
Density: medium
Width: medium`;
    }
});
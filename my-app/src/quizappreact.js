import { useEffect, useState } from "react";
import './quizapp.css'
function QuizApp() {
  const [questions, setQuestions] = useState([]);
  let [anss,ansinc]=useState(0)



  const randomQuestions = [
    {
      question: 'What is the color of a lion?',
      answer: 'yellow',
      option1: 'yellow',
      option2: 'red',
      option3: 'orange',
      id: 1,
    },
    {
      question: 'What is the color of a bee?',
      answer: 'brown',
      option1: 'yellow',
      option2: 'brown',
      option3: 'orange',
      id: 2,
    },
    {
      question: 'What is the color of a sheep?',
      answer: 'white',
      option1: 'yellow',
      option2: 'red',
      option3: 'white',
      id: 3,
    },
  ];

    // Replace this with your logic to generate new random questions
    let randQuestion2=[{
      question: 'What is the capital of France?',
      answer: 'Paris',
      option1: 'London',
      option2: 'Paris',
      option3: 'Madrid',
      id: 1,
    },
    {
      question: 'Which planet is known as the Red Planet?',
      answer: 'Mars',
      option1: 'Venus',
      option2: 'Mars',
      option3: 'Saturn',
      id: 2,
    },
    {
      question: 'What is the largest mammal on Earth?',
      answer: 'Blue whale',
      option1: 'Blue Whale',
      option2: 'Giraffe',
      option3: 'Hippopotamus',
      id: 3,
    },
    ]
    let rand3=[
    {
      question: 'Which gas do plants absorb from the atmosphere?',
      answer: 'Carbon dioxide',
      option1: 'Oxygen',
      option2: 'Nitrogen',
      option3: 'Carbon dioxide',
      id: 4,
    },
    {
      question: 'Who wrote the play "Romeo and Juliet"?',
      answer: 'William Shakespeare',
      option1: 'Charles Dickens',
      option2: 'William Shakespeare',
      option3: 'Leo Tolstoy',
      id: 5,
    },
    {
      question: 'What is the chemical symbol for gold?',
      answer: 'Au',
      option1: 'Ag',
      option2: 'Fe',
      option3: 'Au',
      id: 6,
    }]
    let rand4=[
    {
      question: 'Which planet is known as the "Morning Star"?',
      answer: 'Venus',
      option1: 'Mars',
      option2: 'Venus',
      option3: 'Saturn',
      id: 7,
    },
    {
      question: 'What is the tallest mountain in the world?',
      answer: 'Mount Everest',
      option1: 'K2',
      option2: 'Mount Everest',
      option3: 'Makalu',
      id: 8,
    },
    {
      question: 'Which gas makes up the majority of Earth\'s atmosphere?',
      answer: 'Nitrogen',
      option1: 'Oxygen',
      option2: 'Carbon dioxide',
      option3: 'Nitrogen',
      id: 9,
    },]
    function generateRandomQuestions() {
      // Create an array containing the different sets of questions
      const questionSets = [randomQuestions, randQuestion2, rand3, rand4];
    
      // Randomly select a question set from the array
      const randomSetIndex = Math.floor(Math.random() * questionSets.length);
      const selectedQuestionSet = questionSets[randomSetIndex];
    
      // Set the questions state to the selected question set
      setQuestions(selectedQuestionSet);
    
      // Reset correct answer count
      ansinc(0);
    }
    



  useEffect(() => {
    setQuestions(randomQuestions);
  }, []);

  function handleAnswerClick(selectedOption, id) {
    const updatedQuestions = questions.map((question) => {
      if (question.id === id) {

        if(question.answer===selectedOption){
      
          ansinc(anss+1)
            
            }

        return {
          ...question,
          clickedOption: selectedOption,
        };
      }
     

      return question;
    });

    setQuestions(updatedQuestions);
  }

  return (
    <div>
      {questions.map((question, index) => 
      (

        <div key={index}>
          {question.clickedOption === question.answer ? (
            
            <p>Correct</p>
          ) : question.clickedOption ? (
            <>
              <p>Wrong</p>
              <p>Correct Answer: {question.answer}</p>
            </>
          ) : null}
          <p>{question.question}</p>
          <button
            onClick={() => handleAnswerClick(question.option1, question.id)}
            disabled={question.clickedOption}
            style={{
              background:
                question.clickedOption === question.option1
                  ? question.option1 === question.answer
                    ? 'green'
                    : 'red'
                  : '',
            }}
          >
            {question.option1}
          </button>
          <button
            onClick={() => handleAnswerClick(question.option2, question.id)}
            disabled={question.clickedOption}
            style={{
              background:
                question.clickedOption === question.option2
                  ? question.option2 === question.answer
                    ? 'green'
                    : 'red'
                  : '',
            }}
          >
            {question.option2}
          </button>
          <button
            onClick={() => handleAnswerClick(question.option3, question.id)}
            disabled={question.clickedOption}
            style={{
              background:
                question.clickedOption === question.option3
                  ? question.option3 === question.answer
                    ? 'green'
                    : 'red'
                  : '',
            }}
          >
            {question.option3}
          </button>
        </div>

      ))}
<p>correct answers {anss}/3</p>
{console.log(anss)}
{console.log(questions.length)}
<button onClick={generateRandomQuestions}>New Questions</button>
    </div>
  );
}

export default QuizApp;

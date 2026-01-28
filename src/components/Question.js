import Answer from './Answer'
import { useContext } from "react";
import { QuizContext } from "../contexts/quiz";

const Question = ({ questions }) => {
    const [quizState] = useContext(QuizContext);
    const q = quizState.questions[quizState.currentQuestionIndex];
    const answers = [q.correctAnswer, ...q.incorrectAnswers]
    const letters = ['A','B','C','D']
    console.log("Question.js:", quizState.selectedLetter, letters)
    return (
        <div>
            <div className='question'>{q.question}</div>
            <div className='answers'>
                {answers.map((a, i) => (
                    <Answer key={i} selected={quizState.selectedLetter === letters[i]} letter={letters[i]}>{a}</Answer>
                )
            )}
            </div>
        </div>
    );
}

export default Question;
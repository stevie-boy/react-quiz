import { useContext } from 'react';
import { QuizContext } from '../contexts/quiz';

const Answer = ({ children, letter, selected }) => {
    const [quizContext, dispatch] = useContext(QuizContext);

    return (
        <div className={`${selected ? "answer selected" : "answer"}`}
                    onClick={() => 
                            dispatch({
                                    type: 'SELECT_ANSWER'
                                    ,selectedLetter: `${letter}`
                                })}>
            <div className='answer-letter'>{letter}</div>
            <div className='answer-text'>{children}</div>
        </div>
    );
}

export default Answer;
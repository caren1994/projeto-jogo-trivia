import { IoTimeSharp } from 'react-icons/io5';
// import { AiFillCloseCircle, AiFillCheckCircle } from 'react-icons/ai';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import Button from '../Button';
import ButtonQuestion from './ButtonQuestion';
import shuffleArr from '../../utils/shuffle';

import Logo from '../../assets/logo trivia.svg';

function Question({ questions }) {
  const initialValue = 30;
  const [timer, setTimer] = useState(initialValue);
  const [isDisabled, setDisabled] = useState(false);

  useEffect(() => {
    let interval = null;
    const second = 1000;
    if (timer >  0 && !isDisabled) {
      interval = setInterval(() => {
        setTimer((time) => time - 1);
      }, second);
    } else  {
      setDisabled(true);
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  const handleClickAnswer = () =>setDisabled(true)

    

  const {
    incorrect_answers: incorrectAnswers,
    correct_answer: correactAnswer,
    category,
    question } = questions[0];

  const answers = incorrectAnswers.map((item, index) => ({ question: item, index }));
  answers.push({ question: correactAnswer, index: 3 });

  return (
    <>
      <div
        className="
            flex
            flex-col
            items-center
            ml-12
            lg:px-20
            lg:ml-0
          "
      >
        <img
          src={ Logo }
          alt="Logo"
          className="
              w-56
              relative
              -top-20
              lg:top-0
              lg:mb-8
            "
        />
        <main
          className="
              w-[480px]
              h-96
              bg-white
              rounded-xl
              shadow
              p-4
              text-center
              lg:w-full
            "
        >
          <div
            className="
                bg-yellow-500
                font-normal
                text-xl
                text-white
                text-center
                rounded-full
                p-4
                relative
                -top-10
                shadow-lg
              "

          >
            <h3 data-testid="question-category">{category}</h3>
          </div>
          <p
            className="
              mb-24
              mt-20
              text-xl
            "
            data-testid="question-text"
          >
            {question}
          </p>
          <span
            className="
                text-red-500
                font-bold
                text-xl
                flex
                items-center
                justify-center
              "
          >
            <IoTimeSharp className="mr-2" />
            Tempo:
            {' '}
            <strong>{timer}</strong>
          </span>
        </main>
      </div>
      <div
        className="
            flex
            flex-col
            justify-end
            px-20
          "
      >

        <main
          className="
              flex
              flex-col
              container

              gap-4
              lg:mb-8
            "
          data-testid="answer-options"
        >
          {shuffleArr(answers)
            .map(({ question: quest, index }) => {
              const incorrectId = `wrong-answer-${index}`;
              return (<ButtonQuestion
                key={ index }
                isDisabled={ isDisabled }
                onClick={handleClickAnswer }
                text={ quest }
                data_testid={ `${quest === correactAnswer
                  ? 'correct-answer'
                  : incorrectId}` }
              />);
            })}
        </main>

        <Button
          type="button"
          text="Próxima"
          style={ { marginTop: '1rem', borderRadius: '15px' } }
        />
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  questions: state.player.questions,
});

Question.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      correct_answer: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      question: PropTypes.string.isRequired,
      incorrect_answers: PropTypes.arrayOf(
        PropTypes.string.isRequired,
      ),
    }),
  ).isRequired,
};

export default connect(mapStateToProps)(Question);

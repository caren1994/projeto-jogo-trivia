import { IoTimeSharp } from 'react-icons/io5';
// import { AiFillCloseCircle, AiFillCheckCircle } from 'react-icons/ai';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { scorePlayer } from '../../redux/actions';

import Button from '../Button';
import ButtonQuestion from './ButtonQuestion';
import shuffleArr from '../../utils/shuffle';

import Logo from '../../assets/logo trivia.svg';

function Question({ questions, score, submitForm }) {
  const {
    incorrect_answers: incorrectAnswers,
    correct_answer: correactAnswer,
    category,
    question,
    difficulty,
  } = questions[0];

  const answers = incorrectAnswers.map((item, index) => ({ question: item, index }));
  answers.push({ question: correactAnswer, index: 3 });

  const handleClick = (e) => {
    const { target } = e;
    e.preventDefault();

    const timer = 19;
    const sum = score;
    let points = 0;

    const dificuldade = { hard: 3, medium: 2, easy: 1 };
    const dez = 10;

    console.log('targetId', target.id);
    if (target.id === '3') {
      const dif = dificuldade[difficulty];
      points = (sum + (dez + (timer * dif)));
      submitForm(points);
    }

    submitForm(sum);
  };

  /*   const handleClickCalculate = (e) => {
    e.preventDefault();
    const { submitForm } = props;

    submitForm(score);
  }; */

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
            <strong>19s</strong>
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
                id={ index }
                key={ index }
                text={ quest }
                onClick={ handleClick }
                data_testid={ `${quest === correactAnswer
                  ? 'correct-answer'
                  : incorrectId}` }
              />);
            })}
        </main>

        <Button
          type="button"
          text="Próxima"
          /* onClick={ handleClickCalculate } */
          style={ { marginTop: '1rem', borderRadius: '15px' } }
        />
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  questions: state.player.questions,
  score: state.player.score,
});

const mapDispatchToProps = (dispatch) => ({
  submitForm: (e) => dispatch(scorePlayer(e)),
});

Question.propTypes = {
  submitForm: PropTypes.func.isRequired,
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
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Question);

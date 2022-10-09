import { IoTimeSharp } from 'react-icons/io5';
import { AiFillCloseCircle, AiFillCheckCircle } from 'react-icons/ai';
import Button from '../Button';
import Logo from '../../assets/logo trivia.svg';
import { connect } from 'react-redux';
import ButtonQuestion from './ButtonQuestion';

function Question({ questions }) {

  const question = questions[0]
  const answers = [
    ...question.incorrect_answers,
    question.correct_answer
  ];
  console.log(question)
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
          src={Logo}
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
            <h3 data-testid="question-category">{question.category}</h3>
          </div>
          <p
            className="
              mb-24
              mt-20
              text-xl
            "
            data-testid="question-text"
          >
            {question.question}
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
        >
          {answers.map(item => (
            <>
              <ButtonQuestion key={item} text={item} />
            </>
          ))}
          <Button
            type="button"
            className="
                bg-[#2fc18c]
                py-3
                px-4
                text-white
                font-bold
                text-xl
                cursor-pointer
                disabled:bg-[#186b4d]
                hover:bg-[#186b4d]
                rounded-lg
              "
            text="Próxima"
          />
        </main>

      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  questions: state.player.questions
})

export default connect(mapStateToProps)(Question);

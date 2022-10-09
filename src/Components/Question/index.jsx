import { IoTimeSharp } from 'react-icons/io5';
import { AiFillCloseCircle, AiFillCheckCircle } from 'react-icons/ai';
import Button from '../Button';
import Logo from '../../assets/logo trivia.svg';
import { connect } from 'react-redux';

function Question({ questions }) {

  const firstQuestion = questions[0]
  console.log(firstQuestion)
  return (
    <>
      <div
        className="
            flex
            flex-col
            items-center
          "
      >
        <img
          src={Logo}
          alt="Logo"
          className="
              w-56
              relative
              -top-20
            "
        />
        <main
          className="
              w-[480px]
              h-80
              bg-white
              rounded-xl
              shadow
              p-4
              text-center
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
            <h3 data-testid="question-category">{firstQuestion.category}</h3>
          </div>
          <p
            className="mb-24"
            data-testid="question-text"
          >
            {firstQuestion.question}
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
              gap-8
            "
        >

          <button
            type="button"
            className="
              bg-white
              shadow-lg
              shadow-red-500
              rounded-full
              py-4
              pl-4
              flex
              items-center
              gap-8
              text-2xl
              hover:-translate-y-2
              transition-all
            "
          >
            <AiFillCloseCircle className="text-red-500 text-5xl" />
            False
          </button>
          <button
            type="button"
            className="
              bg-white
              shadow-lg
              shadow-green-500
              rounded-full
              py-4
              pl-4
              flex
              items-center
              gap-8
              text-2xl
              hover:-translate-y-2
              transition-all
            "
          >
            <AiFillCheckCircle className="text-green-500 text-5xl" />
            True
          </button>
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

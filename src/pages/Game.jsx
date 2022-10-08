import React from 'react';
import { IoTimeSharp } from 'react-icons/io5'
import { AiFillCloseCircle, AiFillCheckCircle } from 'react-icons/ai'
import Header from '../Components/Header';
import Button from '../Components/Button'
import Logo from '../assets/logo trivia.svg';

const fakeQuestions = [
  {
    type: "multiple",
    difficulty: "easy",
    question: "What is the first weapon you acquire in Half-Life?",
    correct_answer: "A crowbar",
    incorrect_answers: [
      "A pistol",
      "The H.E.V suit",
      "Your fists"
    ]
  },
  {
    category: "Entertainment: Video Games",
    type: "boolean",
    difficulty: "hard",
    question: "TF2: Sentry rocket damage falloff is calculated based on the distance between the sentry and the enemy, not the engineer and the enemy",
    correct_answer: "False",
    incorrect_answers: [
      "True"
    ]
  }
]

function Game() {
  const token = localStorage.getItem('token');

  console.log(token)
  return (
    <div className='h-full w-full'>
      <Header />
      <section
        className="
          w-[100%]
          grid
          grid-cols-2
        "
      >
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
              <h3>Politica</h3>
            </div>
            <p
              className="mb-24"
            >Jed Bush was elected as Governor od Florida in 2002, startin his political career.</p>
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
              Tempo: <strong>19s</strong></span>
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
      </section>
    </div>
  );
}


export default Game;

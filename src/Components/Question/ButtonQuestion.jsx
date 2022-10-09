const ButtonQuestion = ({ text }) => {
  return (
    <button
      className="
        bg-white
        shadow-lg
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
      type="button"
    >
      {text}
    </button>
  )
}

export default ButtonQuestion

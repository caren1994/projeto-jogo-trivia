import PropTypes from 'prop-types';

function ButtonQuestion({ text, data_testid: dataId }) {
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
      data-testid={ dataId }
    >
      {text}
    </button>
  );
}

ButtonQuestion.propTypes = {
  text: PropTypes.string.isRequired,
  data_testid: PropTypes.string.isRequired,
};

export default ButtonQuestion;

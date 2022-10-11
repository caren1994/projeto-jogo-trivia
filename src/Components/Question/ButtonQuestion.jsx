import PropTypes from 'prop-types';

function ButtonQuestion({ text, onClick, isDisabled, data_testid: dataId }) {
  return (
    <button
      onClick={ onClick }
      disabled={ isDisabled }
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
  onClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

export default ButtonQuestion;

import PropTypes from 'prop-types';

function ButtonQuestion({ text, onClick, data_testid: dataId, ...rest }) {
  return (
    <button
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
      onClick={ onClick }
      type="button"
      data-testid={ dataId }
      { ...rest }
    >
      {text}
    </button>
  );
}

ButtonQuestion.propTypes = {
  text: PropTypes.string.isRequired,
  data_testid: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ButtonQuestion;

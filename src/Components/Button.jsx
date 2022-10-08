import React from 'react';
import Proptypes from 'prop-types';

function Button({ text, onClick, ...rest }) {
  return (
    <button
      onClick={ onClick }
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
        "
      { ...rest }
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: Proptypes.string.isRequired,
  onClick: Proptypes.func.isRequired,
};

export default Button;

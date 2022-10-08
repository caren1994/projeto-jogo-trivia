import React from 'react';
import Proptypes from 'prop-types';


const Button = ({ text, onClick, type, ...rest }) => {
  return (
    <button
      type={type}
      onClick={onClick}
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
      {...rest}
    >
      {text}
    </button>
  )
}

Button.propTypes = {
  text: Proptypes.string.isRequired,
  onclick: Proptypes.func.isRequired,
  type: Proptypes.string.isRequired,
}

export default Button

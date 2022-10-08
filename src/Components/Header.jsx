import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { FcDataConfiguration } from 'react-icons/fc';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';

function Header({ userEmail, name, score }) {
  const hash = md5(userEmail).toString();
  const url = `https://www.gravatar.com/avatar/${hash}`;

  return (
    <header
      className="
        w-full
        h-28
        flex
        justify-end
        items-center
        px-20
        shadow
        bg-white
      "
    >
      <div
        className="
          flex
          gap-10
          flex-wrap
        "
      >
        <div
          className="
            flex
            items-center
            gap-4
          "
        >
          <img
            data-testid="header-profile-picture"
            alt="Perfil Usuário"
            src={ url }
            className="
              rounded-full
              w-16
            "
          />
          <span data-testid="header-player-name">{name}</span>
        </div>
        <div
          className="
          flex
          items-center
          gap-2
          "
        >
          <AiFillStar className="text-2xl text-yellow-400" />
          <span
            className="
              flex
              gap-2
            "
          >
            Pontos:
            <strong
              data-testid="header-score"
            >
              {score}
            </strong>
          </span>
        </div>

        <div
          className="
            text-center
            cursor-pointer
            flex
            items-center
            justify-center
          "
        >
          <FcDataConfiguration className="text-2xl" />
        </div>

      </div>

    </header>
  );
}

const mapStateToProps = (state) => ({
  userEmail: state.player.gravatarEmail,
  name: state.player.name,
  score: state.player.score,
});

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header);

import { AiFillStar } from 'react-icons/ai';
import { FcDataConfiguration } from 'react-icons/fc';
import User from '../assets/Captura de Tela 2022-07-14 às 13.49 1.png';

function Header() {
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
            src={ User }
          />
          <span data-testid="header-player-name">Eduardo</span>
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
              0
            </strong>
          </span>
        </div>

        <div
          className="
            text-center
          "
        >
          <FcDataConfiguration className="text-2xl mt-1" />
        </div>

      </div>

    </header>
  );
}

export default Header;

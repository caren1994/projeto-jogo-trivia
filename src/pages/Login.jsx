import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRequest, user } from '../redux/actions';
import Logo from '../assets/logo trivia.svg';

class Login extends Component {
  state = {
    disabled: true,
    name: '',
    email: '',
  };

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({
      [target.name]: value,
    }, () => {
      const { email, name } = this.state;
      if (email && name) {
        this.setState({ disabled: false });
      } else {
        this.setState({ disabled: true });
      }
    });
  };

  handleClick = async (e) => {
    e.preventDefault();
    const { submitForm, history, request } = this.props;
    await request();
    submitForm({ ...this.state });
    history.push('/game');
  };

  handleConfiguration = () => {
    const { history } = this.props;
    history.push('/configuration');
  };

  render() {
    const { disabled, email, name } = this.state;
    return (
      <div
        className="
          w-full
          h-[100vh]
          flex
          flex-col
          items-center
          pt-32
          gap-6
        "
      >
        <img
          src={ Logo }
          alt="Logo"
          className="
            sm:w-32
          "
        />
        <form
          className="
            sm:w-96
            w-[614px]
            h-auto
            rounded-xl
            bg-white
            overflow-hidden
            px-12
            py-10
            "
        >
          <div
            className="
              container
              flex
              flex-col
              gap-5
            "
          >
            <input
              className="
                border
                border-solid
                border-gray-300
                py-3
                px-4
              "
              data-testid="input-player-name"
              type="text"
              value={ name }
              placeholder="Name"
              name="name"
              onChange={ this.handleChange }
            />

            <input
              className="
                border
                border-solid
                border-gray-300
                py-3
                px-4
              "
              data-testid="input-gravatar-email"
              type="email"
              value={ email }
              name="email"
              placeholder="Email"
              onChange={ this.handleChange }
            />
            <button
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
              disabled={ disabled }
              type="button"
              data-testid="btn-play"
              onClick={ this.handleClick }
            >
              Play
            </button>
            <button
              className="
                bg-gray-400
                py-3
                px-4
                text-white
                font-bold
                text-xl
                cursor-pointer
                hover:bg-gray-800
              "
              type="button"
              data-testid="btn-settings"
              onClick={ this.handleConfiguration }
            >
              Configurações
            </button>
          </div>
        </form>
      </div>
    );
  }
}
Login.propTypes = {

  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

Login.propTypes = {
  submitForm: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  request: () => dispatch(getRequest()),
  submitForm: (e) => dispatch(user(e)),
});

export default connect(null, mapDispatchToProps)(Login);

import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRequest, user } from '../redux/actions';


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

  render() {
    const { disabled, email, name } = this.state;
    return (
      <div>
        <form
          className="
            bg-blue-700
            flex
            items-center
            justify-center
            mx-auto
            flex-col
            h-80"
        >
          <div>
            <input
              data-testid="input-player-name"
              type="text"
              value={ name }
              placeholder="Name"
              name="name"
              onChange={ this.handleChange }
            />
          </div>

          <div>
            <input
              data-testid="input-gravatar-email"
              type="email"
              value={ email }
              name="email"
              placeholder="Email"
              onChange={ this.handleChange }
            />
          </div>
          <button
            className="bg-green-500 mt-10 pt-4 px-10 disabled:bg-cyan-200 rounded"
            disabled={ disabled }
            type="button"
            data-testid="btn-play"
            onClick={ this.handleClick }
          >
            Play
          </button>
          <button
            type="button"
            data-testid="btn-settings"
            onClick={ this.handleConfiguration }
          >
            Configurações
          </button>
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

import Login from '../containers/Authentication/LoginForm';
import initialize from '../utils/initialize';
function LoginForm() {
  return <Login />;
}
LoginForm.getInitialProps = async (ctx) => {
  initialize(ctx);
  return {};
};
export default LoginForm;

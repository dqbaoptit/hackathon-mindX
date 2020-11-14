import Login from '../containers/Authentication/LoginForm';
import initialize from '../utils/initialize';
function LoginForm() {
  return (
    <div className="background">
      <Login />
    </div>
  );
}
LoginForm.getInitialProps = async (ctx) => {
  initialize(ctx);
  return {};
};
export default LoginForm;

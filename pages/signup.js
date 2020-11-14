import { Signup } from '../containers';
import initialize from '../utils/initialize';

function SignForm() {
  return <Signup />;
}
SignForm.getInitialProps = async (ctx) => {
  initialize(ctx);
  return {};
};
export default SignForm;

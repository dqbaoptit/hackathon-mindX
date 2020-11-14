import { Signup } from '../containers';
import initialize from '../utils/initialize';

function SignForm() {
  return (
    <div className="background">
      <Signup />
    </div>
  );
}
SignForm.getInitialProps = async (ctx) => {
  return {};
};
export default SignForm;

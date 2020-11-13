import './index.scss';
const Button = ({ text, onClick }) => {
  return (
    <div className="btn" onClick={onClick}>
      {text}
    </div>
  );
};
export default Button;

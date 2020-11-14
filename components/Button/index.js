import styles from './styles';

const Button = ({ text, type, onClick }) => {
  return (
    <>
      <div className={`button ${type}`} onClick={onClick}>
        <span className="button__text"> {text} </span>
      </div>
      <style jsx global>
        {styles}
      </style>
    </>
  );
};
export default Button;

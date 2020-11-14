import css from 'styled-jsx/css';

export default css.global`
   {
    .button {
      background: #338eef;
      border-radius: 2.5rem;
      border: 1px solid #338eef;
      padding: 6% 10%;
      color: #ffffff;
      transition: 0.3s all ease-in-out;
      cursor: pointer;
    }
    .button__text {
      font-style: normal;
      font-weight: 500;
      font-size: 120%;
      line-height: 1rem;
      text-align: center;
    }
    .button:hover {
      box-shadow: 0px 4px 20px rgba(90, 163, 241, 0.2);
      background: #fff;
      border: 1px solid #338eef;
      color: #338eef;
      transition: 0.3s all ease-in-out;
    }
    .active {
      background: #338eef;
    }
    .inactive {
      border: 1px solid #dee2e6;
      background: #dee2e6;
    }
    .inactive :hover {
      box-shadow: none;
    }
  }
`;

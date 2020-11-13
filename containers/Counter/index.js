import { Button } from '../../components/index';
import { Increment, Deincrement } from '../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import './index.scss';

const Counter = () => {
  const dispatch = useDispatch();
  const cnt = useSelector((state) => state.counter.value);
  return (
    <div className="ctn">
      <div>
        <div className="ctn__header">
          <h4 className="ctn__header__title">Counter</h4>
          <h5 className="ctn__header__counter">{cnt}</h5>
        </div>
        <div className="ctn__items">
          <Button text="-" onClick={() => dispatch(Deincrement())} />

          <Button text="+" onClick={() => dispatch(Increment())} />
        </div>
      </div>
    </div>
  );
};
export default Counter;

import React from 'react';
import PropTypes from 'prop-types';
import ComputerIcon from '@material-ui/icons/Computer';
import { useRouter } from 'next/router';
import './index.scss';

FieldCard.propTypes = {};

function FieldCard() {
  const router = useRouter();
  return (
    <div className="ctn">
      <div className="ctn__content">
        
        <div className="ctn__content__intro">
          <p>
            Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>

        </div>
      </div>
      <div
        style={{
          margin: '1rem',
          textAlign: 'right',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div className='title'>
          <h3>Title</h3>
        </div>
        
        <button className="btn-primary" onClick={() => router.push('/field')}>
          Bắt đầu tìm hiểu
        </button>
      </div>
      <div className="ctn__info">
        <div className="ctn__info__class">
          <span>Join</span>
          <p>1000+</p>
        </div>
        <div className="ctn__info__class">
          <span>Join</span>
          <p>1000+</p>
        </div>
      </div>
    </div>
  );
}

export default FieldCard;

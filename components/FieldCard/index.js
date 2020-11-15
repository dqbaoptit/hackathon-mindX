import React from 'react';
import { useRouter } from 'next/router';
import './index.scss';

function FieldCard({ title, desc, img, slug }) {
  const router = useRouter();
  return (
    <div className="ctn">
      <div className="ctn__content" style={{ background: `url('${img}')` }}>
        <div className="ctn__content__intro">
          <p>{desc}</p>
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
        <div className="title">
          <h3>{title}</h3>
        </div>
        {slug && (
          <button
            className="btn-primary"
            onClick={() => router.push(`/field?slug=${slug}`)}
          >
            Roadmap
          </button>
        )}
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

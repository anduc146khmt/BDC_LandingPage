import React from 'react';
const Card = (props) => {
  const { image, title, content } = props;
  return (
    <div
      className="card"
      style={{
        width: '20rem',
        padding: '20px',
        textAlign: 'center',
        borderRadius: '15px',
      }}>
      <img
        style={{
          width: '100px',
          height: '100px',
          alignContent: 'center',
          margin: 'auto',
          display: 'flex',
          justifyContent: 'center',
        }}
        classname="card-img-top"
        src={image}
        alt="Cardimagecap"
      />
      <div classname="card-body">
        <h4
          classname="card-title"
          style={{ padding: '10px 0', fontWeight: 'bold' }}>
          {title}
        </h4>
        <p classname="card-text" style={{ padding: '15px', fontSize: '16px' }}>
          {content}
        </p>
        <a
          href="javascript"
          classname="btn btn-primary"
          style={{ marginBottom: '10px' }}>
          Read more...
        </a>
      </div>
    </div>
  );
};

export default Card;

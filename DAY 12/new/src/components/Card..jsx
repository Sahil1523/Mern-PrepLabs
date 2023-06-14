import React from 'react';
import { useMemo } from 'react';

export const MemoCard = React.memo(({image,title,desc}) => {
  return (
    <div>
        <img src={image} alt="err" />
        <h1>{title}</h3>
        <h2>{desc}</h2>
    </div>
  );
});

const Card = ({userid,title,body}) => {
  const myComponent = useMemo(() =>{
    return (
      <div>
          <h1>{userid}</h1>
  
          <h3>{title}</h3>
  
          <p>{body}</p>
      </div>
    );
  }, [userid, body, title]);
  return <div>{myComponent}</div>;
};                                                               

export default Card;
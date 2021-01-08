import React from 'react';
import { Figure } from 'react-bootstrap';
function Prof(props) {
  return (
    <div className='prof'>
      <Figure>
        <Figure.Image alt='171x180' src={props.prof.img} />
        <Figure.Caption>{props.prof.caption}</Figure.Caption>
      </Figure>
    </div>
  );
}
export default Prof;
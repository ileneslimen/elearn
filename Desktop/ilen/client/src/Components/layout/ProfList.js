import React from 'react';
import ProfessorCard from './ProfessorCard';

const ProfList = props => {
  return (
    <div className='second'>
      <h2>Professors</h2>
      <div class='Prof-Container'>
        {props.Proflist.map((el, i) => (
          <ProfessorCard key={i} prof={el} />
        ))}
      </div>
    </div>
  );
};

export default ProfList;
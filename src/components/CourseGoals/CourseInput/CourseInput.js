import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import './CourseInput.module.css';
import styles from './CourseInput.module.css';

// cria o componente CouseInput
const CourseInput = props => {
  
  // cria o array para useSate
  const [enteredValue, setEnteredValue] = useState('');

  // cria o array para useState
  const [isValid, setIsValid] =  useState(true);

  // função que usa o setEnteredValue 
  const goalInputChangeHandler = event => {

    if (event.target.value.trim().length > 0) {

      setIsValid(true);

    }
    
    setEnteredValue(event.target.value);

  };

  // função que usa o setIsvalid
  const formSubmitHandler = event => {
    
    event.preventDefault();
    
    if (enteredValue.trim().length === 0) {

      setIsValid(false);

      return;

    }

    props.onAddGoal(enteredValue);
  };

  // retorna o HTML/JSX
  return (
    
    <form onSubmit={formSubmitHandler}>
      
      <div 
      className={`${styles.['form-control']} ${!isValid && styles.invalid}`}>
        
        <label >Course Goal</label>
        
        <input type="text" onChange={goalInputChangeHandler} />
      
        </div>

      <Button type="submit">Add Goal</Button>
    
    </form>
  );
};

export default CourseInput;

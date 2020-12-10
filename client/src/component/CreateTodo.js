import React, { useState, useContext } from 'react';
import { InputGroup, Icon } from "rsuite";

// import { baseUrl } from "../utils";
import { GlobalContext } from '../Context/GlobalState';

const CreateTodo = () => {
  const [text, setText] = useState("");

  const { addTodo } = useContext(GlobalContext);

  const onSubmit = () => {
    addTodo(text);
  }

  return (
    <div>
      <InputGroup>
        <input
          style={{ width: 300 }}
          placeholder="Enter Todo... "
          value={text} 
          onChange={(e) => {setText(e.target.value)}}
        />
        <InputGroup.Button>
          <Icon icon="check-square-o" onClick={onSubmit} />
        </InputGroup.Button>
      </InputGroup>
    </div>
  );
};

export default CreateTodo;
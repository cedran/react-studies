import React from "react";
import Button from "../Button";
import exp from "node:constants";

class Form extends React.Component {
  render() {
    return (
      <form>
        <div>
          <label htmlFor="tarefa">Adicione um novo estudo</label>
          <input type="text" name="tarefa" id="tarefa" placeholder="O que você quer estudar" required/>
        </div>
        <div>
          <label htmlFor="">Tempo</label>
          <input type="time" step="1" name="tempo" id="tempo" min="00:00:00" max="01:30:00" required />
          <Button/>
        </div>
      </form>
    );
  }
}

export default Form;
import { useState } from 'react'
import Modal from "./components/Modal";
import Backdrop from "./components/Backdrop";
function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false); 
  function deleteHandler() {
    setModalIsOpen(true);
  }
  return (
    <div>
      <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
          <button className="btn" onClick={deleteHandler}>
            Delete
          </button>
        </div>
        { modalIsOpen ? <Modal/> : null}
        <Backdrop/>
      </div>
    </div>
  );
}
export default Todo;

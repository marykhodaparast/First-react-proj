function Modal() {
  return (
    <div className="modal">
      <div className="inner">
        <p>Are you sure?</p>
        <div>
          <button className="btn">Confirm</button>
          <button className="btn btn--alt">Cancel</button>
        </div>
      </div>
    </div>
  );
}
export default Modal;

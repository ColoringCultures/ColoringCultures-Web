import './Modal.scss';

const Modal = ({ setOpenModal }: any) => {
  return (
    <div className="modal-root">
      <div className="square-root">
        <div className="cancel-button">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="modal-content">
          <div className="modal-header">
            <h1>Are you sure you want to delete this subcription?</h1>
          </div>
          <div className="modal-buttons">
            <button className="Yes-button">Yes</button>
            <button
              className="No-button"
              onClick={() => {
                setOpenModal(false);
              }}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
    // document.getElementById('portal') as HTMLElement
  );
};

export default Modal;

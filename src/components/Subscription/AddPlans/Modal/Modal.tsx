import './Modal.scss';

const Modal = ({ setOpenModal, subName }: any) => {
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
        <div className="modal-content-ads">
          <div className="modal-header">
            <h1>{subName} has been added</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

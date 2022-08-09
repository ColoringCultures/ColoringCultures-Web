import './Modal.scss';

const ConfirmModal = () => {
  return (
    <div className="modal-root">
      <div className="square-root-confirm">
        <div className="cancel-button">
          <button>X</button>
        </div>
        <div className="modal-content-ads">
          <div className="modal-header-confirm">
            <h1>Image has been deleted</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;

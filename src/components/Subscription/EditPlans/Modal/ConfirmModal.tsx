import './Modal.scss';

const ConfirmModal = ({ name }: any) => {
  return (
    <div className="modal-root">
      <div className="square-root">
        <div className="cancel-button">
          <button>X</button>
        </div>
        <div className="modal-content-ads">
          <div className="modal-header">
            <h1>{name} has been deleted</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;

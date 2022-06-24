import './Modal.scss';

const ConfirmModal = ({ name }: any) => {
  return (
    <div className="modal-root">
      <div className="square-root-confirm">
        <div className="cancel-button">
          <button>X</button>
        </div>
        <div className="modal-content-ads">
          <div className="modal-header-confirm">
            <h1>{name} has been deleted</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;

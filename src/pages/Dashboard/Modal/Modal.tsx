import './Modal.scss';
import { UserContext } from '../../../UserContext';
import { useContext } from 'react';
//
const Modal = ({ setOpenModal }: any) => {
  const { setToken, setUser } = useContext(UserContext);
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
            <h1>Are you sure you want to logout? </h1>
          </div>
          <div className="modal-buttons">
            <button
              className="Yes-button"
              onClick={() => {
                setToken('');
                setUser('false');
                setOpenModal(false);
              }}
            >
              Yes
            </button>
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
  );
};

export default Modal;

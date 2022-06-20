import './Modal.scss';
import { UserContext } from '../../../UserContext';
import { useContext } from 'react';
import axios from 'axios';

const Modal = ({ setOpenModal, id, setDeleted }: any) => {
  const { token } = useContext(UserContext);

  const deleteAds = async () => {
    await axios.delete(
      `https://colorculture.herokuapp.com/subscriptions/${id}`,
      {
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    );
    setDeleted(true);
    setOpenModal(false);
  };

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
            <h1>Are you sure you want to delete this Ad?</h1>
          </div>
          <div className="modal-buttons">
            <button className="Yes-button" onClick={deleteAds}>
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

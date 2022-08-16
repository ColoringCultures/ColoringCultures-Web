import './Modal.scss';
import { UserContext } from '../../../../UserContext';
import { useContext } from 'react';
import axios from 'axios';
import { url } from '../../../../api';

const Modal = ({ setOpenModal, id, setDeleted }: any) => {
  const { token } = useContext(UserContext);

  const deleteImage = async () => {
    await axios.delete(`${url}/colorapp/imagevector/${id}/`, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });

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
            <h1>Are you sure you want to delete this Image?</h1>
          </div>
          <div className="modal-buttons">
            <button className="Yes-button" onClick={deleteImage}>
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

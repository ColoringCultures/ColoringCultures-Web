import React, { useState } from 'react';
import './EditAchievement.scss';
import Modal from '../Modal/Modal';

const EditAchievement = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="root-create">
      <div>
        <p>What Criteria do you want to use?</p>
        <form>
          <div className="radio-button">
            <label htmlFor="color">
              <input type="radio" value="color" name="criteria" />
              Color{' '}
            </label>
            <label htmlFor="sharing">
              <input type="radio" value="Sharing" name="criteria" />
              Sharing
            </label>{' '}
            <label htmlFor="pictures">
              <input type="radio" value="Pictures" name="criteria" />
              Pictures
            </label>{' '}
            <label htmlFor="color$sharing">
              <input type="radio" value="Color$Sharing" name="criteria" />
              Color $ Sharing
            </label>{' '}
            <label htmlFor="color$sharing">
              <input type="radio" value="Color$Sharing" name="criteria" />
              Color $ Sharing
            </label>{' '}
            <label htmlFor="color%pictures">
              <input type="radio" value="Color$Pictures" name="criteria" />
              Color $ Pictures
            </label>{' '}
          </div>
          <div className="achievement-name">
            <label> Achievement Name</label>
            <input type={'text'} placeholder="Enter a name here" />
          </div>
          <div className="what-to">
            <label>What to do:</label>
            <div className="what-to-sub">
              Color:
              <input type={'text'} placeholder="Enter a number" />
            </div>
          </div>
        </form>
        <button className="create-button">Save Changes</button>
        <button
          className="delete-button"
          onClick={() => {
            setModalOpen(true);
          }}
        >
          Delete achievement
        </button>
        {modalOpen && <Modal setOpenModal={setModalOpen} Modal={modalOpen} />}
      </div>
    </div>
  );
};

export default EditAchievement;

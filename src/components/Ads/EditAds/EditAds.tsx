import React, { useState } from 'react';
import './EditAds.scss';
import Modal from '../Modal/Modal';

const EditAds = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <div className="root-edit">
        <div>
          <div>
            <label>Ad title</label>
            <input type="text" placeholder="Enter a title for the ad" />
          </div>
          <div>
            <label>Link to be redirected to</label>
            <input type="text" placeholder="Enter a link or URL" />
          </div>
          <div>
            <label>Watch time</label>
            <input
              type="text"
              placeholder="Enter the amount of watching minutes"
            />
          </div>
        </div>
        <div>
          <div>
            <label>People to be reached</label>
            <input type="text" placeholder="Enter a number" />
          </div>
          <div className="file-edit">
            <label>
              Choose the Ad file
              <label className="file-label-2">
                Choose a file
                <input type={'file'} placeholder="Choose a file" />
              </label>
            </label>
          </div>
        </div>
      </div>
      <div className="button-root">
        <button className="save-button">Save Changes</button>
        <button
          className="delete-ad"
          onClick={() => {
            setModalOpen(true);
          }}
        >
          Delete Ad
        </button>
      </div>
      {modalOpen && <Modal setOpenModal={setModalOpen} Modal={modalOpen} />}
    </div>
  );
};

export default EditAds;

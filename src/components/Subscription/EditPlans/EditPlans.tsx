import React, { useState } from 'react';
import './EditPlans.scss';
import Modal from '../Modal/Modal';

const EditPlans = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <div className="editplan-root">
        <div className="edit-div1">
          <div>
            <label>Plan Name</label>
            <input type="text" placeholder="Eg. basic" />
          </div>
          <div className="radio-plan">
            <div className="label">
              <label>Art to be coloured</label>
              <div className="radio-radio">
                <input
                  type="checkbox"
                  value="color"
                  name="art"
                  className="checkbox"
                />{' '}
                Unlimited
              </div>
            </div>
            <input type="text" placeholder="200" />
          </div>
          <div className="radio-plan">
            <div className="label">
              <label>Number of Arts</label>
              <div className="radio-radio">
                <input
                  type="checkbox"
                  value="color"
                  name="art"
                  className="checkbox"
                />{' '}
                Unlimited
              </div>
            </div>
            <input type="text" placeholder="Enter number" />
          </div>
          <div className="radio-plan">
            <label>Amount</label>
            <input type="text" placeholder="Enter number" />
          </div>
        </div>
        <div className="left-div-plan">
          <div className="radio-plan-edit">
            <div className="label">
              <label>Amount of hint</label>
              <div className="radio-radio">
                <input
                  type="checkbox"
                  value="color"
                  name="art"
                  className="checkbox"
                />{' '}
                Unlimited
              </div>
            </div>
            <input type="text" placeholder="Amount of hints" />
          </div>
          <div className="upload-plans">
            <label>
              Choose the plan avatar
              <label className="plan-label">
                Choose a files
                <input type={'file'} placeholder="Choose a file" />
              </label>
            </label>
          </div>
        </div>
      </div>
      <div className="ad-buttons">
        <button className="create-ad-button">Create Ad</button>
        <button
          className="delete-ad-button"
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

export default EditPlans;

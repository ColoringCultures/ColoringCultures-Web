import React from 'react';
import './AddPlans.scss';

const AddPlans = () => {
  return (
    <div>
      <div className="addplan-root">
        <div>
          <div>
            <label>Plan Name</label>
            <input type="text" placeholder="Eg. basic" />
          </div>
          <div className="radio-plan">
            <label>
              Art to be coloured
              <div className="radio-radio">
                <input
                  type="checkbox"
                  value="color"
                  name="art"
                  className="checkbox"
                />{' '}
                Unlimited
              </div>
            </label>
            <input type="text" placeholder="200" />
          </div>
          <div className="radio-plan">
            <label>
              Number of Arts
              <div className="radio-radio">
                <input
                  type="checkbox"
                  value="color"
                  name="art"
                  className="checkbox"
                />{' '}
                Unlimited
              </div>
            </label>
            <input type="text" placeholder="Enter number" />
          </div>
          <div className="radio-plan">
            <label>Amount</label>
            <input type="text" placeholder="Enter number" />
          </div>
        </div>
        <div className='left-div-plan'>
          <div className="radio-plan">
            <label>
              Amount of hint
              <div className="radio-radio">
                <input
                  type="checkbox"
                  value="color"
                  name="art"
                  className="checkbox"
                />{' '}
                Unlimited
              </div>
            </label>
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
      <button className="plan-button">Create Ad</button>
    </div>
  );
};

export default AddPlans;

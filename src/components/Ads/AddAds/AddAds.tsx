import React from 'react';
import './AddAds.scss';

const AddAds = () => {
  return (
    <div>
      <div className="root-ad">
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
          <div className="file-upload">
            <label>
              Choose the Ad file
              <label className="file-label">
                <span>Choose a file</span>
                <input type={'file'} placeholder="Choose a file" />
              </label>
            </label>
          </div>
        </div>
      </div>
      <button className="ad-button">Create Ad</button>
    </div>
  );
};

export default AddAds;

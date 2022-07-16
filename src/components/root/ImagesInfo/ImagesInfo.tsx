import React from 'react';
import './ImagesInfo.scss';

const ImagesInfo = () => {
  return (
    <div className="images-info-root">
      <div className="images-info-root__content">
        <h1>Images Info</h1>
        <div className="images-content__number">
          <p className="content-number__1">Images</p>
          <p className="content-number__2">453</p>
        </div>
        <div className="images-info-AI">Add Images</div>
        <div className="images-info-UI">Update Images</div>
        <div className="images-info-DI">Delete Images</div>
        <div className="Images_view">
          <p>Images</p>
          <img src={require('../../../assets/Rectangle 38.png')} alt="Images" />
        </div>
        <div className="Images_view">
          <p>View all</p>
          <img
            src={require('../../../assets/Rectangle 39.png')}
            alt="View All"
          />
        </div>
      </div>
    </div>
  );
};

export default ImagesInfo;

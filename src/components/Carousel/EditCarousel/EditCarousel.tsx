import React from 'react';
import '../AddCarousel/AddCarousel.scss';

const EditCarousel = () => {
  return (
    <div className="slideshow__root">
      <form>
        <div className="form-rr">
          <div className="form-rr__one">
            <div className="ss__label">
              <label>Image Description</label>
              <textarea placeholder="Enter the image description here" />
            </div>
            <div className="ss__label">
              <label>Link</label>
              <input type="text" placeholder="Enter a link or URL" />
            </div>
          </div>
          <div className="form-rr__two">
            <div>
              <label>
                Upload Image
                <label className="slideshow__upload">
                  <span>Choose a file</span>
                  <input
                    type={'file'}
                    placeholder="Choose a file"
                    accept=".svg, .png, .jpg, .jpeg"
                  />
                </label>
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditCarousel;
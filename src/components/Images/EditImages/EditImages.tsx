import { useState, useEffect, useRef } from 'react';
import '../AddImages/AddImages.scss';

const EditImages = () => {
  const [openDD, setOpenDD] = useState(false);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (container.current && !container.current.contains(e.target as Node)) {
        setOpenDD(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return (
    <div className="root_addIEdites">
      <form>
        <div className="form">
          <section className="section-1">
            <div className="section__details">
              <label>Products Name</label>
              <input type="text" placeholder="Enter a name here" />
            </div>
            <div className="description__details">
              <label>Products Description</label>
              <textarea placeholder="Enter the product description here"></textarea>
            </div>
            <div className="dd-root">
              <label>Category</label>
              <div className="dd-container" ref={container}>
                <div className="dd-container__button">
                  <button
                    onClick={() => {
                      setOpenDD(!openDD);
                    }}
                    type="button"
                  >
                    Select a category
                  </button>
                  <p>Add new category</p>
                </div>
                {openDD && (
                  <div className="dd-container__dropdown">
                    <ul>
                      <li>History</li>
                      <li>HBCU</li>
                      <li>Location</li>
                      <li>People</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className="section__details">
              <label>Link</label>
              <input type="text" placeholder="Enter a link or URL" />
            </div>
          </section>
          <section className="section-2">
            <label>Upload initial and final images. (SVG)</label>
            <div className="section-2__root">
              <div className="upload__images">
                <label>
                  Initial
                  <label className="file__upload-images">
                    <span>Choose a file</span>
                    <input
                      type={'file'}
                      placeholder="Choose a file"
                      accept=".svg"
                    />
                  </label>
                </label>
              </div>
              <div className="upload__images">
                <label>
                  Final
                  <label className="file__upload-images">
                    <span>Choose a file</span>
                    <input
                      type={'file'}
                      placeholder="Choose a file"
                      accept=".svg"
                    />
                  </label>
                </label>
              </div>
            </div>
          </section>
        </div>
        <button className="add-image__button">Add Image</button>
      </form>
    </div>
  );
};

export default EditImages;

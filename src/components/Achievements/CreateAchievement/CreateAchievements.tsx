import { useState } from 'react';
import './CreateAchievement.scss';

const CreateAchievement = () => {
  const [dMode, setdMode] = useState('');
  const [lMode, setlMode] = useState('');
  const [colored, setColored] = useState('');

  const displaydMode = (e: any) => {
    const image = URL.createObjectURL(e.target.files[0]);
    setdMode(image);
  };

  const displaylMode = (e: any) => {
    const image = URL.createObjectURL(e.target.files[0]);
    setlMode(image);
  };

  const displayColored = (e: any) => {
    const image = URL.createObjectURL(e.target.files[0]);
    setColored(image);
  };

  return (
    <div className="root-create">
      <form>
        <div className="create-root">
          <div className="create-root-div1">
            <div className="create-input-text">
              <label htmlFor="Achievement Name">Achievement Name</label>
              <input type="text" placeholder="Enter a number here" />
            </div>
            <div className="create-input-text">
              <label htmlFor="Description">Description</label>
              <input type="text" placeholder="Enter text" />
            </div>
            <div className="create-input-text-criteria">
              <label htmlFor="Criteria">Criteria</label>
              <input type="text" placeholder="Enter a number" />
            </div>
          </div>
          <div className="create-root-div2">
            <div className="file-root">
              <label htmlFor=""> Upload initial and final images. (SVG)</label>
              <div className="major-files">
                <div className="shade-mode">
                  <label>
                    Dark-mode
                    <label className="file-label-create">
                      <span>Choose a file</span>
                      <input
                        type={'file'}
                        placeholder="Choose a file"
                        accept=".svg"
                        onInput={displaydMode}
                      />
                    </label>
                  </label>
                  {dMode && (
                    <img
                      style={{ width: '150px', height: ' 168px' }}
                      src={dMode}
                      alt=""
                    />
                  )}
                </div>
                <div className="shade-mode">
                  <label>
                    Light-mode
                    <label className="file-label-create">
                      <span>Choose a file</span>
                      <input
                        type={'file'}
                        placeholder="Choose a file"
                        accept=".svg"
                        onInput={displaylMode}
                      />
                    </label>
                  </label>
                  {lMode && (
                    <img
                      style={{ width: '150px', height: ' 168px' }}
                      src={lMode}
                      alt=""
                    />
                  )}
                </div>
                <div className="shade-mode">
                  <label>
                    Colored
                    <label className="file-label-create">
                      <span>Choose a file</span>
                      <input
                        type={'file'}
                        placeholder="Choose a file"
                        accept=".svg"
                        onInput={displayColored}
                      />
                    </label>
                  </label>
                  {colored && (
                    <img
                      style={{ width: '150px', height: '168px' }}
                      src={colored}
                      alt=""
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateAchievement;

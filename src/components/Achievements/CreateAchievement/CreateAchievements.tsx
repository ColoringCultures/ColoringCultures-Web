import './CreateAchievement.scss';

const CreateAchievement = () => {
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
            <div className='file-root'>
              <label htmlFor=""> Upload initial and final images. (SVG)</label>
              <div>
                <div>
                  <label>Dark-mode</label>
                  <input type="file" />
                </div>
                <div>
                  <label>Light-mode</label>
                  <input type="file" />
                </div>
                <div>
                  <label>Colored</label>
                  <input type="file" />
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

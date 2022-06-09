import React, { useState } from 'react';
import './AddPlans.scss';

const AddPlans = () => {
  function imageUpload(event: any) {
    const image = event.target.files[0];
    setPlanAvatar(image);
  }

  const createSubscription = () => {
    console.log(
      planName,
      numOfArts,
      artToBeColored,
      planAvatar,
      numOfHint,
      amount
    );
  };

  const [planName, setPlanName] = useState('');
  const [artToBeColored, setArtToBeColored] = useState('');
  const [numOfArts, setNumOfArts] = useState('');
  const [numOfHint, setNumOfHint] = useState('');
  const [amount, setAmount] = useState('');
  const [planAvatar, setPlanAvatar] = useState();
  const [unlimtedColors, setUnlimtedColors] = useState(false);
  const [unlimtedArts, setUnlimtedArts] = useState(false);
  const [unlimtedHints, setUnlimtedHints] = useState(false);

  return (
    <div>
      <div className="addplan-root">
        <div className="right-ads-div">
          <div>
            <label>Plan Name</label>
            <input
              type="text"
              placeholder="Eg. basic"
              onChange={(e) => {
                setPlanName(e.target.value);
              }}
            />
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
                  onClick={() => {
                    setUnlimtedColors(!unlimtedColors);
                  }}
                />{' '}
                Unlimited
              </div>
            </label>

            <input
              type="text"
              placeholder={unlimtedColors ? 'Unlimited' : 'Eg. 200'}
              value={unlimtedColors ? 'Unlimited' : artToBeColored}
              onChange={(e) => {
                unlimtedColors
                  ? setArtToBeColored('Unlimited')
                  : setArtToBeColored(e.target.value);
              }}
            />
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
                  onClick={() => {
                    setUnlimtedArts(!unlimtedArts);
                  }}
                />{' '}
                Unlimited
              </div>
            </label>

            <input
              type="text"
              placeholder={unlimtedArts ? 'Unlimited' : 'Eg. 200'}
              value={unlimtedArts ? 'Unlimited' : numOfArts}
              onChange={(e) => {
                unlimtedArts
                  ? setNumOfArts('Unlimited')
                  : setNumOfArts(e.target.value);
              }}
            />
          </div>

          <div className="radio-plan">
            <label>Amount</label>
            <input
              type="text"
              placeholder="Enter number"
              onChange={(e) => {
                setAmount(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="left-div-plan">
          <div className="radio-plan">
            <label>
              Amount of hint
              <div className="radio-radio">
                <input
                  type="checkbox"
                  value="color"
                  name="art"
                  className="checkbox"
                  onClick={() => {
                    setUnlimtedHints(!unlimtedHints);
                  }}
                />{' '}
                Unlimited
              </div>
            </label>

            <input
              type="text"
              placeholder={unlimtedHints ? 'Unlimited' : 'Eg. 400'}
              value={unlimtedHints ? 'Unlimited' : numOfHint}
              onChange={(e) => {
                unlimtedHints
                  ? setNumOfHint('Unlimited')
                  : setNumOfHint(e.target.value);
              }}
            />
          </div>

          <div className="upload-plans">
            <label>
              Choose the plan avatar
              <label className="plan-label">
                Choose a files
                <input
                  type={'file'}
                  placeholder="Choose a file"
                  onChange={imageUpload}
                />
              </label>
            </label>
          </div>
        </div>
      </div>
      <button className="plan-button" onClick={createSubscription}>
        Create Ad
      </button>
    </div>
  );
};

export default AddPlans;

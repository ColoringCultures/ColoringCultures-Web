import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import './AddPlans.scss';
import { UserContext } from '../../../UserContext';
import Loader from '../../../Loader/Loader';
import Modal from './Modal/Modal';
import { useNavigate } from 'react-router-dom';

const AddPlans = () => {
  const navigate = useNavigate();
  const { token } = useContext(UserContext);
  const formData = new FormData();

  const [isLoading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // const [errMsg, setErrMsg] = useState('');

  function imageUpload(event: any) {
    formData.append('plan_avatar', event.target.files[0]);
  }

  const createSubscription = async () => {
    setLoading(true);
    formData.append('plan_name', planName);
    formData.append('art_to_be_colored', artToBeColored);
    formData.append('number_of_arts', numOfArts);
    formData.append('amount', amount);
    formData.append('amount_of_hint', numOfHint);

    const response = await axios.post(
      'https://colorculture.herokuapp.com/subscriptions/',
      formData,
      {
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    );
    setLoading(false);
    if (response.data.message === 'OK') {
      setModalOpen(true);
    }
    console.log(response);
  };

  const displayImage = (e: any) => {
    const image = URL.createObjectURL(e.target.files[0]);
    setImage(image);
  };

  const [planName, setPlanName] = useState('');
  const [artToBeColored, setArtToBeColored] = useState('');
  const [numOfArts, setNumOfArts] = useState('');
  const [numOfHint, setNumOfHint] = useState('');
  const [amount, setAmount] = useState('');
  const [unlimtedColors, setUnlimtedColors] = useState(false);
  const [unlimtedArts, setUnlimtedArts] = useState(false);
  const [unlimtedHints, setUnlimtedHints] = useState(false);
  const [image, setImage] = useState('');

  useEffect(() => {
    if (modalOpen) {
      setTimeout(() => {
        setModalOpen(false);
        navigate('/Dashboard/Subscripton');
      }, 2000);
    }
  });

  useEffect(() => {
    if (unlimtedHints) {
      setNumOfHint('Unlimited');
    }
  }, [unlimtedHints]);

  useEffect(() => {
    if (unlimtedColors) {
      setArtToBeColored('Unlimited');
    }
  }, [unlimtedColors]);

  useEffect(() => {
    if (unlimtedArts) {
      setNumOfArts('Unlimited');
    }
  }, [unlimtedArts]);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <form>
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
                  required
                />
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
                      onClick={() => {
                        setUnlimtedColors(!unlimtedColors);
                      }}
                    />{' '}
                    Unlimited
                  </div>
                </div>
                <input
                  type="text"
                  placeholder={unlimtedColors ? 'Unlimited' : 'Eg. 200'}
                  onChange={(e) => {
                    setArtToBeColored(e.target.value);
                  }}
                  disabled={unlimtedColors}
                  required
                />
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
                      onClick={() => {
                        setUnlimtedArts(!unlimtedArts);
                      }}
                    />{' '}
                    Unlimited
                  </div>
                </div>
                <input
                  type="text"
                  placeholder={unlimtedArts ? 'Unlimited' : 'Eg. 200'}
                  onChange={(e) => {
                    setNumOfArts(e.target.value);
                  }}
                  disabled={unlimtedArts}
                  required
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
                <div className="label">
                  <label>Amount of hint</label>
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
                </div>
                <input
                  type="text"
                  placeholder={unlimtedHints ? 'Unlimited' : 'Eg. 400'}
                  onChange={(e) => {
                    setNumOfHint(e.target.value);
                  }}
                  disabled={unlimtedHints}
                  required
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
                      accept=".svg"
                      onInput={displayImage}
                      onChange={imageUpload}
                    />
                  </label>
                </label>
                {image && (
                  <img
                    style={{ width: '241px', height: ' 270px' }}
                    src={image}
                    alt=""
                  />
                )}
              </div>
            </div>
          </div>
          <button className="plan-button" onClick={createSubscription}>
            Create Ad
          </button>
        </form>
      )}
      {modalOpen && (
        <Modal
          setOpenModal={setModalOpen}
          Modal={modalOpen}
          subName={planName}
        />
      )}
    </div>
  );
};

export default AddPlans;

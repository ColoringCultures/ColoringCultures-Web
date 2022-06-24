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
  const [errMessage, setErrMessage] = useState('');

  const [validateErr, setValidateErr] = useState({
    planName: '',
    artToBeColored: '',
    numOfArts: '',
    amount: '',
    numOfHint: '',
    testImage: '',
  });


  function imageUpload(event: any) {
    setTestImage(event.target.files[0]);
  }

  const createSubscription = async () => {
    setLoading(true);
    formData.append('plan_name', planName);
    formData.append('art_to_be_colored', artToBeColored);
    formData.append('number_of_arts', numOfArts);
    formData.append('amount', amount);
    formData.append('amount_of_hint', numOfHint);
    formData.append('plan_avatar', testImage);

    await axios
      .post('https://colorculture.herokuapp.com/subscriptions/', formData, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((response) => {
        setLoading(false);
        console.log(response);
        if (response.data.message === 'OK') {
          setModalOpen(true);
        }
      })
      .catch((error) => {
        setLoading(false);
        setErrMessage(error.message);
      });
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
  const [testImage, setTestImage] = useState('');


  const Validate = () => {
    if (planName === '') {
      setValidateErr((validateErr) => ({
        ...validateErr,
        planName: 'Plan Name is required',
      }));
    }

    if (artToBeColored === '') {
      setValidateErr((validateErr) => ({
        ...validateErr,
        artToBeColored: 'Art to be colored is required',
      }));
    }
    if (numOfArts === '') {
      setValidateErr((validateErr) => ({
        ...validateErr,
        numOfArts: 'Number of arts is required',
      }));
    }
    if (amount === '') {
      setValidateErr((validateErr) => ({
        ...validateErr,
        amount: 'Amount is required',
      }));
    }
    if (numOfHint === '') {
      setValidateErr((validateErr) => ({
        ...validateErr,
        numOfHint: 'Amount of hints is required',
      }));
    }
    if (testImage === '') {
      setValidateErr((validateErr) => ({
        ...validateErr,
        testImage: 'Plan avatar is required',
      }));
    }
    if (
      validateErr.amount === '' ||
      validateErr.artToBeColored === '' ||
      validateErr.numOfArts === '' ||
      validateErr.numOfHint === '' ||
      validateErr.planName === '' ||
      validateErr.testImage === ''
    ) {
      return false;
    }
    return true;
  };

  const SubmitForm = () => {
    if (Validate()) {
      createSubscription();
    }
  };


  useEffect(() => {
    if (modalOpen) {
      setTimeout(() => {
        setModalOpen(false);
        navigate('/Dashboard/Subscription');
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
        <div>
          <div className="addplan-root">
            <div className="right-ads-div">
              <div className="radio-plan">
                <label>Plan Name</label>
                <input
                  type="text"
                  placeholder="Eg. basic"
                  onChange={(e) => {
                    setPlanName(e.target.value);
                  }}
                />
                {validateErr.planName && (
                  <p className="err-plans-add">{validateErr.planName}</p>
                )}
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
                {validateErr.artToBeColored && (
                  <p className="err-plans-add">{validateErr.artToBeColored}</p>
                )}
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
                {validateErr.numOfArts && (
                  <p className="err-plans-add">{validateErr.numOfArts}</p>
                )}
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
                {validateErr.amount && (
                  <p className="err-plans-add">{validateErr.amount}</p>
                )}
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
                {validateErr.numOfHint && (
                  <p className="err-plans-add">{validateErr.numOfHint}</p>
                )}
              </div>
              <div className="upload-plans">
                <label>
                  Choose the Plan avatar
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
                {validateErr.testImage && (
                  <p className="err-plans-add">{validateErr.testImage}</p>
                )}
              </div>
            </div>
          </div>
          {errMessage && <p className="err-message-plan">{errMessage}</p>}
          <button className="plan-button" onClick={SubmitForm}>

            Create Ad
          </button>
        </div>
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

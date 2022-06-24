import React, { useContext, useEffect, useState } from 'react';
import '../AddPlans/AddPlans.scss';
import Modal from '../Modal/Modal';
import axios from 'axios';
import { UserContext } from '../../../UserContext';
import Loader from '../../../Loader/Loader';
import { useNavigate, useParams } from 'react-router-dom';
import ConfirmModal from './Modal/ConfirmModal';

const EditPlans = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const { token } = useContext(UserContext);
  const formData = new FormData();
  const [isLoading, setLoading] = useState(false);
  const [isDeleted, setDeleted] = useState(false);
  const [errMessage, setErrMessage] = useState('');
  const { id } = useParams();

  function imageUpload(event: any) {
    // setPlanAvatar(event.target.files[0]);
    const [file] = event.target.files;
    setPlanAvatar((planAvatar) => [...planAvatar, file]);
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await axios
        .get(`https://colorculture.herokuapp.com​/subscriptions/fetch/${id}`, {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
        .then((response) => {
          setPlanName(response.data.data.plan_name);
          setArtToBeColored(response.data.data.art_to_be_colored);
          setNumOfArts(response.data.data.number_of_arts);
          setNumOfHint(response.data.data.amount_of_hint);
          setAmount(response.data.data.amount);
          setUnlimtedColors(response.data.data.unlimited_colors);
          setUnlimtedArts(response.data.data.unlimited_arts);
          setUnlimtedHints(response.data.data.unlimited_hints);
          setImage(response.data.data.plan_avatar);
          setLoading(false);
        })
        .catch((err) => {
          setErrMessage(err.message);
        });
    };
    fetchData();
  }, [id, token]);

  const updateSubscription = async () => {
    console.log(planAvatar[0]);

    setLoading(true);
    formData.append('plan_name', planName);
    formData.append('art_to_be_colored', artToBeColored);
    formData.append('number_of_arts', numOfArts);
    formData.append('amount', amount);
    formData.append('amount_of_hint', numOfHint);
    formData.append('plan_avatar', planAvatar[0]);

    await axios
      .put(`https://colorculture.herokuapp.com/subscriptions/${id}`, formData, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((response) => {
        setLoading(false);
        if (response.data.message === 'OK') {
          console.log('working');
        }
      })
      .catch((err) => {
        setLoading(false);
        setErrMessage(err.nessage);
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
  const [planAvatar, setPlanAvatar] = useState<any[]>([]);



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

  useEffect(() => {
    if (isDeleted) {
      setTimeout(() => {
        setDeleted(false);
        navigate('/Dashboard/Subscription');
      }, 2000);
    }
  });

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
                  defaultValue={planName}
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
                  defaultValue={artToBeColored}
                  // value={unlimtedColors ? 'Unlimited' : artToBeColored}
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
                  // value={unlimtedArts ? 'Unlimited' : numOfArts}
                  onChange={(e) => {
                    setNumOfArts(e.target.value);
                  }}
                  disabled={unlimtedArts}
                  defaultValue={numOfArts}
                  required
                />
              </div>
              <div className="radio-plan">
                <label>Amount</label>
                <input
                  type="text"
                  placeholder="Enter number"
                  defaultValue={amount}
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
                  // value={unlimtedHints ? 'Unlimited' : numOfHint}
                  onChange={(e) => {
                    setNumOfHint(e.target.value);
                  }}
                  disabled={unlimtedHints}
                  defaultValue={numOfHint}
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
          <div className="ad-buttons">
            <button className="create-ad-button" onClick={updateSubscription}>
              Save Changes
            </button>
            <button
              className="delete-ad-button"
              onClick={() => {
                setModalOpen(true);
              }}
            >
              Delete Subscription
            </button>
          </div>
          {errMessage && <p className="err-message-plan">{errMessage}</p>}
        </div>
      )}
      {modalOpen && (
        <Modal setOpenModal={setModalOpen} id={id} setDeleted={setDeleted} />
      )}
      {isDeleted && <ConfirmModal name={planName} />}
    </div>
  );
};

export default EditPlans;

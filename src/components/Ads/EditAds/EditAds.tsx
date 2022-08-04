import { useContext, useEffect, useState } from 'react';
import './EditAds.scss';
import Modal from '../Modal/Modal';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../UserContext';
import axios from 'axios';
import Loader from '../../../Loader/Loader';
import { useNavigate } from 'react-router-dom';
import ConfirmModal from './Modal/ConfirmModal';

const EditAds = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const { id } = useParams();
  const { token } = useContext(UserContext);

  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [watchTime, setWatchTime] = useState('');
  const [peopleToBeReached, setPeopleToBeReached] = useState('');
  const [isDeleted, setDeleted] = useState(false);
  const [errMessage, setErrMessage] = useState('');
  const [adFile, setAdFile] = useState('');
  const [newImage, setNewImage] = useState('');
  const [newVideo, setNewVideo] = useState(false);
  const [display, setDisplay] = useState(true);
  const [file, setFile] = useState('');
  const [video, setVideo] = useState(false);

  const displayImage = (e: any) => {
    setDisplay(false);
    const image = URL.createObjectURL(e.target.files[0]);

    if (e.target.files[0].name.includes('.mp4')) {
      setNewVideo(true);
      setVideo(true);
    } else {
      setNewVideo(false);
      setVideo(false);
    }
    setFile(e.target.files[0]);
    setNewImage(image);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await axios
        .get(`https://colorculture.herokuapp.com/advertisements/${id}/`, {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
        .then((response) => {
          setTitle(response.data.data.title);
          setLink(response.data.data.redirect_url);
          setWatchTime(response.data.data.time_feed);
          setPeopleToBeReached(response.data.data.ad_target);
          setAdFile(response.data.data.file);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          setErrMessage(err.message);
        });
    };
    fetchData();
  }, [id, token]);

  useEffect(() => {
    adFile.includes('.mp4') ? setVideo(true) : setVideo(false);
  }, [adFile]);

  useEffect(() => {
    if (isDeleted) {
      setTimeout(() => {
        setDeleted(false);
        navigate('/Dashboard/Ads');
      }, 2000);
    }
  });

  const onSubmit = async () => {
    console.log(video);
    setLoading(true);
    const formData = new FormData();
    formData.append('title', title);
    formData.append('redirect_url', link);
    formData.append('time_feed', watchTime);
    formData.append('ad_target', peopleToBeReached);
    file ? formData.append('file', file) : formData.append('file', adFile);
    video ? formData.append('type', 'video') : formData.append('type', 'image');

    console.log(Object.fromEntries(formData));
    await axios
      .put(
        `https://colorculture.herokuapp.com/advertisements/${id}/`,
        formData,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        setLoading(false);
        if (response.data.message === 'OK') {
          navigate('/Dashboard/Ads');
        }
      })
      .catch((err) => {
        setLoading(false);
        setErrMessage(err.message);
      });
  };

  return (
    <div className="edit-ads-root">
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div className="root-edit">
            <div>
              <div className="column-edit-root">
                <label>Ad title</label>
                <input
                  type="text"
                  placeholder="Enter a title for the ad"
                  defaultValue={title}
                  onChange={(event) => setTitle(event.target.value)}
                />
              </div>
              <div className="column-edit-root">
                <label>Link to be redirected to</label>
                <input
                  type="text"
                  placeholder="Enter a link or URL"
                  defaultValue={link}
                />
              </div>
              <div className="column-edit-root">
                <label>Watch time</label>
                <input
                  type="text"
                  placeholder="Enter the amount of watching minutes"
                  defaultValue={watchTime}
                  onChange={(event) => setWatchTime(event.target.value)}
                />
              </div>
            </div>
            <div className="edit-root-2">
              <div className="column-edit">
                <label>People to be reached</label>
                <input
                  type="text"
                  placeholder="Enter a number"
                  defaultValue={peopleToBeReached}
                  onChange={(event) => setPeopleToBeReached(event.target.value)}
                />
              </div>
              <div className="file-edit">
                <label>
                  Choose the Ad file
                  <label className="file-label-20">
                    Choose a file
                    <input
                      type={'file'}
                      placeholder="Choose a file"
                      onInput={displayImage}
                      accept=".svg, .mp4, .png, .jpg, .jpeg"
                    />
                  </label>
                </label>
                {display ? (
                  video === true ? (
                    <video width={241} controls>
                      <source src={adFile} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      style={{ width: '241px', height: ' 270px' }}
                      src={adFile}
                      alt=""
                    />
                  )
                ) : newVideo === true ? (
                  <video width={241} controls>
                    <source src={newImage} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    style={{ width: '241px', height: ' 270px' }}
                    src={newImage}
                    alt=""
                  />
                )}
              </div>
            </div>
          </div>
          {errMessage && <p className="err-message-ads">{errMessage}</p>}
          <div className="button-root">
            <button className="save-button" onClick={onSubmit}>
              Save Changes
            </button>
            <button
              className="delete-ad"
              onClick={() => {
                setModalOpen(true);
              }}
            >
              Delete Ad
            </button>
          </div>
        </div>
      )}
      {modalOpen && (
        <Modal setOpenModal={setModalOpen} id={id} setDeleted={setDeleted} />
      )}
      {isDeleted && (
        <ConfirmModal
          name={title}
          setOpenModal={setModalOpen}
          modalOpen={modalOpen}
        />
      )}
    </div>
  );
};

export default EditAds;

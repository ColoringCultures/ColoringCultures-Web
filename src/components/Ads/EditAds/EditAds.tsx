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
  const [peopleToBeReached, setPeopleToBeReached] = useState();
  const [isDeleted, setDeleted] = useState(false);
  const [errMessage, setErrMessage] = useState('');

  // const [adFile, setAdFile] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await axios
        .get(`https://colorculture.herokuapp.com/advertisements/${id}`, {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
        .then((response) => {
          setTitle(response.data.data.title);
          setLink(response.data.data.redirect_url);
          setWatchTime(response.data.data.time_feed);
          setPeopleToBeReached(response.data.data.ad_target);
          // setAdFile(response.data.data.file);
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
    if (isDeleted) {
      setTimeout(() => {
        setDeleted(false);
        navigate('/Dashboard/Ads');
      }, 2000);
    }
  });

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
                />
              </div>
              <div className="file-edit">
                <label>
                  Choose the Ad file
                  <label className="file-label-2">
                    Choose a file
                    <input type={'file'} placeholder="Choose a file" />
                  </label>
                </label>
              </div>
            </div>
          </div>
          {errMessage && <p className="err-message-ads">{errMessage}</p>}
          <div className="button-root">
            <button className="save-button">Save Changes</button>
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

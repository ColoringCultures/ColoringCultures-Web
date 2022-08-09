import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { url } from '../../../api';
import Loader from '../../../Loader/Loader';
import { UserContext } from '../../../UserContext';
import '../AddCarousel/AddCarousel.scss';
import ConfirmModal from './Modal/ConfirmModal';
import Modal from './Modal/Modal';

const EditCarousel = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { token } = useContext(UserContext);
  const [isLoading, setLoading] = useState(false);
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [image, setImage] = useState('');
  const [finalImage, setFinalImage] = useState('');
  const [errMessage, setErrMessage] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [isDeleted, setDeleted] = useState(false);
  const characterLimit = 50;

  const handleChange = (event: any) => {
    if (characterLimit - event.target.value.length >= 0) {
      setDescription(event.target.value);
    }
  };

  const displayImage = (e: any) => {
    const image = URL.createObjectURL(e.target.files[0]);
    setImage(image);
    setFinalImage(e.target.files[0]);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await axios
        .get(`${url}/carousels/${id}/`, {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
        .then((response) => {
          setDescription(response.data.data.title);
          setLink(response.data.data.url);
          setImage(response.data.data.image);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, [id, token]);

  const updateImage = async () => {
    setLoading(true);
    const formData = new FormData();
    finalImage
      ? formData.append('image', finalImage)
      : formData.append('image', image);
    formData.append('title', description);
    formData.append('url', link);

    await axios
      .put(`${url}/carousels/${id}/`, formData, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((response) => {
        setLoading(false);
        if (response.data.message === 'OK') {
          navigate('/Dashboard/Images/SlideShowImages');
        }
      })
      .catch((err) => {
        setErrMessage(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (isDeleted) {
      setTimeout(() => {
        setDeleted(false);
        navigate('/Dashboard/Images/SlideShowImages');
      }, 2000);
    }
  });

  return (
    <div className="slideshow__root">
      {isLoading ? (
        <Loader />
      ) : (
        <form>
          <div className="form-rr">
            <div className="form-rr__one">
              <div className="ss__label">
                <label>Image Description</label>
                <textarea
                  placeholder="Enter the image description here"
                  onInput={handleChange}
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
                <p className="characters-left">
                  {characterLimit - description.length} characters remaining
                </p>
              </div>
              <div className="ss__label">
                <label>Link</label>
                <input
                  type="text"
                  placeholder="Enter a link or URL"
                  value={link === null ? '' : link}
                  onChange={(e) => setLink(e.target.value)}
                />
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
                      onChange={displayImage}
                    />
                  </label>
                </label>
                {image && (
                  <img
                    style={{ width: '300px', height: ' 200px' }}
                    src={image}
                    alt=""
                  />
                )}
              </div>
            </div>
          </div>
          {errMessage && <p className="images-error">{errMessage}</p>}
          <div className="image-buttons">
            <button className="create-Image-button" onClick={updateImage}>
              Save Changes
            </button>
            <button
              className="delete-Image-button"
              onClick={() => {
                setModalOpen(true);
              }}
              type="button"
            >
              Delete Image
            </button>
          </div>
        </form>
      )}
      {modalOpen && (
        <Modal setOpenModal={setModalOpen} id={id} setDeleted={setDeleted} />
      )}
      {isDeleted && <ConfirmModal />}
    </div>
  );
};

export default EditCarousel;

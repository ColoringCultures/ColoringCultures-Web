import { useState, useEffect, useContext } from 'react';
import '../AddImages/AddImages.scss';
import Loader from '../../../Loader/Loader';
import axios from 'axios';
import { UserContext } from '../../../UserContext';
import { useNavigate, useParams } from 'react-router-dom';
import Categories from './Categories/Categories';
import Modal from './Modal/Modal';
import ConfirmModal from './Modal/ConfirmModal';

const AddImages = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [image2, setImage2] = useState('');
  const { token } = useContext(UserContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [errMessage, setErrMessage] = useState('');
  const [categoryName, setCategoryName] = useState('Select a category');

  const [description, setDescription] = useState('');
  const [redirect_url, setRedirect_url] = useState('');
  const [imgName, setImgName] = useState('');
  const [isDeleted, setDeleted] = useState(false);
  const { id } = useParams();

  const displayImage = (e: any) => {
    const image = URL.createObjectURL(e.target.files[0]);
    setImage(image);
  };

  const displayImage2 = (e: any) => {
    const image = URL.createObjectURL(e.target.files[0]);
    setImage2(image);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await axios
        .get(`https://colorculture.herokuapp.com/colorapp/imagevector/${id}/`, {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
        .then((response) => {
          console.log(response);
          setImgName(response.data.data.name);
          setDescription(response.data.data.description);
          setRedirect_url(response.data.data.redirect_url);
          setImage(response.data.data.initial_image);
          setImage2(response.data.data.final_image);
          setCategoryName(response.data.data.category.name);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, [id, token]);

  const updateImage = async (data: any) => {
    setLoading(true);
    setImgName(data.name);
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('redirect_url', data.redirect_url);
    formData.append('initial_image', data.initial_image[0]);
    formData.append('final_image', data.final_image[0]);
    formData.append('category', category);

    await axios
      .post(
        'https://colorculture.herokuapp.com/colorapp/imagevector',
        formData,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      )
      .then((response) => {
        setLoading(false);
        if (response.data.message === 'OK') {
          setModalOpen(true);
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
        navigate('/Dashboard/Images');
      }, 2000);
    }
  });

  return (
    <div className="root_addImages">
      {isLoading ? (
        <Loader />
      ) : (
        <form>
          <div className="form">
            <section className="section-1">
              <div className="section__details">
                <label>Products Name</label>
                <input
                  type="text"
                  placeholder="Enter a name here"
                  defaultValue={imgName}
                />
              </div>
              <div className="description__details">
                <label>Products Description</label>
                <textarea
                  placeholder="Enter the product description here"
                  defaultValue={description}
                />
              </div>
              <div>
                <Categories
                  setCategory={setCategory}
                  setCategoryName={setCategoryName}
                  categoryName={categoryName}
                />
              </div>
              <div className="section__details">
                <label>Link</label>
                <input
                  type="text"
                  placeholder="Enter a link or URL"
                  defaultValue={redirect_url}
                />
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
                        onInput={displayImage}
                        accept=".svg"
                      />
                    </label>
                  </label>
                  {image && (
                    <img
                      style={{ width: '221px', height: ' 270px' }}
                      src={image}
                      alt=""
                    />
                  )}
                </div>
                <div className="upload__images">
                  <label>
                    Final
                    <label className="file__upload-images">
                      <span>Choose a file</span>
                      <input
                        type={'file'}
                        placeholder="Choose a file"
                        onInput={displayImage2}
                        accept=".svg"
                      />
                    </label>
                  </label>
                  {image2 && (
                    <img
                      style={{ width: '221px', height: ' 270px' }}
                      src={image2}
                      alt=""
                    />
                  )}
                </div>
              </div>
            </section>
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
              Delete Subscription
            </button>
          </div>
        </form>
      )}
      {modalOpen && (
        <Modal setOpenModal={setModalOpen} id={id} setDeleted={setDeleted} />
      )}
      {isDeleted && <ConfirmModal name={imgName} />}
    </div>
  );
};

export default AddImages;

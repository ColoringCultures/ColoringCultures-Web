import { useState, useEffect, useContext } from 'react';
import '../AddImages/AddImages.scss';
import Loader from '../../../Loader/Loader';
import axios from 'axios';
import { UserContext } from '../../../UserContext';
import { useNavigate, useParams } from 'react-router-dom';
import Categories from './Categories/Categories';
import Modal from './Modal/Modal';
import ConfirmModal from './Modal/ConfirmModal';
import { url } from '../../../api';

const AddImages = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [image2, setImage2] = useState('');
  const [initialImage, setInitialImage] = useState('');
  const [finalImage, setFinalImage] = useState('');
  const { token } = useContext(UserContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [errMessage, setErrMessage] = useState('');
  const [categoryName, setCategoryName] = useState('Select a category');
  const [isImage, setIsImage] = useState(false);

  const [description, setDescription] = useState('');
  const [redirect_url, setRedirect_url] = useState('');
  const [imgName, setImgName] = useState('');
  const [isDeleted, setDeleted] = useState(false);
  const { id } = useParams();

  const displayImage = (e: any) => {
    const image = URL.createObjectURL(e.target.files[0]);
    setImage(image);
    setInitialImage(e.target.files[0]);
    setIsImage(true);
  };

  const displayImage2 = (e: any) => {
    const image = URL.createObjectURL(e.target.files[0]);
    setImage2(image);
    setFinalImage(e.target.files[0]);
    setIsImage(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await axios
        .get(`${url}/colorapp/imagevector/${id}/`, {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
        .then((response) => {
          setImgName(response.data.data.name);
          setDescription(response.data.data.description);
          setRedirect_url(response.data.data.link);
          setImage(response.data.data.initial_image);
          setImage2(response.data.data.final_image);
          setCategoryName(response.data.data.category.name);
          setCategory(response.data.data.category.id);
          setLoading(false);
        });
    };
    fetchData();
  }, [id, token]);

  const updateImage = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append('name', imgName);
    formData.append('description', description);
    formData.append('redirect_url', redirect_url);
    formData.append('category', category);
    initialImage
      ? formData.append('initial_image', initialImage)
      : formData.append('initial_image', image);
    finalImage
      ? formData.append('final_image', finalImage)
      : formData.append('final_image', image2);
    formData.append('isImage', isImage.toString());

    await axios
      .put(`${url}/colorapp/imagevector/${id}/`, formData, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((response) => {
        setLoading(false);
        if (response.data.message === 'OK') {
          navigate('/Dashboard/Images');
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
                  onChange={(e) => setImgName(e.target.value)}
                />
              </div>
              <div className="description__details">
                <label>Image Description</label>
                <textarea
                  placeholder="Enter the Image description here"
                  defaultValue={description}
                  onChange={(e) => setDescription(e.target.value)}
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
                  onChange={(e) => setRedirect_url(e.target.value)}
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
              <p className="pointer-ks">
                When Updating the images, it is required you update both the
                initial and final image.
              </p>
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
              Delete Image
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

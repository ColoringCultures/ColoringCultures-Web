import { yupResolver } from '@hookform/resolvers/yup';
import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import './AddCarousel.scss';
import { schema } from './schema';
import { url } from '../../../api';
import { useNavigate } from 'react-router-dom';
import Loader from '../../../Loader/Loader';
import axios from 'axios';
import { UserContext } from '../../../UserContext';
import Modal from './Modal/Modal';

const AddCarousel = () => {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [errMessage, setErrMessage] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const { token } = useContext(UserContext);
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [descriptionText, setDescriptionText] = useState('');

  const characterLimit = 50;

  const handleChange = (event: any) => {
    if (characterLimit - event.target.value.length >= 0) {
      setDescriptionText(event.target.value);
    }
  };

  const displayImage = (e: any) => {
    const image = URL.createObjectURL(e.target.files[0]);
    setImage(image);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    setLoading(true);
    console.log(data);
    setName(data.title);
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('image', data.image[0]);
    formData.append('url', data.url);

    await axios
      .post(`${url}/carousels/`, formData, {
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
      .catch((err) => {
        setErrMessage(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (modalOpen) {
      setTimeout(() => {
        setModalOpen(false);
        navigate('/Dashboard/SlideShowImages');
      }, 2000);
    }
  });

  return (
    <div className="slideshow__root">
      {isLoading ? (
        <Loader />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-rr">
            <div className="form-rr__one">
              <div className="ss__label">
                <label>Image Description</label>
                <textarea
                  placeholder="Enter the image description here"
                  value={descriptionText}
                  onInput={handleChange}
                  {...register('title')}
                />
                <p className="characters-left">
                  {characterLimit - descriptionText.length} chacracters
                  remaining
                </p>
                {errors.title && (
                  <p className="images-error">{errors.title?.message}</p>
                )}
              </div>
              <div className="ss__label">
                <label>Link</label>
                <input
                  type="text"
                  placeholder="Enter a link or URL"
                  {...register('url')}
                />
                {errors.url && (
                  <p className="images-error">{errors.url?.message}</p>
                )}
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
                      onInput={displayImage}
                      {...register('image')}
                    />
                  </label>
                  {errors.image && (
                    <p className="images-error">{errors.image?.message}</p>
                  )}
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
          {errMessage && <p className="images-error">{errMessage}</p>}
          <button className="AC-add">Add Image</button>
        </form>
      )}
      {modalOpen && (
        <Modal setOpenModal={setModalOpen} Modal={modalOpen} caroName={name} />
      )}
    </div>
  );
};

export default AddCarousel;

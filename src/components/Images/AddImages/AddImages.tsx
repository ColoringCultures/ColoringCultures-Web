import { useState, useEffect, useRef, useContext } from 'react';
import './AddImages.scss';
import { useForm } from 'react-hook-form';
import { schema } from '../schema';
import { yupResolver } from '@hookform/resolvers/yup';
import Loader from '../../../Loader/Loader';
import axios from 'axios';
import { UserContext } from '../../../UserContext';
import Modal from './Modal/Modal';
import { useNavigate } from 'react-router-dom';

const AddImages = () => {
  const navigate = useNavigate();
  const [openDD, setOpenDD] = useState(false);
  const [category, setCategory] = useState('');
  const [categoryName, setCategoryName] = useState('Select a category');
  const [image, setImage] = useState('');
  const [image2, setImage2] = useState('');
  const { token } = useContext(UserContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [errMessage, setErrMessage] = useState('');
  const [imgName, setImgName] = useState('');

  const container = useRef<HTMLDivElement>(null);

  const displayImage = (e: any) => {
    const image = URL.createObjectURL(e.target.files[0]);
    setImage(image);
  };

  const displayImage2 = (e: any) => {
    const image = URL.createObjectURL(e.target.files[0]);
    setImage2(image);
  };


  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (container.current && !container.current.contains(e.target as Node)) {
        setOpenDD(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
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
        console.log(response.data);
        if (response.data.message === 'OK') {
          setModalOpen(true);
        }
        reset({
          data: '',
        });
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
        navigate('/Dashboard/Images');
      }, 2000);
    }
  });

  return (
    <div className="root_addImages">
      {isLoading ? (
        <Loader />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form">
            <section className="section-1">
              <div className="section__details">
                <label>Products Name</label>
                <input
                  type="text"
                  placeholder="Enter a name here"
                  {...register('name')}
                />
                {errors.name && (
                  <p className="images-error">{errors.name?.message}</p>
                )}
              </div>
              <div className="description__details">
                <label>Products Description</label>
                <textarea
                  placeholder="Enter the product description here"
                  {...register('description')}
                />
                {errors.description && (
                  <p className="images-error">{errors.description?.message}</p>
                )}
              </div>
              <div className="dd-root">
                <label>Category</label>
                <div className="dd-container" ref={container}>
                  <div className="dd-container__button">
                    <button
                      onClick={() => {
                        setOpenDD(!openDD);
                      }}
                      type="button"
                    >
                      {categoryName}
                      <img
                        src={require('../../../assets/Icon feather-chevron-down.png')}
                        alt="icon"
                      />
                    </button>
                    <p>Add new category</p>
                  </div>
                  {openDD && (
                    <div className="dd-container__dropdown">
                      <ul>
                        <li
                          onClick={() => {
                            setCategory('3');
                            setCategoryName('History');
                            setOpenDD(false);
                          }}
                        >
                          History
                        </li>
                        <li
                          onClick={() => {
                            setCategory('2');
                            setOpenDD(false);
                            setCategoryName('HBCU');
                          }}
                        >
                          HBCU
                        </li>
                        <li
                          onClick={() => {
                            setCategory('1');
                            setCategoryName('Location');
                            setOpenDD(false);
                          }}
                        >
                          Location
                        </li>
                        <li
                          onClick={() => {
                            setCategory('4');
                            setCategoryName('People');
                            setOpenDD(false);
                          }}
                        >
                          People
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <div className="section__details">
                <label>Link</label>
                <input
                  type="text"
                  placeholder="Enter a link or URL"
                  {...register('redirect_url')}
                />
                {errors.redirect_url && (
                  <p className="images-error">{errors.redirect_url?.message}</p>
                )}
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
                        {...register('initial_image')}
                      />
                    </label>
                    {errors.initial_image && (
                      <p className="images-error">
                        {errors.initial_image?.message}
                      </p>
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
                        {...register('final_image')}
                      />
                    </label>
                    {errors.final_image && (
                      <p className="images-error">
                        {errors.final_image?.message}
                      </p>
                    )}
                  </label>
                  {image2 && (
                    <img
                      style={{ width: '241px', height: ' 270px' }}
                      src={image2}
                      alt=""
                    />
                  )}
                </div>
              </div>
            </section>
          </div>
          {errMessage && <p className="images-error">{errMessage}</p>}
          <button className="add-image__button" type="submit">
            Add Image
          </button>
        </form>
      )}
      {modalOpen && (
        <Modal
          setOpenModal={setModalOpen}
          Modal={modalOpen}
          achName={imgName}
        />
      )}
    </div>
  );
};

export default AddImages;

import './AddAds.scss';
import { useForm } from 'react-hook-form';
import { schema } from '../schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { UserContext } from '../../../UserContext';
import Modal from './Modal/Modal';
import Loader from '../../../Loader/Loader';
import { useNavigate } from 'react-router-dom';

const AddAds = () => {
  const navigate = useNavigate();
  const formData = new FormData();
  const [modalOpen, setModalOpen] = useState(false);
  const { token } = useContext(UserContext);
  const [image, setImage] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [adsName, setAdsname] = useState('');
  const [errMessage, setErrMessage] = useState('');
  const [video, setVideo] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const displayImage = (e: any) => {
    const image = URL.createObjectURL(e.target.files[0]);
    e.target.files[0].name.includes('.mp4') ? setVideo(true) : setVideo(false);
    setImage(image);
  };

  const onSubmit = async (data: any) => {
    setLoading(true);
    setAdsname(data.title);
    formData.append('title', data.title);
    formData.append('redirect_url', data.redirect_url);
    formData.append('time_feed', data.time_feed);
    formData.append('ad_target', data.ad_target);
    formData.append('file', data.file[0]);
    video === true
      ? formData.append('type', 'video')
      : formData.append('type', 'image');

    await axios
      .post('https://colorculture.herokuapp.com/advertisements/', formData, {
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
        reset({
          data: '',
        });
      })
      .catch((err) => {
        setLoading(false);
        setErrMessage(err.message);
      });
  };

  useEffect(() => {
    if (modalOpen) {
      setTimeout(() => {
        setModalOpen(false);
        navigate('/Dashboard/Ads');
      }, 2000);
    }
  });

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="root-ad">
            <div>
              <div className="ads-label">
                <label>Ad title</label>
                <input
                  type="text"
                  placeholder="Enter a title for the ad"
                  {...register('title')}
                />
                {errors.title && (
                  <p className="error-message-ads">{errors.title?.message}</p>
                )}
              </div>
              <div className="ads-label">
                <label>Link to be redirected to</label>
                <input
                  type="text"
                  placeholder="Enter a link or URL"
                  {...register('redirect_url')}
                />
                {errors.redirect_url && (
                  <p className="error-message-ads">
                    {errors.redirect_url?.message}
                  </p>
                )}
              </div>
              <div className="ads-label">
                <label>Watch time</label>
                <input
                  type="text"
                  placeholder="Enter the amount of watching minutes"
                  {...register('time_feed')}
                />
                {errors.time_feed && (
                  <p className="error-message-ads">
                    {errors.time_feed?.message}
                  </p>
                )}
              </div>
            </div>
            <div className="ads-div-2">
              <div className="ads-label">
                <label>People to be reached</label>
                <input
                  type="text"
                  placeholder="Enter a number"
                  {...register('ad_target')}
                />
                {errors.ad_target && (
                  <p className="error-message-ads">
                    {errors.ad_target?.message}
                  </p>
                )}
              </div>
              <div className="file-upload">
                <label>
                  Choose the Ad file
                  <label className="file-label">
                    <span>Choose a file</span>
                    <input
                      type={'file'}
                      placeholder="Choose a file"
                      {...register('file')}
                      onInput={displayImage}
                      accept=".svg, .mp4"
                    />
                  </label>
                </label>
                {errors.file && (
                  <p className="error-message-ads">{errors.file?.message}</p>
                )}
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
          {errMessage && <p className="err-message-ads">{errMessage}</p>}
          <button className="ad-button" type="submit" disabled={isLoading}>
            Create Ad
          </button>
        </form>
      )}
      {modalOpen && (
        <Modal
          setOpenModal={setModalOpen}
          Modal={modalOpen}
          adsName={adsName}
        />
      )}
    </div>
  );
};

export default AddAds;

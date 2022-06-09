import './AddAds.scss';
import { useForm } from 'react-hook-form';
import { schema } from '../schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext, useState } from 'react';
import axios from 'axios';
import { UserContext } from '../../../UserContext';
import Modal from './Modal/Modal';

const AddAds = () => {
  const [modalOpen, setModalOpen] = useState(true);
  const { token } = useContext(UserContext);
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const displayImage = (e: any) => {
    const image = URL.createObjectURL(e.target.files[0]);
    setImage(image);
  };

  const onSubmit = async (data: any) => {
    setLoading(true);
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('redirect_url', data.redirect_url);
    formData.append('time_feed', data.time_feed);
    formData.append('ad_target', data.ad_target);
    formData.append('file', data.file[0]);

    const response = await axios.post(
      'https://colorculture.herokuapp.com/advertisements/',
      formData,
      {
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    );
    console.log(response);
    setLoading(false);
    if (response.data.message === 'OK') {
      setModalOpen(true);
    }
  };
  return (
    <div>
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
              <p className="error-message-ads">{errors.title?.message}</p>
            </div>
            <div className="ads-label">
              <label>Link to be redirected to</label>
              <input
                type="text"
                placeholder="Enter a link or URL"
                {...register('redirect_url')}
              />
              <p className="error-message-ads">
                {errors.redirect_url?.message}
              </p>
            </div>
            <div className="ads-label">
              <label>Watch time</label>
              <input
                type="text"
                placeholder="Enter the amount of watching minutes"
                {...register('time_feed')}
              />
              <p className="error-message-ads">{errors.time_feed?.message}</p>
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
              <p className="error-message-ads">{errors.ad_target?.message}</p>
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
                    accept=".svg"
                  />
                </label>
              </label>
              <p className="error-message-ads">{errors.file?.message}</p>
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
        <button className="ad-button" type="submit">
          {loading ? 'Creating' : 'Create Ad'}
        </button>
      </form>
      {modalOpen && <Modal setOpenModal={setModalOpen} Modal={modalOpen} />}
    </div>
  );
};

export default AddAds;

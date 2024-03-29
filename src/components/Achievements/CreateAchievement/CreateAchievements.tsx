import { useContext, useEffect, useState } from 'react';
import './CreateAchievement.scss';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../achievementSchema';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { UserContext } from '../../../UserContext';
import Loader from '../../../Loader/Loader';
import Modal from './Modal/Modal';
import { useNavigate } from 'react-router-dom';
import { url } from '../../../api';

const CreateAchievement = () => {
  const navigate = useNavigate();
  const [dMode, setdMode] = useState('');
  const [lMode, setlMode] = useState('');
  const [colored, setColored] = useState('');
  const { token } = useContext(UserContext);
  const [isLoading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [achName, setAchName] = useState('');
  const [errMessage, setErrMessage] = useState('');

  const displaydMode = (e: any) => {
    const image = URL.createObjectURL(e.target.files[0]);
    setdMode(image);
  };

  const displaylMode = (e: any) => {
    const image = URL.createObjectURL(e.target.files[0]);
    setlMode(image);
  };

  const displayColored = (e: any) => {
    const image = URL.createObjectURL(e.target.files[0]);
    setColored(image);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    const arr = [
      {
        level: 1,
        criteria: {
          colored_images: data.criteria1,
        },
      },
      {
        level: 2,
        criteria: {
          colored_images: data.criteria2,
        },
      },
      {
        level: 3,
        criteria: {
          colored_images: data.criteria3,
        },
      },
    ];
    setLoading(true);
    setAchName(data.name);
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('criteria', data.criteria);
    formData.append('icon_image', data.icon_image[0]);
    formData.append('colored_icon_image', data.colored_icon_image[0]);
    formData.append('dark_icon_image', data.dark_icon_image[0]);
    formData.append('tasks', JSON.stringify(arr));

    console.log(Object.fromEntries(formData));
    console.log(JSON.stringify(arr));

    await axios
      .post(`${url}/achievements/`, formData, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        setLoading(false);
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
        navigate('/Dashboard/Achievements');
      }, 2000);
    }
  });

  return (
    <div className="root-create">
      {isLoading ? (
        <Loader />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="create-root">
            <div className="create-root-div1">
              <div className={'create-input-text'}>
                <label htmlFor="Achievement Name">Achievement Name</label>
                <input
                  type="text"
                  placeholder="Enter a number here"
                  {...register('name')}
                  className="testing"
                />
                {errors.name && (
                  <p className="create-error-message">{errors.name?.message}</p>
                )}
              </div>
              <div className="create-input-text">
                <label htmlFor="Description">Description</label>
                <input
                  type="text"
                  placeholder="Enter text"
                  {...register('description')}
                />
                {errors.description && (
                  <p className="create-error-message">
                    {errors.description?.message}
                  </p>
                )}
              </div>
              <div className="create-input-text-criteria">
                <label htmlFor="Criteria">Level 1 Criteria</label>
                <input
                  type="text"
                  placeholder="Enter a number"
                  {...register('criteria1')}
                />
                {errors.criteria1 && (
                  <p className="create-error-message">
                    {errors.criteria1?.message}
                  </p>
                )}
              </div>
              <div className="create-input-text-criteria">
                <label htmlFor="Criteria">Level 2 Criteria</label>
                <input
                  type="text"
                  placeholder="Enter number of colored images"
                  {...register('criteria2')}
                />
                {errors.criteria2 && (
                  <p className="create-error-message">
                    {errors.criteria2?.message}
                  </p>
                )}
              </div>
              <div className="create-input-text-criteria">
                <label htmlFor="Criteria">Level 3 Criteria</label>
                <input
                  type="text"
                  placeholder="Enter number of colored images"
                  {...register('criteria3')}
                />
                {errors.criteria3 && (
                  <p className="create-error-message">
                    {errors.criteria3?.message}
                  </p>
                )}
              </div>
            </div>

            <div className="create-root-div2">
              <div className="file-root">
                <label htmlFor="">
                  {' '}
                  Upload initial and final images. (SVG)
                </label>
                <div className="major-files">
                  <div className="shade-mode">
                    <label>
                      Dark-mode
                      <label className="file-label-create">
                        <span>Choose a file</span>
                        <input
                          type={'file'}
                          placeholder="Choose a file"
                          accept=".svg"
                          onInput={displaydMode}
                          {...register('dark_icon_image')}
                        />
                      </label>
                      {errors.dark_icon_image && (
                        <p className="create-error-message">
                          {errors.dark_icon_image?.message}
                        </p>
                      )}
                    </label>
                    {dMode && (
                      <img
                        style={{ width: '150px', height: ' 168px' }}
                        src={dMode}
                        alt=""
                      />
                    )}
                  </div>
                  <div className="shade-mode">
                    <label>
                      Light-mode
                      <label className="file-label-create">
                        <span>Choose a file</span>
                        <input
                          type={'file'}
                          placeholder="Choose a file"
                          accept=".svg"
                          onInput={displaylMode}
                          {...register('icon_image')}
                        />
                      </label>
                      {errors.icon_image && (
                        <p className="create-error-message">
                          {errors.icon_image?.message}
                        </p>
                      )}
                    </label>
                    {lMode && (
                      <img
                        style={{ width: '150px', height: ' 168px' }}
                        src={lMode}
                        alt=""
                      />
                    )}
                  </div>
                  <div className="shade-mode">
                    <label>
                      Colored
                      <label className="file-label-create">
                        <span>Choose a file</span>
                        <input
                          type={'file'}
                          placeholder="Choose a file"
                          accept=".svg"
                          onInput={displayColored}
                          {...register('colored_icon_image')}
                        />
                      </label>
                      {errors.colored_icon_image && (
                        <p className="create-error-message">
                          {errors.colored_icon_image?.message}
                        </p>
                      )}
                    </label>
                    {colored && (
                      <img
                        style={{ width: '150px', height: '168px' }}
                        src={colored}
                        alt=""
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {errMessage && <p className="err-message-ach">{errMessage}</p>}
          <div>
            <button
              className="create-button-ach"
              type="submit"
              disabled={isLoading}
            >
              Create
            </button>
          </div>
        </form>
      )}
      {modalOpen && (
        <Modal
          setOpenModal={setModalOpen}
          Modal={modalOpen}
          achName={achName}
        />
      )}
    </div>
  );
};

export default CreateAchievement;

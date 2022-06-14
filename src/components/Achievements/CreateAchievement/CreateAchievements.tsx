import { useContext, useEffect, useState } from 'react';
import './CreateAchievement.scss';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../achievementSchema';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { UserContext } from '../../../UserContext';
import Loader from '../../../Loader/Loader';
import Modal from './Modal/Modal';

const CreateAchievement = () => {
  const [dMode, setdMode] = useState('');
  const [lMode, setlMode] = useState('');
  const [colored, setColored] = useState('');
  const { token } = useContext(UserContext);
  const [isLoading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [achName, setAchName] = useState('');

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
    setLoading(true);
    setAchName(data.name);
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('task', data.task);
    formData.append('criteria', data.criteria);
    formData.append('icon_image', data.icon_image[0]);
    formData.append('colored_icon_image', data.colored_icon_image[0]);
    formData.append('dark_icon_image', data.dark_icon_image[0]);

    const response = await axios.post(
      'https://colorculture.herokuapp.com/achievements/',
      formData,
      {
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    );
    setLoading(false);
    if (response.data.message === 'OK') {
      setModalOpen(true);
    }
    reset({
      data: '',
    });
  };

  useEffect(() => {
    if (modalOpen) {
      setTimeout(() => {
        setModalOpen(false);
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
              <div className="create-input-text">
                <label htmlFor="Achievement Name">Achievement Name</label>
                <input
                  type="text"
                  placeholder="Enter a number here"
                  {...register('name')}
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
                  {...register('task')}
                />
                {errors.task && (
                  <p className="create-error-message">{errors.task?.message}</p>
                )}
              </div>
              <div className="create-input-text-criteria">
                <label htmlFor="Criteria">Criteria</label>
                <input
                  type="text"
                  placeholder="Enter a number"
                  {...register('criteria')}
                />
                {errors.criteria && (
                  <p className="create-error-message">
                    {errors.criteria?.message}
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

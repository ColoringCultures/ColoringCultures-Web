import { useContext, useEffect, useState } from 'react';
import '../CreateAchievement/CreateAchievement.scss';
import Modal from '../Modal/Modal';
import { useParams } from 'react-router';
import { UserContext } from '../../../UserContext';
import Loader from '../../../Loader/Loader';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './EditSchema';
import { useForm } from 'react-hook-form';
import ConfirmModal from './Modal/ConfirmModal';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EditAchievement = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [dMode, setdMode] = useState('');
  const [lMode, setlMode] = useState('');
  const [colored, setColored] = useState('');
  const { token } = useContext(UserContext);
  const [isLoading, setLoading] = useState(true);
  const [isDeleted, setDeleted] = useState(false);
  const [errMessage, setErrMessage] = useState('');

  const { id } = useParams();

  const displaydMode = (e: any) => {
    const image = URL.createObjectURL(e.target.files[0]);
    setdMode(image);
    setdImage(e.target.files[0]);
    setNewImage('true');
  };

  const displaylMode = (e: any) => {
    const image = URL.createObjectURL(e.target.files[0]);
    setlMode(image);
    setlImage(e.target.files[0]);
    setNewImage('true');
  };

  const displayColored = (e: any) => {
    const image = URL.createObjectURL(e.target.files[0]);
    setColored(image);
    setcImage(e.target.files[0]);
    setNewImage('true');
  };

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [criteria, setcriteria] = useState('');
  const [dImage, setdImage] = useState('');
  const [lImage, setlImage] = useState('');
  const [cImage, setcImage] = useState('');
  const [newImage, setNewImage] = useState('false');

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`https://colorculture.herokuapp.com/achievements/${id}/`, {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
        .then((response) => {
          setName(response.data.data.name);
          setDescription(response.data.data.task);
          setcriteria(response.data.data.criteria);
          setLoading(false);
          setdImage(response.data.data.dark_icon_image);
          setcImage(response.data.data.colored_icon_image);
          setlImage(response.data.data.icon_image);
        })
        .catch((err) => {
          setErrMessage(err.message);
          setLoading(false);
        });
    };
    fetchData();
  }, [id, token]);

  const {
    register,
    reset,
    formState: { isSubmitSuccessful },
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append('name', name);
    formData.append('task', description);
    formData.append('criteria', criteria);
    formData.append('icon_image', lImage);
    formData.append('dark_icon_image', dImage);
    formData.append('colored_icon_image', cImage);
    formData.append('new_image', newImage);

    await axios
      .put(`https://colorculture.herokuapp.com/achievements/${id}/`, formData, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((response) => {
        setLoading(false);
        if (response.data.message === 'OK') {
          navigate('/Dashboard/Achievements');
        }
      })
      .catch((err) => {
        setLoading(false);
        setErrMessage(err.message);
      });
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        name: '',
        task: '',
        criteria: '',
        dark_icon_image: '',
        icon_image: '',
        colored_icon_image: '',
      });
    }
  }, [isSubmitSuccessful, reset]);

  useEffect(() => {
    if (isDeleted) {
      setTimeout(() => {
        setDeleted(false);
        navigate('/Dashboard/Achievements');
      }, 2000);
    }
  }, [isDeleted, navigate]);

  return (
    <div className="root-create">
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div className="create-root">
            <div className="create-root-div1">
              <div className="create-input-text">
                <label htmlFor="Achievement Name">Achievement Name</label>
                <input
                  type="text"
                  placeholder="Enter a name here"
                  defaultValue={name}
                  onChange={(e) => setName(e.target.value)}
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
                  defaultValue={description}
                  onChange={(e) => setDescription(e.target.value)}
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
                  defaultValue={criteria}
                  onChange={(e) => setcriteria(e.target.value)}
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
                      {/* {errors.dark_icon_image && (
                        <p className="create-error-message">
                          {errors.dark_icon_image?.message}
                        </p>
                      )} */}
                    </label>
                    {dMode ? (
                      <img
                        style={{ width: '150px', height: ' 168px' }}
                        src={dMode}
                        alt="Empty"
                      />
                    ) : (
                      <img
                        style={{ width: '150px', height: ' 168px' }}
                        src={dImage}
                        alt="Empty"
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
                      {/* {errors.icon_image && (
                        <p className="create-error-message">
                          {errors.icon_image?.message}
                        </p>
                      )} */}
                    </label>
                    {lMode ? (
                      <img
                        style={{ width: '150px', height: ' 168px' }}
                        src={lMode}
                        alt="Empty"
                      />
                    ) : (
                      <img
                        style={{ width: '150px', height: ' 168px' }}
                        src={lImage}
                        alt="Empty"
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
                      {/* {errors.colored_icon_image && (
                        <p className="create-error-message">
                          {errors.colored_icon_image?.message}
                        </p>
                      )} */}
                    </label>
                    {colored ? (
                      <img
                        style={{ width: '150px', height: '168px' }}
                        src={colored}
                        alt="Empty"
                      />
                    ) : (
                      <img
                        style={{ width: '150px', height: '168px' }}
                        src={cImage}
                        alt="Empty"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {errMessage && <p className="err-message-ach">{errMessage}</p>}
          <div className="edit-vv">
            <button className="create-button-ach" onClick={onSubmit}>
              Save Changes
            </button>
            <button
              className="delete-button-ach"
              onClick={() => setModalOpen(true)}
            >
              Delete achievement
            </button>
          </div>
        </div>
      )}
      {modalOpen && (
        <Modal setOpenModal={setModalOpen} id={id} setDeleted={setDeleted} />
      )}
      {isDeleted && <ConfirmModal name={name} />}
    </div>
  );
};

export default EditAchievement;

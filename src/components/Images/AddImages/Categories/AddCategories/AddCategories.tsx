import { useContext, useState, useRef, useEffect } from 'react';
import './AddCategories.scss';
import { UserContext } from '../../../../../UserContext';
import axios from 'axios';
import { url } from '../../../../../api';

const AddCategories = ({ setModal, setRefresh }: any) => {
  const { token } = useContext(UserContext);
  const [name, setName] = useState('');
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  const onSubmit = async () => {
    await axios
      .post(
        `${url}/colorapp/category/`,
        {
          name,
        },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      )
      .then(() => {
        setRefresh(true);
        setModal(false);
      });
  };

  return (
    <div className="category-root">
      <div className="category-square-root">
        <div className="category-cancel-button">
          <button
            onClick={() => {
              setModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="category-content-ads">
          <div className="category-header">
            <p>Category Name</p>
          </div>
          <div className="category-body">
            <input
              type="text"
              placeholder="Enter a name here"
              onChange={(event) => {
                setName(event.target.value);
              }}
              ref={ref}
            />
          </div>
          <button
            className="category-button"
            onClick={() => {
              onSubmit();
            }}
            type="button"
          >
            Add Category
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCategories;

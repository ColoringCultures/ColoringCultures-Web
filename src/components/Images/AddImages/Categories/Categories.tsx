import { useContext, useEffect, useRef, useState } from 'react';
import '../AddImages.scss';
import { UserContext } from '../../../../UserContext';
import axios from 'axios';
import './AddCategories/AddCategories';
import AddCategories from './AddCategories/AddCategories';
import DeleteIcon from '@mui/icons-material/Delete';
import { url } from '../../../../api';

const Categories = ({ setCategory }: any) => {
  const { token } = useContext(UserContext);
  const [openDD, setOpenDD] = useState(false);
  const [data, setData] = useState<any[]>([]);
  const [errMessage, setErrMessage] = useState('');
  const [AddCategory, setAddCategory] = useState(false);

  const container = useRef<HTMLDivElement>(null);
  const [categoryName, setCategoryName] = useState('Select a category');
  const [refresh, setRefresh] = useState(false);
  const [change, setChange] = useState(false);

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

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${url}/colorapp/category/`, {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
        .then((response) => {
          setData(response.data.data);
        })
        .catch((err) => {
          setErrMessage(err.message);
        });
    };
    fetchData();
    setRefresh(false);
  }, [token, refresh]);

  const deleteCategory = (id: number) => {
    setRefresh(true);
    axios
      .delete(`${url}/colorapp/category/${id}/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (change) {
      setCategoryName('Select a category');
      setChange(false);
    }
  }, [change]);

  return (
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
              src={require('../../../../assets/Icon feather-chevron-down.png')}
              alt="icon"
            />
          </button>
          <p
            onClick={() => {
              setAddCategory(true);
            }}
          >
            Add new category
          </p>
        </div>
        {openDD && (
          <div className="dd-container__dropdown">
            {errMessage && <p>{errMessage}</p>}
            {data.map((data) => {
              return (
                <ul
                  key={data.id}
                  onClick={() => {
                    setCategory(data.id);
                    setCategoryName(data.name);
                    setOpenDD(false);
                  }}
                >
                  <li>
                    {data.name}{' '}
                    <span
                      onClick={() => {
                        deleteCategory(data.id);
                        setChange(true);
                      }}
                    >
                      <DeleteIcon className="deleteicon" />
                    </span>
                  </li>
                </ul>
              );
            })}
          </div>
        )}
      </div>
      {AddCategory && (
        <AddCategories
          setModal={setAddCategory}
          setOpenDD={setOpenDD}
          setRefresh={setRefresh}
        />
      )}
    </div>
  );
};
export default Categories;

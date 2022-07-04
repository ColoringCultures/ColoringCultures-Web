import './TabNavbar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ImageIcon from '@mui/icons-material/Image';
import BarChartIcon from '@mui/icons-material/BarChart';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MessageIcon from '@mui/icons-material/Message';
import PostAddIcon from '@mui/icons-material/PostAdd';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import PaidIcon from '@mui/icons-material/Paid';
import NavLink from '../../../Navlink';
import { useContext } from 'react';
import { UserContext } from '../../../UserContext';

const TabNavbar = ({ setModalOpen }: any) => {
  const { userName } = useContext(UserContext);
  return (
    <div className="tab-navbar">
      <div className="tab-admin-details">
        <img src={require('../../../assets/Ellipse 1.png')} alt="" />
        <h1>{userName}</h1>
        <p>Admin</p>
      </div>
      <div className="tab-menu-wrapper">
        <h1 className="tab-menu">Menu</h1>
        <div className="tab-links">
          <div>
            <NavLink
              inactiveClassName="tab-navlink"
              to="/Dashboard/"
              exact={false}
              className="tab-navlink"
              activeClassName="tab-active"
            >
              <DashboardIcon className="tab-dashicon" />
            </NavLink>
          </div>
          <div>
            <NavLink
              inactiveClassName="tab-navlink"
              to="/Dashboard/Images"
              exact={false}
              className="tab-navlink"
              activeClassName="tab-active"
            >
              <ImageIcon className="tab-dashicon" />
            </NavLink>
          </div>
          <div>
            <NavLink
              inactiveClassName="tab-navlink"
              to="/Dashboard/Statistics"
              exact={false}
              className="tab-navlink"
              activeClassName="tab-active"
            >
              <BarChartIcon className="tab-dashicon" />
            </NavLink>
          </div>
          <div>
            <NavLink
              inactiveClassName="tab-navlink"
              to="/Dashboard/Achievements"
              exact={false}
              className="tab-navlink"
              activeClassName="tab-active"
            >
              <EmojiEventsIcon className="tab-dashicon" />
            </NavLink>
          </div>
          <div>
            <NavLink
              inactiveClassName="tab-navlink"
              to="/Dashboard/UserFeedback"
              exact={false}
              className="tab-navlink"
              activeClassName="tab-active"
            >
              <MessageIcon className="tab-dashicon" />
            </NavLink>
          </div>
          <div>
            <NavLink
              inactiveClassName="tab-navlink"
              to="/Dashboard/Ads"
              exact={false}
              className="tab-navlink"
              activeClassName="tab-active"
            >
              <PostAddIcon className="tab-dashicon" />
            </NavLink>
          </div>
          <div>
            <NavLink
              inactiveClassName="tab-navlink"
              to="/Dashboard/Subscription"
              exact={false}
              className="tab-navlink"
              activeClassName="tab-active"
            >
              <SubscriptionsIcon className="tab-dashicon" />
            </NavLink>
          </div>
          <div>
            <NavLink
              inactiveClassName="tab-navlink"
              to="/Dashboard/Revenue"
              exact={false}
              className="tab-navlink"
              activeClassName="tab-active"
            >
              <PaidIcon className="tab-dashicon" />
            </NavLink>
          </div>
        </div>
        <div
          className="tab-link"
          onClick={() => {
            setModalOpen(true);
          }}
        >
          <img
            className="tab-signout-icon"
            src={require('../../../assets/Path 29.png')}
            alt=""
          />
        </div>
        {/* <div></div> */}
      </div>
    </div>
  );
};

export default TabNavbar;

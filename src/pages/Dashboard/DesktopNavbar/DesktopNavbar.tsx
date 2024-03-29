import NavLink from '../../../Navlink';
import './DesktopNavbar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ImageIcon from '@mui/icons-material/Image';
import BarChartIcon from '@mui/icons-material/BarChart';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MessageIcon from '@mui/icons-material/Message';
import PostAddIcon from '@mui/icons-material/PostAdd';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import PaidIcon from '@mui/icons-material/Paid';
import { useContext } from 'react';
import { UserContext } from '../../../UserContext';

const DesktopNavbar = ({ setModalOpen }: any) => {
  const { userName } = useContext(UserContext);
  return (
    <div className="navbar">
      <div className="admin-details">
        <img src={require('../../../assets/user-profile2.webp')} alt="" />
        <h1>{userName}</h1>
        <p>Admin</p>
      </div>
      <div className="menu-wrapper">
        <h1 className="menu">Menu</h1>
        <div className="links">
          <div>
            <NavLink
              inactiveClassName="navlink"
              to="/Dashboard/"
              exact={false}
              className="navlink"
              activeClassName="active"
            >
              <DashboardIcon className="dashicon" />
              Dashboard
            </NavLink>
          </div>
          <div>
            <NavLink
              inactiveClassName="navlink"
              to="/Dashboard/Images"
              exact={false}
              className="navlink"
              activeClassName="active"
            >
              <ImageIcon className="dashicon" />
              Images
            </NavLink>
          </div>
          <div>
            <NavLink
              inactiveClassName="navlink"
              to="/Dashboard/Statistics"
              exact={false}
              className="navlink"
              activeClassName="active"
            >
              <BarChartIcon className="dashicon" />
              Statistics
            </NavLink>
          </div>
          <div>
            <NavLink
              inactiveClassName="navlink"
              to="/Dashboard/Achievements"
              exact={false}
              className="navlink"
              activeClassName="active"
            >
              <EmojiEventsIcon className="dashicon" />
              Achievements
            </NavLink>
          </div>
          <div>
            <NavLink
              inactiveClassName="navlink"
              to="/Dashboard/UserFeedback"
              exact={false}
              className="navlink"
              activeClassName="active"
            >
              <MessageIcon className="dashicon" />
              Users Feedback
            </NavLink>
          </div>
          <div>
            <NavLink
              inactiveClassName="navlink"
              to="/Dashboard/Ads"
              exact={false}
              className="navlink"
              activeClassName="active"
            >
              <PostAddIcon className="dashicon" />
              Ads
            </NavLink>
          </div>
          <div>
            <NavLink
              inactiveClassName="navlink"
              to="/Dashboard/Subscription"
              exact={false}
              className="navlink"
              activeClassName="active"
            >
              <SubscriptionsIcon className="dashicon" />
              Subscription
            </NavLink>
          </div>
          <div>
            <NavLink
              inactiveClassName="navlink"
              to="/Dashboard/Revenue"
              exact={false}
              className="navlink"
              activeClassName="active"
            >
              <PaidIcon className="dashicon" />
              Revenue
            </NavLink>
          </div>
        </div>
        <div
          className="link"
          onClick={() => {
            setModalOpen(true);
          }}
        >
          <img
            className="signout-icon"
            src={require('../../../assets/Path 29.png')}
            alt=""
          />
          <p>Sign Out</p>
        </div>
        {/* <div></div> */}
      </div>
    </div>
  );
};

export default DesktopNavbar;

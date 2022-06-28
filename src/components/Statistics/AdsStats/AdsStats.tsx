import './AdsStats.scss';
import ProgressBar from '@ramonak/react-progress-bar';

const AdsStats = ({ allow }: any) => {
  return (
    <div>
      <div className="ads-stats-root">
        <div className="ads-stats-header">
          <p className='stats-h1'>Ads</p>
          <div className="ads-stats-drop">
            <p>7 days</p>
            <img src={require('../../../assets/Path 729.png')} alt="" />
          </div>
        </div>
        <div className="status-bar">
          <p>Watched</p>
          <div className="progress-bar">
            <ProgressBar
              completed={60}
              height={'10px'}
              bgColor={'#FF6933'}
              labelSize={'10px'}
              animateOnRender={true}
            />
          </div>
        </div>
        <div className="status-bar">
          <p>Skipped</p>
          <div className="progress-bar">
            <ProgressBar
              completed={22}
              height={'10px'}
              bgColor={'#FF6933'}
              labelSize={'10px'}
              animateOnRender={true}
            />
          </div>
        </div>
        <div className="status-bar">
          <p>Clicked</p>
          <div className="progress-bar">
            <ProgressBar
              completed={12}
              height={'10px'}
              bgColor={'#FF6933'}
              labelSize={'10px'}
              animateOnRender={true}
            />
          </div>
        </div>
        <div className="status-bar">
          <p>Conversion</p>
          <div className="progress-bar">
            <ProgressBar
              completed={10}
              height={'10px'}
              bgColor={'#FF6933'}
              labelSize={'10px'}
              animateOnRender={true}
            />
          </div>
        </div>
        {allow && (
          <div className="ads-stats-revenue">
            <p className="stats-header">Ads Revenue</p>
            <div className="stats-footer">
              <p className="stats-f1">Total Revenue</p>
              <p className="stats-f2">$600,254</p>
            </div>
            <div className="stats-footer">
              <p className="stats-f1">Total Ads</p>
              <p className="stats-f2">1,254</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdsStats;

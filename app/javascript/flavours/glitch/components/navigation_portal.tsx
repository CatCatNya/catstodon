import Trends from 'flavours/glitch/features/getting_started/containers/trends_container';
import { showTrends } from 'flavours/glitch/initial_state';

export const NavigationPortal: React.FC = () => (
  <div className='navigation-panel__portal'>{showTrends && <Trends />}</div>
);

import { DashboardContainer, TabContainer } from './DashboardStyles';
import { Presentation } from '../../components/Presentatios.tsx/Presentations';
import { Tab } from '../../components/Tab/Tab';

function Dashboard() {
  return (
    <DashboardContainer>
      <Presentation />
      <TabContainer>
        <Tab />
      </TabContainer>
    </DashboardContainer>
  );
}

export default Dashboard;

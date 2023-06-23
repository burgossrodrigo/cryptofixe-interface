import { PageWrapper, RowWrapper } from '../components';
import SubHeader from '../components/SubHeader'
import Header from '../components/Header';
import UserData from '../components/UserData';
import CollectCard from '../components/ColllectCard';
import WithdrawCard from '../components/WithdrawCard';
import DepositCard from '../components/DepositCard';
import MenuPaper from '../components/MenuPaper';

const Home = () => {
    return(<>
        <SubHeader />
        <Header />
        <PageWrapper>
          <UserData />
          <RowWrapper gap={2}>
            <MenuPaper url={`${process.env.PUBLIC_URL}/images/deposito.png`} title='Deposit'  />
            <MenuPaper url={`${process.env.PUBLIC_URL}/images/collect.png`} title='Collect'  />
            <MenuPaper url={`${process.env.PUBLIC_URL}/images/withdraw.png`} title='Withdraw'  />
            {/* <DepositCard />
            <CollectCard />
            <WithdrawCard /> */}
          </RowWrapper>
        </PageWrapper>
        </>)
}

export default Home





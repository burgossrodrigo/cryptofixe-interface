import { PageWrapper } from "../components"
import Header from "../components/Header"
import SubHeader from "../components/SubHeader"
import WithdrawCard from "../components/WithdrawCard"

const Deposit = () => {
    return (
        <>
            <SubHeader />
            <Header />
            <PageWrapper>
                <WithdrawCard />
            </PageWrapper>
        </>
    )
}

export default Deposit
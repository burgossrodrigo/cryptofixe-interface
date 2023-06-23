import { PageWrapper } from "../components"
import GeneralCard from "../components/DepositCard"
import Header from "../components/Header"
import SubHeader from "../components/SubHeader"

const Deposit = () => {
    return (
        <>
            <SubHeader />
            <Header />
            <PageWrapper>
                <GeneralCard />
            </PageWrapper>
        </>
    )
}

export default Deposit
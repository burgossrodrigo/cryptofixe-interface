import { Tabs, Tab } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import TabPanel from "./TabPanel";
import GeneralCard from "./GeneralCard";
import CollectCard from "./ColllectCard";
import WithdrawCard from "./WithdrawCard";

const TabWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10vh auto;
    width: 60vw;
`

const TabComponent = () => {

    const [value, setValue] = useState(0);

    const handleChange = (event: any, newValue: any) => {
        setValue(newValue);
    };

    return (
        <TabWrapper>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Stake" />
                <Tab label="Collect" />
                <Tab label="Withdraw" />
            </Tabs>
            <TabPanel value={value} index={0}>
                <GeneralCard />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <CollectCard />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <WithdrawCard />
            </TabPanel>
        </TabWrapper>
    );
};

export default TabComponent;
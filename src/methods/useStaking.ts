import { ethers } from "ethers";
import StakingArtifact from '../ABI/FixeStake.json';
import { IError, IStaker } from '../interface'

const useStaking = (provider: any, address: string) => {
  const stakingInstance = () => {
    const staking = new ethers.Contract(address, StakingArtifact.abi, provider);
    return staking;
  };

  const deposit = async (amount: number): Promise<string | IError> => {
    try {
      const staking = stakingInstance();
      const tx = await staking.deposit(amount);
      const res = await tx.wait();
      return res.hash;
    } catch (error: IError | any) {
      return error;
    }
  };

  const withdraw = async (amount: number): Promise<string | IError> => {
    try {
      const staking = stakingInstance();
      const tx = await staking.withdraw(amount);
      const res = await tx.wait();
      return res.hash;
    } catch (error: IError | any) {
      return error;
    }
  };

  const collect = async (): Promise<string | IError> => {
    try {
      const staking = stakingInstance();
      const tx = await staking.collect();
      const res = await tx.wait();
      return res.hash;
    } catch (error: IError | any) {
      return error;
    }
  };

  const distributeRewards = async (rewardAmount: number): Promise<string | IError> => {
    try {
      const staking = stakingInstance();
      const tx = await staking.distributeRewards(rewardAmount);
      const res = await tx.wait();
      return res.hash;
    } catch (error: IError | any) {
      return error;
    }
  };

  const restake = async (): Promise<string | IError> => {
    try {
      const staking = stakingInstance();
      const tx = await staking.restake();
      const res = await tx.wait();
      return res.hash;
    } catch (error: IError | any) {
      return error;
    }
  };

  const getStaker = async (userAddress: string): Promise<IStaker | IError> => {
    try {
      const staking = stakingInstance();
      const staker = await staking.getStaker(userAddress);
      return staker;
    } catch (error: IError | any) {
      return error;
    }
  };

  const isStaker = async (userAddress: string) => {
    try {
      const staking = stakingInstance();
      const isStaker = await staking.isStaker(userAddress);
      return isStaker;
    } catch (error: IError | any) {
      return error;
    }
  };

  const getReward = async (userAddress: string) => {
    try {
      const staking = stakingInstance();
      const reward = await staking.getReward(userAddress);
      return reward;
    } catch (error: IError | any) {
      return error;
    }
  };

  const getTotalStaked = async () => {
    try {
      const staking = stakingInstance();
      const totalStaked = await staking.totalStaked();
      return totalStaked;
    } catch (error: IError | any) {
      return error;
    }
  };

  const stakersCount = async () => {
    try {
      const staking = stakingInstance();
      const totalStaked = await staking.stakersCount();
      return totalStaked;
    } catch (error: IError | any) {
      return error;
    }
  };

  const getTotalRewardPaid = async () => {
    try {
      const staking = stakingInstance();
      const totalRewardPaid = await staking.totalRewardPaid();
      return totalRewardPaid;
    } catch (error: IError | any) {
      return error;
    }
  };

  return {
    deposit,
    withdraw,
    collect,
    distributeRewards,
    restake,
    getStaker,
    isStaker,
    getReward,
    getTotalStaked,
    stakersCount,
    getTotalRewardPaid,
  };
};

export default useStaking;

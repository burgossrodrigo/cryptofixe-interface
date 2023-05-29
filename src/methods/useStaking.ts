import { ethers } from "ethers";
import StakingArtifact from '../ABI/FixeStake.json';
import { IError, IStaker } from '../interface'
import { formatDecimalsTo } from "./utils";

const useStaking = (provider: any, address: string) => {
  const stakingInstance = () => {
    const staking = new ethers.Contract(address, StakingArtifact.abi, provider);
    return staking;
  };

  const signerStakingInstance = () => {
    const signer = provider.getSigner(); // Replace 'provider' with your appropriate provider instance
    const staking = new ethers.Contract(address, StakingArtifact.abi, signer);
    return staking;
  };

  const deposit = async (amount: any): Promise<string | IError> => {
    try {
      const deposit = formatDecimalsTo(amount)
      const parsedAmount = ethers.toBigInt(deposit)
      console.log(parsedAmount, 'parsedAmount')
      const staking = signerStakingInstance();
      // const gas = await staking.deposit.estimateGas(parsedAmount)
      // console.log(gas, 'gas')
      const tx = await staking.deposit(parsedAmount, {gasLimit: 300000});
      await tx.wait()
      return tx.hash
    } catch (error: IError | any) {
      return error;
    }
  };

  const withdraw = async (amount: number): Promise<string | IError> => {
    try {
      const decimalsAdjustment = formatDecimalsTo(amount)
      const withdrawAmount = BigInt(decimalsAdjustment)
      console.log(withdrawAmount, 'withdrawAmount')
      const staking = signerStakingInstance();
      const tx = await staking.withdraw(withdrawAmount, {gasLimit: 300000});
      const res = await tx.wait();
      return res.hash;
    } catch (error: IError | any) {
      return error;
    }
  };

  const collect = async (amount: number): Promise<string | IError> => {
    try {
      console.log(amount, 'collectAmount')
      const decimalsAdjustment = formatDecimalsTo(amount)
      const parsedAmount = BigInt(decimalsAdjustment)
      const staking = signerStakingInstance();
      const tx = await staking.collect(parsedAmount, {gasLimit: 300000});
      const res = await tx.wait();
      console.log(res, 'res for collect')
      return res.hash;
    } catch (error: IError | any) {
      console.log(error.message, 'for collect')
      return error;
    }
  };

  const restake = async (): Promise<string | IError> => {
    try {
      const staking = signerStakingInstance();
      const tx = await staking.restake({gasLimit: 300000});
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

  const getStaker = async (userAddress: string): Promise<IStaker | IError> => {
    try {
      const staking = stakingInstance();
      const staker = await staking.getStaker(userAddress);
      console.log(staker, 'na func')
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

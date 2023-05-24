import { ethers } from "ethers";
import FixeToken from '../ABI/FixeToken.json';
import { IError } from '../interface'

const useFixe = (provider: any, address: string) => {
  const stakingInstance = () => {
    const staking = new ethers.Contract(address, FixeToken.abi, provider);
    return staking;
  };

  const allowance = async (owner: string, spender: string): Promise<number | IError> => {
    try {
      const staking = stakingInstance();
      const allowance = await staking.allowance(owner, spender);
      return allowance;
    } catch (error: IError | any) {
      return error;
    }
  };

  const approve = async (spender: string, amount: number): Promise<boolean | IError> => {
    try {
      const staking = stakingInstance();
      const tx = await staking.approve(spender, amount);
      const res = await tx.wait();
      return res.hash;
    } catch (error: IError | any) {
      return error;
    }
  };

  const balanceOf = async (account: string): Promise<number | IError> => {
    try {
      const staking = stakingInstance();
      const balance = await staking.balanceOf(account);
      return balance;
    } catch (error: IError | any) {
      return error;
    }
  };

  const decreaseAllowance = async (spender: string, subtractedValue: number): Promise<boolean | IError> => {
    try {
      const staking = stakingInstance();
      const tx = await staking.decreaseAllowance(spender, subtractedValue);
      const res = await tx.wait();
      return res.hash;
    } catch (error: IError | any) {
      return error;
    }
  };

  const increaseAllowance = async (spender: string, addedValue: number): Promise<boolean | IError> => {
    try {
      const staking = stakingInstance();
      const tx = await staking.increaseAllowance(spender, addedValue);
      const res = await tx.wait();
      return res.hash;
    } catch (error: IError | any) {
      return error;
    }
  };

  const name = async (): Promise<string | IError> => {
    try {
      const staking = stakingInstance();
      const name = await staking.name();
      return name;
    } catch (error: IError | any) {
      return error;
    }
  };

  const symbol = async (): Promise<string | IError> => {
    try {
      const staking = stakingInstance();
      const symbol = await staking.symbol();
      return symbol;
    } catch (error: IError | any) {
      return error;
    }
  };

  const totalSupply = async (): Promise<number | IError> => {
    try {
      const staking = stakingInstance();
      const totalSupply = await staking.totalSupply();
      return totalSupply;
    } catch (error: IError | any) {
      return error;
    }
  };

  const transfer = async (to: string, amount: number): Promise<boolean | IError> => {
    try {
      const staking = stakingInstance();
      const tx = await staking.transfer(to, amount);
      const res = await tx.wait();
      return res.hash;
    } catch (error: IError | any) {
      return error;
    }
  };

  const transferFrom = async (from: string, to: string, amount: number): Promise<boolean | IError> => {
    try {
      const staking = stakingInstance();
      const tx = await staking.transferFrom(from, to, amount);
      const res = await tx.wait();
      return res.hash;
    } catch (error: IError | any) {
      return error;
    }
  };

  return {
    allowance,
    approve,
    balanceOf,
    decreaseAllowance,
    increaseAllowance,
    name,
    symbol,
    totalSupply,
    transfer,
    transferFrom,
  };
};

export default useFixe;

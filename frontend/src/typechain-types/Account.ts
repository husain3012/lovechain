/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export type AccountInfoStruct = {
  user_id: PromiseOrValue<string>;
  name: PromiseOrValue<string>;
  genderID: PromiseOrValue<BigNumberish>;
  interestID: PromiseOrValue<BigNumberish>;
  age: PromiseOrValue<BigNumberish>;
  bio: PromiseOrValue<string>;
  locationID: PromiseOrValue<BigNumberish>;
};

export type AccountInfoStructOutput = [
  string,
  string,
  number,
  number,
  BigNumber,
  string,
  BigNumber
] & {
  user_id: string;
  name: string;
  genderID: number;
  interestID: number;
  age: BigNumber;
  bio: string;
  locationID: BigNumber;
};

export interface AccountInterface extends utils.Interface {
  functions: {
    "addMatch(address)": FunctionFragment;
    "getSelfInfo()": FunctionFragment;
    "getUserLikes()": FunctionFragment;
    "getUserMatches()": FunctionFragment;
    "isInLikes(address)": FunctionFragment;
    "likeUser(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addMatch"
      | "getSelfInfo"
      | "getUserLikes"
      | "getUserMatches"
      | "isInLikes"
      | "likeUser"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addMatch",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getSelfInfo",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getUserLikes",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getUserMatches",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isInLikes",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "likeUser",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "addMatch", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getSelfInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserLikes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserMatches",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isInLikes", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "likeUser", data: BytesLike): Result;

  events: {};
}

export interface Account extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AccountInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addMatch(
      userAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getSelfInfo(overrides?: CallOverrides): Promise<[AccountInfoStructOutput]>;

    getUserLikes(overrides?: CallOverrides): Promise<[string[]]>;

    getUserMatches(overrides?: CallOverrides): Promise<[string[]]>;

    isInLikes(
      userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    likeUser(
      likedUserAccountAddrs: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  addMatch(
    userAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getSelfInfo(overrides?: CallOverrides): Promise<AccountInfoStructOutput>;

  getUserLikes(overrides?: CallOverrides): Promise<string[]>;

  getUserMatches(overrides?: CallOverrides): Promise<string[]>;

  isInLikes(
    userAddress: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  likeUser(
    likedUserAccountAddrs: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addMatch(
      userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    getSelfInfo(overrides?: CallOverrides): Promise<AccountInfoStructOutput>;

    getUserLikes(overrides?: CallOverrides): Promise<string[]>;

    getUserMatches(overrides?: CallOverrides): Promise<string[]>;

    isInLikes(
      userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    likeUser(
      likedUserAccountAddrs: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    addMatch(
      userAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getSelfInfo(overrides?: CallOverrides): Promise<BigNumber>;

    getUserLikes(overrides?: CallOverrides): Promise<BigNumber>;

    getUserMatches(overrides?: CallOverrides): Promise<BigNumber>;

    isInLikes(
      userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    likeUser(
      likedUserAccountAddrs: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addMatch(
      userAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getSelfInfo(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getUserLikes(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getUserMatches(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isInLikes(
      userAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    likeUser(
      likedUserAccountAddrs: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}

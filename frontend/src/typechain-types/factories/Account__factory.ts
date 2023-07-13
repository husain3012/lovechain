/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Account, AccountInterface } from "../Account";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "u_id",
        type: "address",
      },
      {
        internalType: "string",
        name: "u_name",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "u_genderID",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "u_age",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "u_interestID",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "u_bio",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "u_locationID",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "addMatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getSelfInfo",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "user_id",
            type: "address",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "uint8",
            name: "genderID",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "interestID",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "age",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "bio",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "locationID",
            type: "uint256",
          },
        ],
        internalType: "struct AccountInfo",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getUserLikes",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getUserMatches",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "isInLikes",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "likedUserAccountAddrs",
        type: "address",
      },
    ],
    name: "likeUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200145238038062001452833981810160405281019062000037919062000372565b866000800160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555085600060010190816200008e9190620006a4565b50836000600301819055508160006004019081620000ad9190620006a4565b508060006005018190555084600060020160006101000a81548160ff021916908360ff16021790555082600060020160016101000a81548160ff021916908360ff160217905550505050505050506200078b565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620001428262000115565b9050919050565b620001548162000135565b81146200016057600080fd5b50565b600081519050620001748162000149565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620001cf8262000184565b810181811067ffffffffffffffff82111715620001f157620001f062000195565b5b80604052505050565b60006200020662000101565b9050620002148282620001c4565b919050565b600067ffffffffffffffff82111562000237576200023662000195565b5b620002428262000184565b9050602081019050919050565b60005b838110156200026f57808201518184015260208101905062000252565b60008484015250505050565b6000620002926200028c8462000219565b620001fa565b905082815260208101848484011115620002b157620002b06200017f565b5b620002be8482856200024f565b509392505050565b600082601f830112620002de57620002dd6200017a565b5b8151620002f08482602086016200027b565b91505092915050565b600060ff82169050919050565b6200031181620002f9565b81146200031d57600080fd5b50565b600081519050620003318162000306565b92915050565b6000819050919050565b6200034c8162000337565b81146200035857600080fd5b50565b6000815190506200036c8162000341565b92915050565b600080600080600080600060e0888a0312156200039457620003936200010b565b5b6000620003a48a828b0162000163565b975050602088015167ffffffffffffffff811115620003c857620003c762000110565b5b620003d68a828b01620002c6565b9650506040620003e98a828b0162000320565b9550506060620003fc8a828b016200035b565b94505060806200040f8a828b0162000320565b93505060a088015167ffffffffffffffff81111562000433576200043262000110565b5b620004418a828b01620002c6565b92505060c0620004548a828b016200035b565b91505092959891949750929550565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620004b657607f821691505b602082108103620004cc57620004cb6200046e565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620005367fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82620004f7565b620005428683620004f7565b95508019841693508086168417925050509392505050565b6000819050919050565b6000620005856200057f620005798462000337565b6200055a565b62000337565b9050919050565b6000819050919050565b620005a18362000564565b620005b9620005b0826200058c565b84845462000504565b825550505050565b600090565b620005d0620005c1565b620005dd81848462000596565b505050565b5b818110156200060557620005f9600082620005c6565b600181019050620005e3565b5050565b601f82111562000654576200061e81620004d2565b6200062984620004e7565b8101602085101562000639578190505b620006516200064885620004e7565b830182620005e2565b50505b505050565b600082821c905092915050565b6000620006796000198460080262000659565b1980831691505092915050565b600062000694838362000666565b9150826002028217905092915050565b620006af8262000463565b67ffffffffffffffff811115620006cb57620006ca62000195565b5b620006d782546200049d565b620006e482828562000609565b600060209050601f8311600181146200071c576000841562000707578287015190505b62000713858262000686565b86555062000783565b601f1984166200072c86620004d2565b60005b8281101562000756578489015182556001820191506020850194506020810190506200072f565b8683101562000776578489015162000772601f89168262000666565b8355505b6001600288020188555050505b505050505050565b610cb7806200079b6000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80637e8e7733146100675780639c65609b14610085578063a3c8f422146100a3578063df6c5b2c146100c1578063f990d145146100dd578063fd02fa671461010d575b600080fd5b61006f610129565b60405161007c919061099a565b60405180910390f35b61008d61030b565b60405161009a9190610a6b565b60405180910390f35b6100ab61039c565b6040516100b89190610a6b565b60405180910390f35b6100db60048036038101906100d69190610abe565b61042d565b005b6100f760048036038101906100f29190610abe565b61067b565b6040516101049190610b06565b60405180910390f35b61012760048036038101906101229190610abe565b6106d4565b005b610131610798565b60006040518060e00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820180546101a490610b50565b80601f01602080910402602001604051908101604052809291908181526020018280546101d090610b50565b801561021d5780601f106101f25761010080835404028352916020019161021d565b820191906000526020600020905b81548152906001019060200180831161020057829003601f168201915b505050505081526020016002820160009054906101000a900460ff1660ff1660ff1681526020016002820160019054906101000a900460ff1660ff1660ff1681526020016003820154815260200160048201805461027a90610b50565b80601f01602080910402602001604051908101604052809291908181526020018280546102a690610b50565b80156102f35780601f106102c8576101008083540402835291602001916102f3565b820191906000526020600020905b8154815290600101906020018083116102d657829003601f168201915b50505050508152602001600582015481525050905090565b6060600660000180548060200260200160405190810160405280929190818152602001828054801561039257602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610348575b5050505050905090565b6060600860000180548060200260200160405190810160405280929190818152602001828054801561042357602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116103d9575b5050505050905090565b600660010160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16156104bd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104b490610bde565b60405180910390fd5b6006600001819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600660010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060008173ffffffffffffffffffffffffffffffffffffffff1663f990d145306040518263ffffffff1660e01b81526004016105b99190610c0d565b602060405180830381865afa1580156105d6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105fa9190610c54565b905080156106775761060b826106d4565b8173ffffffffffffffffffffffffffffffffffffffff1663fd02fa67306040518263ffffffff1660e01b81526004016106449190610c0d565b600060405180830381600087803b15801561065e57600080fd5b505af1158015610672573d6000803e3d6000fd5b505050505b5050565b6000600660010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b6008600001819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600860010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b6040518060e00160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160608152602001600060ff168152602001600060ff1681526020016000815260200160608152602001600081525090565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061081c826107f1565b9050919050565b61082c81610811565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561086c578082015181840152602081019050610851565b60008484015250505050565b6000601f19601f8301169050919050565b600061089482610832565b61089e818561083d565b93506108ae81856020860161084e565b6108b781610878565b840191505092915050565b600060ff82169050919050565b6108d8816108c2565b82525050565b6000819050919050565b6108f1816108de565b82525050565b600060e08301600083015161090f6000860182610823565b50602083015184820360208601526109278282610889565b915050604083015161093c60408601826108cf565b50606083015161094f60608601826108cf565b50608083015161096260808601826108e8565b5060a083015184820360a086015261097a8282610889565b91505060c083015161098f60c08601826108e8565b508091505092915050565b600060208201905081810360008301526109b481846108f7565b905092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60006109f48383610823565b60208301905092915050565b6000602082019050919050565b6000610a18826109bc565b610a2281856109c7565b9350610a2d836109d8565b8060005b83811015610a5e578151610a4588826109e8565b9750610a5083610a00565b925050600181019050610a31565b5085935050505092915050565b60006020820190508181036000830152610a858184610a0d565b905092915050565b600080fd5b610a9b81610811565b8114610aa657600080fd5b50565b600081359050610ab881610a92565b92915050565b600060208284031215610ad457610ad3610a8d565b5b6000610ae284828501610aa9565b91505092915050565b60008115159050919050565b610b0081610aeb565b82525050565b6000602082019050610b1b6000830184610af7565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610b6857607f821691505b602082108103610b7b57610b7a610b21565b5b50919050565b600082825260208201905092915050565b7f5573657220616c7265616479206c696b65640000000000000000000000000000600082015250565b6000610bc8601283610b81565b9150610bd382610b92565b602082019050919050565b60006020820190508181036000830152610bf781610bbb565b9050919050565b610c0781610811565b82525050565b6000602082019050610c226000830184610bfe565b92915050565b610c3181610aeb565b8114610c3c57600080fd5b50565b600081519050610c4e81610c28565b92915050565b600060208284031215610c6a57610c69610a8d565b5b6000610c7884828501610c3f565b9150509291505056fea2646970667358221220b5c6906574752b895850e0a945c2aeb74264f1acba7072dcb63962668055a61064736f6c63430008120033";

type AccountConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AccountConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Account__factory extends ContractFactory {
  constructor(...args: AccountConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    u_id: PromiseOrValue<string>,
    u_name: PromiseOrValue<string>,
    u_genderID: PromiseOrValue<BigNumberish>,
    u_age: PromiseOrValue<BigNumberish>,
    u_interestID: PromiseOrValue<BigNumberish>,
    u_bio: PromiseOrValue<string>,
    u_locationID: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Account> {
    return super.deploy(
      u_id,
      u_name,
      u_genderID,
      u_age,
      u_interestID,
      u_bio,
      u_locationID,
      overrides || {}
    ) as Promise<Account>;
  }
  override getDeployTransaction(
    u_id: PromiseOrValue<string>,
    u_name: PromiseOrValue<string>,
    u_genderID: PromiseOrValue<BigNumberish>,
    u_age: PromiseOrValue<BigNumberish>,
    u_interestID: PromiseOrValue<BigNumberish>,
    u_bio: PromiseOrValue<string>,
    u_locationID: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      u_id,
      u_name,
      u_genderID,
      u_age,
      u_interestID,
      u_bio,
      u_locationID,
      overrides || {}
    );
  }
  override attach(address: string): Account {
    return super.attach(address) as Account;
  }
  override connect(signer: Signer): Account__factory {
    return super.connect(signer) as Account__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AccountInterface {
    return new utils.Interface(_abi) as AccountInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Account {
    return new Contract(address, _abi, signerOrProvider) as Account;
  }
}
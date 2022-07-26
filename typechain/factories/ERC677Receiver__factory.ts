/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  ERC677Receiver,
  ERC677ReceiverInterface,
} from "../ERC677Receiver";

const _abi = [
  {
    constant: false,
    inputs: [
      {
        name: "_sender",
        type: "address",
      },
      {
        name: "_value",
        type: "uint256",
      },
      {
        name: "_data",
        type: "bytes",
      },
    ],
    name: "onTokenTransfer",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ERC677Receiver__factory {
  static readonly abi = _abi;
  static createInterface(): ERC677ReceiverInterface {
    return new utils.Interface(_abi) as ERC677ReceiverInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC677Receiver {
    return new Contract(address, _abi, signerOrProvider) as ERC677Receiver;
  }
}

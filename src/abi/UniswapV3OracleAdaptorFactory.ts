/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { UniswapV3OracleAdaptor } from "./UniswapV3OracleAdaptor";

export class UniswapV3OracleAdaptorFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UniswapV3OracleAdaptor {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as UniswapV3OracleAdaptor;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "factory_",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "path_",
        type: "address[]",
      },
      {
        internalType: "uint24[]",
        name: "fees_",
        type: "uint24[]",
      },
      {
        internalType: "uint32",
        name: "shortPeriod_",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "longPeriod_",
        type: "uint32",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "collateral",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "dumpPath",
    outputs: [
      {
        components: [
          {
            internalType: "address[]",
            name: "path",
            type: "address[]",
          },
          {
            internalType: "string[]",
            name: "symbols",
            type: "string[]",
          },
          {
            internalType: "uint24[]",
            name: "fees",
            type: "uint24[]",
          },
          {
            internalType: "uint32",
            name: "shortPeriod",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "longPeriod",
            type: "uint32",
          },
        ],
        internalType: "struct UniswapV3OracleAdaptor.DumpData",
        name: "data",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isMarketClosed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "isTerminated",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "priceTWAPLong",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "priceTWAPShort",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "source",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "underlyingAsset",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
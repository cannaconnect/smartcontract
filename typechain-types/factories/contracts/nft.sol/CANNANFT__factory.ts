/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  CANNANFT,
  CANNANFTInterface,
} from "../../../contracts/NFT.sol/CANNANFT";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "baseURI",
        type: "string",
      },
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC721IncorrectOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ERC721InsufficientApproval",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC721InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "ERC721InvalidOperator",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC721InvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC721InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC721InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ERC721NonexistentToken",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_fromTokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_toTokenId",
        type: "uint256",
      },
    ],
    name: "BatchMetadataUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "MetadataUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "MAX_NFT",
    outputs: [
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
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalIds",
    outputs: [
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
        name: "_toAddress",
        type: "address",
      },
    ],
    name: "mintNFT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
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
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_minter",
        type: "address",
      },
    ],
    name: "setMintRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    inputs: [],
    name: "symbol",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523462000544576200173e803803806200001d816200057e565b928339810190604081830312620005445780516001600160401b0391908281116200054457810192601f9080828601121562000544578451928484116200037257602093601f199662000076868987850116016200057e565b9382855286838301011162000544579085929160005b82811062000549575050600090840183015201516001600160a01b039390848116908190036200054457620000c06200055e565b94601786527f43616e6e61436f6e6e656374204d656d6265727368697000000000000000000083870152620000f46200055e565b600881526710d053939053919560c21b84820152865188811162000372576000546001988982811c9216801562000539575b8783101462000351578189849311620004e3575b5086908983116001146200047e5760009262000472575b5050600019600383901b1c191690881b176000555b80519088821162000372578754908882811c9216801562000467575b868310146200035157818884931162000411575b508590888311600114620003ad57600092620003a1575b5050600019600383901b1c191690871b1786555b81156200038857600780546001600160a01b0319811684179091558291167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a3611388600955600052600b815260406000208460ff1982541617905581519485116200037257600a548481811c9116801562000367575b82821014620003515783811162000305575b50809285116001146200029a5750839450908392916000946200028e575b50501b916000199060031b1c191617600a555b6040516111999081620005a58239f35b0151925038806200026b565b929484908116600a60005284600020946000905b88838310620002ea5750505010620002d0575b505050811b01600a556200027e565b015160001960f88460031b161c19169055388080620002c1565b858701518855909601959485019487935090810190620002ae565b600a600052816000208480880160051c82019284891062000347575b0160051c019085905b8281106200033a5750506200024d565b600081550185906200032a565b9250819262000321565b634e487b7160e01b600052602260045260246000fd5b90607f16906200023b565b634e487b7160e01b600052604160045260246000fd5b604051631e4fbdf760e01b815260006004820152602490fd5b015190503880620001ad565b908b8a94169184600052876000209260005b89828210620003fa5750508411620003e0575b505050811b018655620001c1565b015160001960f88460031b161c19169055388080620003d2565b8385015186558d97909501949384019301620003bf565b90915088600052856000208880850160051c8201928886106200045d575b918b91869594930160051c01915b8281106200044d57505062000196565b600081558594508b91016200043d565b925081926200042f565b91607f169162000182565b01519050388062000151565b908c8b94169160008052886000209260005b8a828210620004cc5750508411620004b2575b505050811b0160005562000166565b015160001960f88460031b161c19169055388080620004a3565b8385015186558e9790950194938401930162000490565b90915060008052866000208980850160051c8201928986106200052f575b918c91869594930160051c01915b8281106200051f5750506200013a565b600081558594508c91016200050f565b9250819262000501565b91607f169162000126565b600080fd5b8181018501518682018601528794016200008c565b60408051919082016001600160401b038111838210176200037257604052565b6040519190601f01601f191682016001600160401b03811183821017620003725760405256fe6080604081815260048036101561001557600080fd5b600092833560e01c90816301ffc9a714610c345750806306fdde0314610b8c578063081812fc14610b51578063095ea7b314610a7557806323b872dd14610a5d57806342842e0e14610a34578063530dd079146109e757806354ba0f271461063c5780636352211e1461060b5780636fdaddf1146105ec57806370a0823114610597578063715018a6146105375780638da5cb5b1461050e57806395d89b411461042b578063a22cb46514610380578063b88d4fde146102f7578063c87b56dd14610202578063e2b02047146101e3578063e985e9c5146101915763f2fde38b146100ff57600080fd5b3461018d57602036600319011261018d57610118610cfa565b90610121610dd0565b6001600160a01b03918216928315610177575050600754826bffffffffffffffffffffffff60a01b821617600755167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08380a380f35b51631e4fbdf760e01b8152908101849052602490fd5b8280fd5b5050346101df57806003193601126101df5760ff816020936101b1610cfa565b6101b9610d15565b6001600160a01b0391821683526005875283832091168252855220549151911615158152f35b5080fd5b5050346101df57816003193601126101df576020906008549051908152f35b50903461018d57602091826003193601126102f3573561022181611128565b5083526006825280832092815180948290805461023d81610dfc565b918285526001918883821691826000146102cc57505060011461028e575b50505061028a93929161026f910386610d92565b815161027a81610d60565b5251928284938452830190610cba565b0390f35b8552868520879350859291905b8284106102b4575050508201018161026f61028a61025b565b8054848b01860152899550889490930192810161029b565b60ff19168782015293151560051b8601909301935084925061026f915061028a905061025b565b8380fd5b50903461018d57608036600319011261018d57610312610cfa565b61031a610d15565b846064359467ffffffffffffffff86116101df57366023870112156101df578501359461035261034987610db4565b95519586610d92565b85855236602487830101116101df578561037d96602460209301838801378501015260443591610fd5565b80f35b50903461018d578060031936011261018d5761039a610cfa565b9060243580151592838203610427576001600160a01b031693841561041057506103e39033865260056020528286208587526020528286209060ff801983541691151516179055565b519081527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3160203392a380f35b8251630b61174360e31b8152908101859052602490fd5b8580fd5b5050346101df57816003193601126101df5780519082600180549161044f83610dfc565b808652928281169081156104e6575060011461048a575b5050506104788261028a940383610d92565b51918291602083526020830190610cba565b94508085527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf65b8286106104ce5750505061047882602061028a9582010194610466565b805460208787018101919091529095019481016104b1565b61028a97508693506020925061047894915060ff191682840152151560051b82010194610466565b5050346101df57816003193601126101df5760075490516001600160a01b039091168152602090f35b8334610594578060031936011261059457610550610dd0565b600780546001600160a01b0319811690915581906001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a380f35b80fd5b509134610594576020366003190112610594576001600160a01b036105ba610cfa565b169283156105d75750806020938392526003845220549051908152f35b91516322718ad960e21b815291820152602490fd5b5050346101df57816003193601126101df576020906009549051908152f35b509134610594576020366003190112610594575061062b60209235611128565b90516001600160a01b039091168152f35b50903461018d576020928360031936011261059457610659610cfa565b92338252600b855260ff8383205416156109ad5760085490600954821015610977576000198281146109645760019283016008819055956001600160a01b0390811690811561094d578786526002895286862054168015159188918361091c575b81885260038b5288882080548801905582885260028b5288882080546001600160a01b031916831790557fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8880a461090557845193878582600a5461071e81610dfc565b808452908881169081156108e7575060011461088d575b5061074292500386610d92565b868152600688528581209480519367ffffffffffffffff851161087a575061076a8654610dfc565b601f8111610834575b508891601f85116001146107d457918495918593956107c9575b50501b9260031b1c19161790555b7ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce7838251848152a151908152f35b01519350388061078d565b92919084601f1981168886528b8620955b8c8983831061081d5750505010610805575b50505050811b01905561079b565b01519060f88460031b161c19169055388080806107f7565b8686015189559097019694850194889350016107e5565b868352898320601f860160051c8101918b8710610870575b601f0160051c019086905b828110610865575050610773565b848155018690610857565b909150819061084c565b634e487b7160e01b835260419052602482fd5b600a8552849150877fc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a85b8284106108d05750505091610742928201018a92610735565b80548b85018701528a9450928501928991016108b7565b60ff191684860152508b9390151560051b8301019050610742610735565b84516339e3563760e11b8152808301859052602490fd5b600083815260046020526040902080546001600160a01b031916905580885260038b528888208581540190556106ba565b8651633250574960e11b8152808501879052602490fd5b634e487b7160e01b845260118252602484fd5b835162461bcd60e51b8152908101869052601060248201526f4d6178696d756d20537570706c69657360801b6044820152606490fd5b825162461bcd60e51b8152908101859052601460248201527313db9b1e48135a5b9d195c8818d85b881b5a5b9d60621b6044820152606490fd5b5050346101df5760203660031901126101df5761037d90610a06610cfa565b610a0e610dd0565b6001600160a01b03168352600b6020528220805460ff818116151660ff19909116179055565b5050346101df5761037d90610a4836610d2b565b91925192610a5584610d60565b858452610fd5565b83346105945761037d610a6f36610d2b565b91610e36565b50903461018d578060031936011261018d57610a8f610cfa565b91602435610a9c81611128565b33151580610b3e575b80610b15575b610aff576001600160a01b039485169482918691167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258880a48452602052822080546001600160a01b031916909117905580f35b835163a9fbf51f60e01b81523381850152602490fd5b506001600160a01b03811686526005602090815284872033885290528386205460ff1615610aab565b506001600160a01b038116331415610aa5565b503461018d57602036600319011261018d57918260209335610b7281611128565b50825283528190205490516001600160a01b039091168152f35b5050346101df57816003193601126101df57805190828054610bad81610dfc565b808552916001918083169081156104e65750600114610bd8575050506104788261028a940383610d92565b80809650527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5635b828610610c1c5750505061047882602061028a9582010194610466565b80546020878701810191909152909501948101610bff565b9250503461018d57602036600319011261018d573563ffffffff60e01b811680910361018d5760209250632483248360e11b8114908115610c77575b5015158152f35b6380ac58cd60e01b811491508115610ca9575b8115610c98575b5038610c70565b6301ffc9a760e01b14905038610c91565b635b5e139f60e01b81149150610c8a565b919082519283825260005b848110610ce6575050826000602080949584010152601f8019910116010190565b602081830181015184830182015201610cc5565b600435906001600160a01b0382168203610d1057565b600080fd5b602435906001600160a01b0382168203610d1057565b6060906003190112610d10576001600160a01b03906004358281168103610d1057916024359081168103610d10579060443590565b6020810190811067ffffffffffffffff821117610d7c57604052565b634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff821117610d7c57604052565b67ffffffffffffffff8111610d7c57601f01601f191660200190565b6007546001600160a01b03163303610de457565b60405163118cdaa760e01b8152336004820152602490fd5b90600182811c92168015610e2c575b6020831014610e1657565b634e487b7160e01b600052602260045260246000fd5b91607f1691610e0b565b6001600160a01b039182169290918315610fbc57600092828452826020956002875260409684888820541696879133151580610f26575b509060027fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9284610ef3575b858352600381528b8320805460010190558683525289812080546001600160a01b0319168517905580a41692838303610ed25750505050565b6064945051926364283d7b60e01b8452600484015260248301526044820152fd5b600087815260046020526040902080546001600160a01b0319169055848352600381528b83208054600019019055610e99565b91939450915080610f7b575b15610f4257859291879138610e6d565b878688610f5f576024915190637e27328960e01b82526004820152fd5b604491519063177e802f60e01b82523360048301526024820152fd5b503387148015610fa0575b80610f325750858252600481523385898420541614610f32565b5086825260058152878220338352815260ff8883205416610f86565b604051633250574960e11b815260006004820152602490fd5b610fe0838383610e36565b813b610fed575b50505050565b604051630a85bd0160e11b8082523360048301526001600160a01b0392831660248301526044820194909452608060648201526020959290911693909290839061103b906084830190610cba565b039285816000958187895af18491816110e4575b506110af575050503d6000146110a7573d61106981610db4565b906110776040519283610d92565b81528091843d92013e5b805192836110a257604051633250574960e11b815260048101849052602490fd5b019050fd5b506060611081565b919450915063ffffffff60e01b16036110cc575038808080610fe7565b60249060405190633250574960e11b82526004820152fd5b9091508681813d8311611121575b6110fc8183610d92565b8101031261111d57516001600160e01b03198116810361111d57903861104f565b8480fd5b503d6110f2565b6000818152600260205260409020546001600160a01b031690811561114b575090565b60249060405190637e27328960e01b82526004820152fdfea2646970667358221220dc9b6db1ba2c6b23fc1239acba059a4ad7f341b4524d07731a63760e3557c7a264736f6c63430008140033";

type CANNANFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CANNANFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CANNANFT__factory extends ContractFactory {
  constructor(...args: CANNANFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    baseURI: string,
    _owner: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(baseURI, _owner, overrides || {});
  }
  override deploy(
    baseURI: string,
    _owner: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(baseURI, _owner, overrides || {}) as Promise<
      CANNANFT & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): CANNANFT__factory {
    return super.connect(runner) as CANNANFT__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CANNANFTInterface {
    return new Interface(_abi) as CANNANFTInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): CANNANFT {
    return new Contract(address, _abi, runner) as unknown as CANNANFT;
  }
}
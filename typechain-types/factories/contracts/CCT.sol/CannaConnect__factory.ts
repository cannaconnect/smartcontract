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
  CannaConnect,
  CannaConnectInterface,
} from "../../../contracts/CCT.sol/CannaConnect";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientAllowance",
    type: "error",
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
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientBalance",
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
    name: "ERC20InvalidApprover",
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
    name: "ERC20InvalidReceiver",
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
    name: "ERC20InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSpender",
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
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
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
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
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
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
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
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "totalSupply",
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
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
  "0x60406080815234620004045762000cbf803803806200001e8162000409565b9283398101606082820312620004045781516001600160401b039290838111620004045782620000509183016200042f565b9260209283830151828111620004045786916200006f9185016200042f565b9201516001600160a01b0380821695909290918690036200040457815181811162000304576003908154906001948583811c93168015620003f9575b89841014620003e3578190601f938481116200038d575b50899084831160011462000326576000926200031a575b505060001982851b1c191690851b1782555b8551928311620003045760049586548581811c91168015620002f9575b89821014620002e45782811162000299575b50879184116001146200022e5793839491849260009562000222575b50501b92600019911b1c19161782555b83156200020b57600580546001600160a01b0319811686179091558491167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a36b033b2e3c9fd0803ce8000000908160065560025490828201809211620001f6575060025560008381528083528481208054830190558451918252917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a35161081d9081620004a28239f35b601190634e487b7160e01b6000525260246000fd5b8451631e4fbdf760e01b8152600081840152602490fd5b01519350388062000136565b9190601f198416928760005284896000209460005b8b8983831062000281575050501062000266575b50505050811b01825562000146565b01519060f884600019921b161c191690553880808062000257565b86860151895590970196948501948893500162000243565b87600052886000208380870160051c8201928b8810620002da575b0160051c019086905b828110620002cd5750506200011a565b60008155018690620002bd565b92508192620002b4565b602288634e487b7160e01b6000525260246000fd5b90607f169062000108565b634e487b7160e01b600052604160045260246000fd5b015190503880620000d9565b90879350601f19831691866000528b6000209260005b8d8282106200037657505084116200035d575b505050811b018255620000eb565b015160001983871b60f8161c191690553880806200034f565b8385015186558b979095019493840193016200033c565b90915084600052896000208480850160051c8201928c8610620003d9575b918991869594930160051c01915b828110620003c9575050620000c2565b60008155859450899101620003b9565b92508192620003ab565b634e487b7160e01b600052602260045260246000fd5b92607f1692620000ab565b600080fd5b6040519190601f01601f191682016001600160401b038111838210176200030457604052565b919080601f84011215620004045782516001600160401b038111620003045760209062000465601f8201601f1916830162000409565b92818452828287010111620004045760005b8181106200048d57508260009394955001015290565b85810183015184820184015282016200047756fe6080604081815260048036101561001557600080fd5b600092833560e01c90816306fdde031461056e57508063095ea7b3146104c557806318160ddd146104a657806323b872dd146103b3578063313ce5671461039757806370a0823114610360578063715018a6146103005780638da5cb5b146102d757806395d89b41146101b7578063a9059cbb14610186578063dd62ed3e146101395763f2fde38b146100a757600080fd5b34610135576020366003190112610135576100c06106ac565b906100c96106dd565b6001600160a01b0391821692831561011f575050600554826bffffffffffffffffffffffff60a01b821617600555167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08380a380f35b51631e4fbdf760e01b8152908101849052602490fd5b8280fd5b505034610182578060031936011261018257806020926101576106ac565b61015f6106c7565b6001600160a01b0391821683526001865283832091168252845220549051908152f35b5080fd5b5050346101825780600319360112610182576020906101b06101a66106ac565b6024359033610709565b5160018152f35b50919034610182578160031936011261018257805190828454600181811c908083169283156102cd575b60209384841081146102ba5783885290811561029e5750600114610249575b505050829003601f01601f191682019267ffffffffffffffff8411838510176102365750829182610232925282610663565b0390f35b634e487b7160e01b815260418552602490fd5b8787529192508591837f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b5b83851061028a5750505050830101388080610200565b805488860183015293019284908201610274565b60ff1916878501525050151560051b8401019050388080610200565b634e487b7160e01b895260228a52602489fd5b91607f16916101e1565b50503461018257816003193601126101825760055490516001600160a01b039091168152602090f35b833461035d578060031936011261035d576103196106dd565b600580546001600160a01b0319811690915581906001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a380f35b80fd5b5050346101825760203660031901126101825760209181906001600160a01b036103886106ac565b16815280845220549051908152f35b5050346101825781600319360112610182576020905160128152f35b50823461035d57606036600319011261035d576103ce6106ac565b6103d66106c7565b916044359360018060a01b038316808352600160205286832033845260205286832054916000198303610412575b6020886101b0898989610709565b86831061047a57811561046357331561044c575082526001602090815286832033845281529186902090859003905582906101b087610404565b8751634a1406b160e11b8152908101849052602490fd5b875163e602df0560e01b8152908101849052602490fd5b8751637dc7a0d960e11b8152339181019182526020820193909352604081018790528291506060010390fd5b5050346101825781600319360112610182576020906002549051908152f35b50346101355781600319360112610135576104de6106ac565b602435903315610557576001600160a01b031691821561054057508083602095338152600187528181208582528752205582519081527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925843392a35160018152f35b8351634a1406b160e11b8152908101859052602490fd5b835163e602df0560e01b8152808401869052602490fd5b849150833461013557826003193601126101355782600354600181811c90808316928315610659575b60209384841081146102ba5783885290811561063d57506001146105e757505050829003601f01601f191682019267ffffffffffffffff8411838510176102365750829182610232925282610663565b600387529192508591837fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b5b8385106106295750505050830101858080610200565b805488860183015293019284908201610613565b60ff1916878501525050151560051b8401019050858080610200565b91607f1691610597565b6020808252825181830181905290939260005b82811061069857505060409293506000838284010152601f8019910116010190565b818101860151848201604001528501610676565b600435906001600160a01b03821682036106c257565b600080fd5b602435906001600160a01b03821682036106c257565b6005546001600160a01b031633036106f157565b60405163118cdaa760e01b8152336004820152602490fd5b916001600160a01b038084169283156107ce57169283156107b55760009083825281602052604082205490838210610783575091604082827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef958760209652828652038282205586815220818154019055604051908152a3565b60405163391434e360e21b81526001600160a01b03919091166004820152602481019190915260448101839052606490fd5b60405163ec442f0560e01b815260006004820152602490fd5b604051634b637e8f60e11b815260006004820152602490fdfea26469706673582212207a0578bc09c4a135b58e8a90c31aa32f10817785d36335def3c8996b20631a6b64736f6c63430008140033";

type CannaConnectConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CannaConnectConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CannaConnect__factory extends ContractFactory {
  constructor(...args: CannaConnectConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _name: string,
    _symbol: string,
    _owner: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_name, _symbol, _owner, overrides || {});
  }
  override deploy(
    _name: string,
    _symbol: string,
    _owner: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_name, _symbol, _owner, overrides || {}) as Promise<
      CannaConnect & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): CannaConnect__factory {
    return super.connect(runner) as CannaConnect__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CannaConnectInterface {
    return new Interface(_abi) as CannaConnectInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): CannaConnect {
    return new Contract(address, _abi, runner) as unknown as CannaConnect;
  }
}

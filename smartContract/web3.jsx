import Web3 from "web3";

const nfastAbi = [
              	{
              		"inputs": [
              			{
              				"internalType": "string",
              				"name": "name_",
              				"type": "string"
              			},
              			{
              				"internalType": "string",
              				"name": "symbol_",
              				"type": "string"
              			}
              		],
              		"stateMutability": "nonpayable",
              		"type": "constructor"
              	},
              	{
              		"anonymous": false,
              		"inputs": [
              			{
              				"indexed": true,
              				"internalType": "address",
              				"name": "owner",
              				"type": "address"
              			},
              			{
              				"indexed": true,
              				"internalType": "address",
              				"name": "approved",
              				"type": "address"
              			},
              			{
              				"indexed": true,
              				"internalType": "uint256",
              				"name": "tokenId",
              				"type": "uint256"
              			}
              		],
              		"name": "Approval",
              		"type": "event"
              	},
              	{
              		"anonymous": false,
              		"inputs": [
              			{
              				"indexed": true,
              				"internalType": "address",
              				"name": "owner",
              				"type": "address"
              			},
              			{
              				"indexed": true,
              				"internalType": "address",
              				"name": "operator",
              				"type": "address"
              			},
              			{
              				"indexed": false,
              				"internalType": "bool",
              				"name": "approved",
              				"type": "bool"
              			}
              		],
              		"name": "ApprovalForAll",
              		"type": "event"
              	},
              	{
              		"anonymous": false,
              		"inputs": [
              			{
              				"indexed": true,
              				"internalType": "address",
              				"name": "from",
              				"type": "address"
              			},
              			{
              				"indexed": true,
              				"internalType": "address",
              				"name": "to",
              				"type": "address"
              			},
              			{
              				"indexed": true,
              				"internalType": "uint256",
              				"name": "tokenId",
              				"type": "uint256"
              			}
              		],
              		"name": "Transfer",
              		"type": "event"
              	},
              	{
              		"inputs": [
              			{
              				"internalType": "address",
              				"name": "to",
              				"type": "address"
              			},
              			{
              				"internalType": "uint256",
              				"name": "tokenId",
              				"type": "uint256"
              			}
              		],
              		"name": "approve",
              		"outputs": [],
              		"stateMutability": "nonpayable",
              		"type": "function"
              	},
              	{
              		"inputs": [
              			{
              				"internalType": "address",
              				"name": "owner",
              				"type": "address"
              			}
              		],
              		"name": "balanceOf",
              		"outputs": [
              			{
              				"internalType": "uint256",
              				"name": "",
              				"type": "uint256"
              			}
              		],
              		"stateMutability": "view",
              		"type": "function"
              	},
              	{
              		"inputs": [
              			{
              				"internalType": "address",
              				"name": "_to",
              				"type": "address"
              			},
              			{
              				"internalType": "string",
              				"name": "_tokenURI",
              				"type": "string"
              			},
              			{
              				"internalType": "address",
              				"name": "_storeAddress",
              				"type": "address"
              			},
              			{
              				"internalType": "uint256",
              				"name": "_date",
              				"type": "uint256"
              			},
              			{
              				"internalType": "bool",
              				"name": "_mealType",
              				"type": "bool"
              			},
              			{
              				"internalType": "uint256",
              				"name": "_startTime",
              				"type": "uint256"
              			},
              			{
              				"internalType": "uint256",
              				"name": "_endTime",
              				"type": "uint256"
              			},
              			{
              				"internalType": "uint256",
              				"name": "_price",
              				"type": "uint256"
              			},
              			{
              				"internalType": "uint256",
              				"name": "_charge",
              				"type": "uint256"
              			}
              		],
              		"name": "create",
              		"outputs": [
              			{
              				"internalType": "uint256",
              				"name": "",
              				"type": "uint256"
              			}
              		],
              		"stateMutability": "nonpayable",
              		"type": "function"
              	},
              	{
              		"inputs": [],
              		"name": "current",
              		"outputs": [
              			{
              				"internalType": "uint256",
              				"name": "",
              				"type": "uint256"
              			}
              		],
              		"stateMutability": "view",
              		"type": "function"
              	},
              	{
              		"inputs": [
              			{
              				"internalType": "uint256",
              				"name": "tokenId",
              				"type": "uint256"
              			}
              		],
              		"name": "getApproved",
              		"outputs": [
              			{
              				"internalType": "address",
              				"name": "",
              				"type": "address"
              			}
              		],
              		"stateMutability": "view",
              		"type": "function"
              	},
              	{
              		"inputs": [
              			{
              				"internalType": "uint256",
              				"name": "_tokenId",
              				"type": "uint256"
              			}
              		],
              		"name": "getCharge",
              		"outputs": [
              			{
              				"internalType": "uint256",
              				"name": "",
              				"type": "uint256"
              			}
              		],
              		"stateMutability": "view",
              		"type": "function"
              	},
              	{
              		"inputs": [
              			{
              				"internalType": "uint256",
              				"name": "_tokenId",
              				"type": "uint256"
              			}
              		],
              		"name": "getDate",
              		"outputs": [
              			{
              				"internalType": "uint256",
              				"name": "",
              				"type": "uint256"
              			}
              		],
              		"stateMutability": "view",
              		"type": "function"
              	},
              	{
              		"inputs": [
              			{
              				"internalType": "uint256",
              				"name": "_tokenId",
              				"type": "uint256"
              			}
              		],
              		"name": "getEndTime",
              		"outputs": [
              			{
              				"internalType": "uint256",
              				"name": "",
              				"type": "uint256"
              			}
              		],
              		"stateMutability": "view",
              		"type": "function"
              	},
              	{
              		"inputs": [
              			{
              				"internalType": "uint256",
              				"name": "_tokenId",
              				"type": "uint256"
              			}
              		],
              		"name": "getIsUse",
              		"outputs": [
              			{
              				"internalType": "bool",
              				"name": "",
              				"type": "bool"
              			}
              		],
              		"stateMutability": "view",
              		"type": "function"
              	},
              	{
              		"inputs": [
              			{
              				"internalType": "uint256",
              				"name": "_tokenId",
              				"type": "uint256"
              			}
              		],
              		"name": "getMealType",
              		"outputs": [
              			{
              				"internalType": "bool",
              				"name": "",
              				"type": "bool"
              			}
              		],
              		"stateMutability": "view",
              		"type": "function"
              	},
              	{
              		"inputs": [
              			{
              				"internalType": "uint256",
              				"name": "_tokenId",
              				"type": "uint256"
              			}
              		],
              		"name": "getPrice",
              		"outputs": [
              			{
              				"internalType": "uint256",
              				"name": "",
              				"type": "uint256"
              			}
              		],
              		"stateMutability": "view",
              		"type": "function"
              	},
              	{
              		"inputs": [
              			{
              				"internalType": "uint256",
              				"name": "_tokenId",
              				"type": "uint256"
              			}
              		],
              		"name": "getStartTime",
              		"outputs": [
              			{
              				"internalType": "uint256",
              				"name": "",
              				"type": "uint256"
              			}
              		],
              		"stateMutability": "view",
              		"type": "function"
              	},
              	{
              		"inputs": [
              			{
              				"internalType": "uint256",
              				"name": "_tokenId",
              				"type": "uint256"
              			}
              		],
              		"name": "getStoreAddress",
              		"outputs": [
              			{
              				"internalType": "address",
              				"name": "",
              				"type": "address"
              			}
              		],
              		"stateMutability": "view",
              		"type": "function"
              	},
              	{
              		"inputs": [
              			{
              				"internalType": "uint256",
              				"name": "_tokenId",
              				"type": "uint256"
              			}
              		],
              		"name": "getTokenURI",
              		"outputs": [
              			{
              				"internalType": "string",
              				"name": "",
              				"type": "string"
              			}
              		],
              		"stateMutability": "view",
              		"type": "function"
              	},
              	{
              		"inputs": [
              			{
              				"internalType": "address",
              				"name": "owner",
              				"type": "address"
              			},
              			{
              				"internalType": "address",
              				"name": "operator",
              				"type": "address"
              			}
              		],
              		"name": "isApprovedForAll",
              		"outputs": [
              			{
              				"internalType": "bool",
              				"name": "",
              				"type": "bool"
              			}
              		],
              		"stateMutability": "view",
              		"type": "function"
              	},
              	{
              		"inputs": [],
              		"name": "name",
              		"outputs": [
              			{
              				"internalType": "string",
              				"name": "",
              				"type": "string"
              			}
              		],
              		"stateMutability": "view",
              		"type": "function"
              	},
              	{
              		"inputs": [
              			{
              				"internalType": "uint256",
              				"name": "tokenId",
              				"type": "uint256"
              			}
              		],
              		"name": "ownerOf",
              		"outputs": [
              			{
              				"internalType": "address",
              				"name": "",
              				"type": "address"
              			}
              		],
              		"stateMutability": "view",
              		"type": "function"
              	},
              	{
              		"inputs": [
              			{
              				"internalType": "address",
              				"name": "from",
              				"type": "address"
              			},
              			{
              				"internalType": "address",
              				"name": "to",
              				"type": "address"
              			},
              			{
              				"internalType": "uint256",
              				"name": "tokenId",
              				"type": "uint256"
              			}
              		],
              		"name": "safeTransferFrom",
              		"outputs": [],
              		"stateMutability": "nonpayable",
              		"type": "function"
              	},
              	{
              		"inputs": [
              			{
              				"internalType": "address",
              				"name": "from",
              				"type": "address"
              			},
              			{
              				"internalType": "address",
              				"name": "to",
              				"type": "address"
              			},
              			{
              				"internalType": "uint256",
              				"name": "tokenId",
              				"type": "uint256"
              			},
              			{
              				"internalType": "bytes",
              				"name": "data",
              				"type": "bytes"
              			}
              		],
              		"name": "safeTransferFrom",
              		"outputs": [],
              		"stateMutability": "nonpayable",
              		"type": "function"
              	},
              	{
              		"inputs": [
              			{
              				"internalType": "address",
              				"name": "operator",
              				"type": "address"
              			},
              			{
              				"internalType": "bool",
              				"name": "approved",
              				"type": "bool"
              			}
              		],
              		"name": "setApprovalForAll",
              		"outputs": [],
              		"stateMutability": "nonpayable",
              		"type": "function"
              	},
              	{
              		"inputs": [
              			{
              				"internalType": "uint256",
              				"name": "_tokenId",
              				"type": "uint256"
              			}
              		],
              		"name": "setIsUse",
              		"outputs": [],
              		"stateMutability": "nonpayable",
              		"type": "function"
              	},
              	{
              		"inputs": [
              			{
              				"internalType": "bytes4",
              				"name": "interfaceId",
              				"type": "bytes4"
              			}
              		],
              		"name": "supportsInterface",
              		"outputs": [
              			{
              				"internalType": "bool",
              				"name": "",
              				"type": "bool"
              			}
              		],
              		"stateMutability": "view",
              		"type": "function"
              	},
              	{
              		"inputs": [],
              		"name": "symbol",
              		"outputs": [
              			{
              				"internalType": "string",
              				"name": "",
              				"type": "string"
              			}
              		],
              		"stateMutability": "view",
              		"type": "function"
              	},
              	{
              		"inputs": [
              			{
              				"internalType": "uint256",
              				"name": "tokenId",
              				"type": "uint256"
              			}
              		],
              		"name": "tokenURI",
              		"outputs": [
              			{
              				"internalType": "string",
              				"name": "",
              				"type": "string"
              			}
              		],
              		"stateMutability": "view",
              		"type": "function"
              	},
              	{
              		"inputs": [
              			{
              				"internalType": "address",
              				"name": "from",
              				"type": "address"
              			},
              			{
              				"internalType": "address",
              				"name": "to",
              				"type": "address"
              			},
              			{
              				"internalType": "uint256",
              				"name": "tokenId",
              				"type": "uint256"
              			}
              		],
              		"name": "transferFrom",
              		"outputs": [],
              		"stateMutability": "nonpayable",
              		"type": "function"
              	}
              ]


const saleAbi = [
                	{
                		"inputs": [
                			{
                				"internalType": "uint256",
                				"name": "_nftId",
                				"type": "uint256"
                			},
                			{
                				"internalType": "address",
                				"name": "_storeAddress",
                				"type": "address"
                			},
                			{
                				"internalType": "uint256",
                				"name": "_price",
                				"type": "uint256"
                			},
                			{
                				"internalType": "bool",
                				"name": "_isStore",
                				"type": "bool"
                			},
                			{
                				"internalType": "uint256",
                				"name": "_startDate",
                				"type": "uint256"
                			},
                			{
                				"internalType": "uint256",
                				"name": "_endDate",
                				"type": "uint256"
                			},
                			{
                				"internalType": "address",
                				"name": "_currencyAddress",
                				"type": "address"
                			},
                			{
                				"internalType": "address",
                				"name": "_nftAddress",
                				"type": "address"
                			},
                			{
                				"internalType": "address",
                				"name": "_sellerAddress",
                				"type": "address"
                			}
                		],
                		"stateMutability": "nonpayable",
                		"type": "constructor"
                	},
                	{
                		"anonymous": false,
                		"inputs": [
                			{
                				"indexed": true,
                				"internalType": "address",
                				"name": "previousOwner",
                				"type": "address"
                			},
                			{
                				"indexed": true,
                				"internalType": "address",
                				"name": "newOwner",
                				"type": "address"
                			}
                		],
                		"name": "OwnershipTransferred",
                		"type": "event"
                	},
                	{
                		"anonymous": false,
                		"inputs": [
                			{
                				"indexed": true,
                				"internalType": "uint256",
                				"name": "_nftId",
                				"type": "uint256"
                			},
                			{
                				"indexed": false,
                				"internalType": "address",
                				"name": "_seller",
                				"type": "address"
                			},
                			{
                				"indexed": false,
                				"internalType": "address",
                				"name": "_buyer",
                				"type": "address"
                			}
                		],
                		"name": "Purchase",
                		"type": "event"
                	},
                	{
                		"anonymous": false,
                		"inputs": [
                			{
                				"indexed": true,
                				"internalType": "uint256",
                				"name": "_nftId",
                				"type": "uint256"
                			},
                			{
                				"indexed": false,
                				"internalType": "address",
                				"name": "_to",
                				"type": "address"
                			}
                		],
                		"name": "Refund",
                		"type": "event"
                	},
                	{
                		"anonymous": false,
                		"inputs": [
                			{
                				"indexed": true,
                				"internalType": "address",
                				"name": "_to",
                				"type": "address"
                			},
                			{
                				"indexed": false,
                				"internalType": "uint256",
                				"name": "_price",
                				"type": "uint256"
                			}
                		],
                		"name": "Withdraw",
                		"type": "event"
                	},
                	{
                		"inputs": [],
                		"name": "currencyAddress",
                		"outputs": [
                			{
                				"internalType": "address",
                				"name": "",
                				"type": "address"
                			}
                		],
                		"stateMutability": "view",
                		"type": "function"
                	},
                	{
                		"inputs": [],
                		"name": "erc20Contract",
                		"outputs": [
                			{
                				"internalType": "contract IERC20",
                				"name": "",
                				"type": "address"
                			}
                		],
                		"stateMutability": "view",
                		"type": "function"
                	},
                	{
                		"inputs": [],
                		"name": "erc721Contract",
                		"outputs": [
                			{
                				"internalType": "contract Nfast",
                				"name": "",
                				"type": "address"
                			}
                		],
                		"stateMutability": "view",
                		"type": "function"
                	},
                	{
                		"inputs": [],
                		"name": "getSaleInfo",
                		"outputs": [
                			{
                				"internalType": "uint256",
                				"name": "",
                				"type": "uint256"
                			},
                			{
                				"internalType": "uint256",
                				"name": "",
                				"type": "uint256"
                			},
                			{
                				"internalType": "uint256",
                				"name": "",
                				"type": "uint256"
                			},
                			{
                				"internalType": "uint256",
                				"name": "",
                				"type": "uint256"
                			},
                			{
                				"internalType": "address",
                				"name": "",
                				"type": "address"
                			},
                			{
                				"internalType": "bool",
                				"name": "",
                				"type": "bool"
                			},
                			{
                				"internalType": "address",
                				"name": "",
                				"type": "address"
                			},
                			{
                				"internalType": "address",
                				"name": "",
                				"type": "address"
                			}
                		],
                		"stateMutability": "view",
                		"type": "function"
                	},
                	{
                		"inputs": [],
                		"name": "nftAddress",
                		"outputs": [
                			{
                				"internalType": "address",
                				"name": "",
                				"type": "address"
                			}
                		],
                		"stateMutability": "view",
                		"type": "function"
                	},
                	{
                		"inputs": [
                			{
                				"internalType": "address",
                				"name": "operator",
                				"type": "address"
                			},
                			{
                				"internalType": "address",
                				"name": "from",
                				"type": "address"
                			},
                			{
                				"internalType": "uint256",
                				"name": "tokenId",
                				"type": "uint256"
                			},
                			{
                				"internalType": "bytes",
                				"name": "data",
                				"type": "bytes"
                			}
                		],
                		"name": "onERC721Received",
                		"outputs": [
                			{
                				"internalType": "bytes4",
                				"name": "",
                				"type": "bytes4"
                			}
                		],
                		"stateMutability": "nonpayable",
                		"type": "function"
                	},
                	{
                		"inputs": [],
                		"name": "owner",
                		"outputs": [
                			{
                				"internalType": "address",
                				"name": "",
                				"type": "address"
                			}
                		],
                		"stateMutability": "view",
                		"type": "function"
                	},
                	{
                		"inputs": [],
                		"name": "purchase",
                		"outputs": [],
                		"stateMutability": "payable",
                		"type": "function"
                	},
                	{
                		"inputs": [],
                		"name": "refund",
                		"outputs": [],
                		"stateMutability": "payable",
                		"type": "function"
                	},
                	{
                		"inputs": [],
                		"name": "renounceOwnership",
                		"outputs": [],
                		"stateMutability": "nonpayable",
                		"type": "function"
                	},
                	{
                		"inputs": [
                			{
                				"internalType": "address",
                				"name": "newOwner",
                				"type": "address"
                			}
                		],
                		"name": "transferOwnership",
                		"outputs": [],
                		"stateMutability": "nonpayable",
                		"type": "function"
                	},
                	{
                		"inputs": [],
                		"name": "withdraw",
                		"outputs": [],
                		"stateMutability": "payable",
                		"type": "function"
                	}
                ]


const saleFactoryAbi = [
                       	{
                       		"inputs": [],
                       		"stateMutability": "nonpayable",
                       		"type": "constructor"
                       	},
                       	{
                       		"anonymous": false,
                       		"inputs": [
                       			{
                       				"indexed": true,
                       				"internalType": "address",
                       				"name": "_saleContract",
                       				"type": "address"
                       			},
                       			{
                       				"indexed": true,
                       				"internalType": "address",
                       				"name": "_owner",
                       				"type": "address"
                       			},
                       			{
                       				"indexed": false,
                       				"internalType": "uint256",
                       				"name": "_workId",
                       				"type": "uint256"
                       			}
                       		],
                       		"name": "NewSale",
                       		"type": "event"
                       	},
                       	{
                       		"anonymous": false,
                       		"inputs": [
                       			{
                       				"indexed": true,
                       				"internalType": "address",
                       				"name": "previousOwner",
                       				"type": "address"
                       			},
                       			{
                       				"indexed": true,
                       				"internalType": "address",
                       				"name": "newOwner",
                       				"type": "address"
                       			}
                       		],
                       		"name": "OwnershipTransferred",
                       		"type": "event"
                       	},
                       	{
                       		"inputs": [],
                       		"name": "admin",
                       		"outputs": [
                       			{
                       				"internalType": "address",
                       				"name": "",
                       				"type": "address"
                       			}
                       		],
                       		"stateMutability": "view",
                       		"type": "function"
                       	},
                       	{
                       		"inputs": [],
                       		"name": "allSales",
                       		"outputs": [
                       			{
                       				"internalType": "address[]",
                       				"name": "",
                       				"type": "address[]"
                       			}
                       		],
                       		"stateMutability": "view",
                       		"type": "function"
                       	},
                       	{
                       		"inputs": [
                       			{
                       				"internalType": "uint256",
                       				"name": "_nftId",
                       				"type": "uint256"
                       			},
                       			{
                       				"internalType": "address",
                       				"name": "_storeAddress",
                       				"type": "address"
                       			},
                       			{
                       				"internalType": "uint256",
                       				"name": "_price",
                       				"type": "uint256"
                       			},
                       			{
                       				"internalType": "uint256",
                       				"name": "_startTime",
                       				"type": "uint256"
                       			},
                       			{
                       				"internalType": "uint256",
                       				"name": "_endTime",
                       				"type": "uint256"
                       			},
                       			{
                       				"internalType": "address",
                       				"name": "_currencyAddress",
                       				"type": "address"
                       			},
                       			{
                       				"internalType": "address",
                       				"name": "_nftAddress",
                       				"type": "address"
                       			}
                       		],
                       		"name": "createSale",
                       		"outputs": [
                       			{
                       				"internalType": "address",
                       				"name": "",
                       				"type": "address"
                       			}
                       		],
                       		"stateMutability": "nonpayable",
                       		"type": "function"
                       	},
                       	{
                       		"inputs": [],
                       		"name": "owner",
                       		"outputs": [
                       			{
                       				"internalType": "address",
                       				"name": "",
                       				"type": "address"
                       			}
                       		],
                       		"stateMutability": "view",
                       		"type": "function"
                       	},
                       	{
                       		"inputs": [],
                       		"name": "renounceOwnership",
                       		"outputs": [],
                       		"stateMutability": "nonpayable",
                       		"type": "function"
                       	},
                       	{
                       		"inputs": [
                       			{
                       				"internalType": "uint256",
                       				"name": "",
                       				"type": "uint256"
                       			}
                       		],
                       		"name": "sales",
                       		"outputs": [
                       			{
                       				"internalType": "address",
                       				"name": "",
                       				"type": "address"
                       			}
                       		],
                       		"stateMutability": "view",
                       		"type": "function"
                       	},
                       	{
                       		"inputs": [
                       			{
                       				"internalType": "address",
                       				"name": "newOwner",
                       				"type": "address"
                       			}
                       		],
                       		"name": "transferOwnership",
                       		"outputs": [],
                       		"stateMutability": "nonpayable",
                       		"type": "function"
                       	}
                       ]


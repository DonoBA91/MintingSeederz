import React, { useState} from 'react';
import Web3 from 'web3';
import './cssmintpage.css';
import picsbn from './images/picsbn.mp4';
import etherscanlogo from './images/contrato.png';
import space from './images/space.png';
import twitter from './images/twitter.svg';
import openSea from './images/opensea.svg';
import seederz from './images/seederz.png';
import join from './images/broke.png';
import joinConnected from './images/join.png';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import 'sweetalert2/dist/sweetalert2.min.css';
import '@sweetalert2/theme-dark/dark.css';

function MintForm() {

    const [numUnidades, setNumUnidades] = useState(1);
    const [accountAddress, setAccountAddress] = useState('');
    const [isWalletConnected, setIsWalletConnected] = useState(false);

    const url = 'https://rpc.ankr.com/polygon/8f32303c090817cb1a45309733532015f0d8b513f0c02fa8d2bdfa88bc1dfb4b';
    const web3 = new Web3(new Web3.providers.HttpProvider(url));
    const contractAddress = '0x7E6fCc101e80107A1e31DE90ffF58f0cd2d3CA47';
    const contractAbi = [
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
            "indexed": false,
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "Paused",
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
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "Unpaused",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "bool",
            "name": "_presaleActive",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_saleActive",
            "type": "bool"
          }
        ],
        "name": "_setSalesStatus",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "_to",
            "type": "address"
          }
        ],
        "name": "_withdrawETH",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "_to",
            "type": "address"
          }
        ],
        "name": "_withdrawETHToContract",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
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
        "inputs": [],
        "name": "baseUrl",
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
        "name": "maxPerTx",
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
        "inputs": [],
        "name": "maxSupply",
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
            "name": "_amount",
            "type": "uint256"
          }
        ],
        "name": "mint",
        "outputs": [],
        "stateMutability": "payable",
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
        "inputs": [],
        "name": "pause",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "paused",
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
        "name": "presaleMaxPerTx",
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
            "name": "_amount",
            "type": "uint256"
          }
        ],
        "name": "presaleMint",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "presalePrice",
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
        "inputs": [],
        "name": "presaleSupply",
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
        "inputs": [],
        "name": "price",
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
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "revealed",
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
            "name": "_maxPerTx",
            "type": "uint256"
          }
        ],
        "name": "setMaxPerTx",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_price",
            "type": "uint256"
          }
        ],
        "name": "setPrice",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bool",
            "name": "_state",
            "type": "bool"
          },
          {
            "internalType": "string",
            "name": "_baseUrl",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_baseExtension",
            "type": "string"
          }
        ],
        "name": "setRevealed",
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
            "name": "index",
            "type": "uint256"
          }
        ],
        "name": "tokenByIndex",
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
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
          }
        ],
        "name": "tokenOfOwnerByIndex",
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
            "name": "id",
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
        "inputs": [],
        "name": "totalSupply",
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
        "name": "unpause",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ];
    const contractInstance = new web3.eth.Contract(contractAbi, contractAddress);
    const MySwal = withReactContent(Swal); 
      
      const handleDecrement = () => {
      if (numUnidades > 1) {
        setNumUnidades(numUnidades - 1);
      }
    }
  
    const handleIncrement = () => {
      if (numUnidades < 9) {
        setNumUnidades(numUnidades + 1);
      }
    }
      
      const handleDisconnectWallet = () => {
        setAccountAddress("");
        const connectBtn = document.getElementById("connectBtn");
        setIsWalletConnected(false);
        connectBtn.classList.remove('connected');
        
    }
    


      const handleConnectWallet = async () => {
        if (window.ethereum) {
          try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            const accountAddress = await window.ethereum.request({ method: 'eth_accounts' });
            setAccountAddress(accountAddress[0]);
            const connectBtn = document.getElementById("connectBtn");
            setIsWalletConnected(true);
            connectBtn.classList.add('connected');


          } catch (error) {
            console.error(error);
          }

        } else {
          alert('Metamask not detected!');
        }
    }
   // Obtengo Total supply del Contrato
   async function getTotalSupply() {
    const totalSupply = await contractInstance.methods.totalSupply().call();
    console.log("Total supply:", totalSupply);
    const totalSupplyInput = document.getElementById("totalSupply");
    totalSupplyInput.value = 99 - totalSupply;
    }
    getTotalSupply();

    function MintPresale({ web3, contractInstance, contractAddress, globalAccountAddress}) {
    
    const handleMint = async () => {
        try {
            //Obtenemos las Unidades
            const _amount = parseInt(document.getElementById("unidades").value);
            console.log(_amount);
            if (isNaN(_amount) || _amount <= 0) {
                console.error("La cantidad debe ser un número válido mayor que cero");
                return;
            }
            // Setiamos el Payable Amount
            const totalPrice = String(99 * _amount);
            const payableAmount = web3.utils.toWei(totalPrice);

            console.log(globalAccountAddress);
            console.log(_amount, payableAmount);

            //Verificacion de Billetera
            if (!globalAccountAddress || globalAccountAddress.length === 0) {
                console.error("No se pudo obtener una cuenta de billetera");
                return;
            }

            //Variables del Gas 
            const gasPrice = (await web3.eth.getGasPrice());
            const gasLimit = 300000;


            // Mostrar el cuadro de diálogo de confirmación de usuario
            const confirmed = await MySwal.fire({
                title: 'Confirmar la transacción',
                html: `<strong>Monto a enviar:<strong> ${web3.utils.fromWei(payableAmount, "ether")} MATIC</strong><br>
                       Dirección del contrato:<br><strong> ${contractAddress}</strong><br>
                       Costo estimado de la transacción:<br><strong> ${web3.utils.fromWei((gasPrice * gasLimit).toString(), "ether")} MATIC</strong>`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Send',
                cancelButtonText: 'Cancel',
            })

            //Validacion de la instancia
            if (!contractInstance || !contractInstance.methods) {
                console.error("El objeto contractInstance no es válido");
                return;
            }


            //Validamos confirmacion del formulario
            if (confirmed.isConfirmed) {
                
                
                //modificacion en el amount
                const amount = parseInt(_amount);
                const payableAmounEth = String(payableAmount);

                const data = contractInstance.methods.mint(amount).encodeABI();
                const nonce = await web3.eth.getTransactionCount(globalAccountAddress);
                const estimateGas = await contractInstance.methods.mint(amount).estimateGas({
                    from: globalAccountAddress,
                    to: contractAddress,
                    value: payableAmounEth,
                    gasPrice: web3.utils.toHex(web3.utils.toWei('30', 'gwei')),
                    nonce: String(nonce),
                    data: data
                  });
                  
                  console.log(estimateGas);
                  console.log(payableAmounEth);
                  console.log(_amount);
                  console.log(data);
                  console.log(gasPrice);

                  const params = {
                    from: globalAccountAddress,
                    to: contractAddress,
                    value: web3.utils.toHex(payableAmount),
                    gas: web3.utils.toHex(estimateGas),
                    gasPrice: web3.utils.toHex(web3.utils.toWei('30', 'gwei')),
                    nonce: String(nonce),
                    data: data
                  };
                  console.log(params);
                  
                window.ethereum.request({
                    method: 'eth_sendTransaction',
                    value: _amount, 
                    params: [params]
                  }).then((res) => 
                  {
                    console.log("Transaction Hash: ", res);
                    MySwal.fire({
                        icon: 'success',
                        title: 'Successful transaction!',
                        text: 'Welcome Alpha Seedz.',
                       });       
                  });
            }
        } catch (error) {
            console.error("Error al llamar a la función presaleMint:", error);
        }
    }

    return (
        <button id="mintButton" className="mintButton" onClick={handleMint}>Mint</button>
    );
    }
/*
    function StarryBackground() {
      const canvasRef = useRef(null);
      const screenHRef = useRef(1080);
      const screenWRef = useRef(1920);
      const diameterRef = useRef(Math.max(screenHRef.current, screenWRef.current));
      const contextRef = useRef(null);
      const stars = [];
      const fps = 55;
      const numStars = 100;
    
      useEffect(() => {
        // Get the canvas
        canvasRef.current = document.getElementById("space");
    
        // Fill out the canvas
        canvasRef.current.setAttribute("height", diameterRef.current);
        canvasRef.current.setAttribute("width", diameterRef.current);
    
        // Get the context
        contextRef.current = canvasRef.current.getContext("2d");
    
        // Create all the stars
        for (let i = 0; i < numStars; i++) {
          const x = Math.round(Math.random() * diameterRef.current);
          const y = Math.round(Math.random() * diameterRef.current);
          const radius = 0.1 + Math.random() * 0.5;
          const opacity = Math.random();
    
          // Create a new star and draw
          const star = new Star(x, y, radius, opacity);
    
          // Add the the stars array
          stars.push(star);
        }
    
        const interval = setInterval(() => {
          animate();
        }, 800 / fps);
    
        return () => clearInterval(interval);
      }, []);
    

      function animate() {
        contextRef.current.clearRect(0, 0, diameterRef.current, diameterRef.current);
        stars.forEach((star) => {
          star.draw(contextRef.current);
        });
      }
    

      function Star(x, y, radius, opacity) {
        this.x = parseInt(x);
        this.y = parseInt(y);
        this.radius = parseInt(radius);
        this.opacity = opacity;
        this.factor = 1;
        this.increment = Math.random() * 0.035;
      }

      Star.prototype.draw = function () {
        // Change the opacity
        if (this.opacity > 1) {
          this.factor = -1;
        } else if (this.opacity <= 0) {
          this.factor = 1;
        }
    
        this.opacity += this.increment * this.factor;
    
        contextRef.current.beginPath();
        contextRef.current.arc(this.x, this.y, 1.1, 0, 2 * Math.PI);
        contextRef.current.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`;
        contextRef.current.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        contextRef.current.stroke();
        contextRef.current.shadowBlur = 25;
        contextRef.current.shadowColor = "#ffffff";
        contextRef.current.fill();
      };
      return <canvas ref={canvasRef} id="space"></canvas>;
      
    }
*/

    return (
    <div id="contenedroGeneral">
        <div className="contenedorspace"><img src={space} alt="space" id='space'/></div>
    <div className="headPage">
        <ul className="logo">
            <li>Seederz</li>
        </ul>
        <ul className="atajosSocialMedia">
            <li><a href="https://twitter.com" className='' target="_blank" rel="noopener noreferrer" ><img src={twitter} alt="Logo twitter" title='@seederz137'/></a></li>
            <li><a href="https://www.opensea.io" className='' target="_blank" rel="noopener noreferrer" ><img src={openSea} alt="Logo OpenSea" title='OpenSea Site'/></a></li>
            <li><a href="https://www.seederz.xyz/" className='' target="_blank" rel="noopener noreferrer" ><img src={seederz} alt="Logo Seederz" title='GreenHouse'/></a></li>
        </ul>
        </div>      
    <div className="containerGeneralMint">
      <div className="containermint">
        <div className="contenedor-video">
          <video className="picsbn" src={picsbn} muted loop autoPlay></video>
        </div>
        <div className="contenedor-texto">
          <div className="field">
            <div className="label">Supply</div>
            <input className="input" type="text" id="totalSupply" readOnly />
          </div>
          <div className="field">
            <div className="label">Address</div>
            <input className="input" type="text" id="inputAccountAddress" value={accountAddress ? accountAddress : "Connect your Wallet"} readOnly />
          </div>
          <div className="field">
            <div className="label">Pieces</div>
            <div className="incrementador">
            <button id="decrementador" onClick={handleDecrement}>-</button>
              <button id="incrementador" onClick={handleIncrement}>+</button>
              <input type="text" id="unidades" value={numUnidades} readOnly />
            </div>
          </div>
        </div>
        <div className="botonhome">
          <a href="https://polygonscan.com/address/0x7E6fCc101e80107A1e31DE90ffF58f0cd2d3CA47" className="etherscan-logo" target="_blank" rel="noopener noreferrer"><img src={etherscanlogo} alt="" /></a>
          <MintPresale web3={web3} contractInstance={contractInstance} contractAddress={contractAddress} globalAccountAddress={accountAddress} />
          <button id="connectBtn" type="button" onClick={isWalletConnected ? handleDisconnectWallet : handleConnectWallet}>
            {isWalletConnected ? (
                <img src={joinConnected} alt="Join" />
            ) : (
                <img src={join} alt="Broke" />
            )}
            </button>
        </div>
      </div>
      <div id="accountAddress"></div>
      
    </div>
    <div className="piedepagina">by donoLabs</div>
    </div>
    );
}

export default MintForm;

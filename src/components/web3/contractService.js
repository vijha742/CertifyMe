// src/web3/contractService.js
import { ethers } from 'ethers';
import YourContractABI from './CertificateRegistryABI.json'; // Path to your ABI JSON file

let contract;
let provider;
let signer;

export const initialize = async () => {
    // Ensure the user is connected to Metamask or another wallet
    if (typeof window.ethereum !== 'undefined') {
        provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []); // Request user accounts
        signer = provider.getSigner(); // Get the signer (user account)
        contract = new ethers.Contract("YOUR_CONTRACT_ADDRESS", YourContractABI, signer); // Replace with your contract address
        return await signer.getAddress(); // Return the user's account
    } else {
        alert("Please install MetaMask!");
        throw new Error("MetaMask not found");
    }
};

export const issueCertificate = async (certificateHash) => {
    const tx = await contract.issueCertificate(certificateHash); // Call the function to issue the certificate
    await tx.wait(); // Wait for the transaction to be mined
};

export const verifyCertificate = async (certificateHash) => {
    return await contract.verifyCertificate(certificateHash); // Call the function to verify the certificate
};

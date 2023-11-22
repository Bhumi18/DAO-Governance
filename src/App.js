import { ethers } from "ethers";
import governorAlphaAbi from "./artifacts/contracts/GovernorAlpha.sol/GovernorAlpha.json";
import uniAbi from "./artifacts/contracts/Uni.sol/Uni.json";

const governorAlphaContractAddress =
  "0x426DF2d74C08F16257DE10b74B84d7FbFecfDEEa";
const uniContractAddress = "0x2eeFa13703Eb4483Aa588Fd5D6bfb034E1FB8d97";

function App() {
  const createProposal = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();

        const uniContract = new ethers.Contract(
          uniContractAddress,
          uniAbi.abi,
          signer
        );
        const delegate = await uniContract.delegate(
          "0xB4e6ee231C86bBcCB35935244CBE9cE333D30Bdf"
        );
        console.log("delegating...");
        await delegate.wait();
        console.log("delegated");

        // proposal creation
        const contract = new ethers.Contract(
          governorAlphaContractAddress,
          governorAlphaAbi.abi,
          signer
        );

        const tx = await contract.propose(
          [uniContractAddress],
          ["0"],
          ["transfer(address,uint256)"],
          [
            ethers.utils.defaultAbiCoder.encode(
              ["address", "uint256"],
              ["0xB4e6ee231C86bBcCB35935244CBE9cE333D30Bdf", "10000"]
            ),
          ],
          "dao for testing"
        );
        console.log("proposal is creating");
        await tx.wait();
        console.log("proposal is created");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getProposal = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();

        // proposal creation
        const contract = new ethers.Contract(
          governorAlphaContractAddress,
          governorAlphaAbi.abi,
          signer
        );

        const proposal = await contract.proposals(1);
        console.log(proposal);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const vote = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();

        // proposal creation
        const contract = new ethers.Contract(
          governorAlphaContractAddress,
          governorAlphaAbi.abi,
          signer
        );

        const tx = await contract.castVote(1, true);
        console.log("voting...");
        await tx.wait();
        console.log("voted");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={() => createProposal()}>create proposal</button>
      <button onClick={() => getProposal()}>get proposal</button>
      <button onClick={() => vote()}>vote</button>
    </div>
  );
}

export default App;

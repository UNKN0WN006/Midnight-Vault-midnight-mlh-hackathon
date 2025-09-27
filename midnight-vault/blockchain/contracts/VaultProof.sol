// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract VaultProof {
    event FileProof(address indexed user, string fileHash, uint256 timestamp);

    function storeProof(string memory fileHash) public {
        emit FileProof(msg.sender, fileHash, block.timestamp);
    }
}

# hive-smart-vm
An experimental V86 Linux running in node to be stored on the blockchain that has smart execution logic.

This project is part of the [hive-fc-lunx](https://github.com/txtatech/hive-fc-linux) and [hive-file-chunker](https://github.com/txtatech/hive-file-chunker) projects.

This project is also a linux fork of [v86-NodeVM](https://github.com/superdinmc/v86-NodeVM)

## Please note that nothing is written to the blockchain at this time and this project is still in a testing phase.

# Quick Usage:

```bash
node hive_smart_vm.js
```

OR:

```bash
./compile.sh
```

Then

```bash
node HiveSmartVM.js
```

# Hive Smart VM

## Overview
Hive Smart VM is a project that integrates Node.js virtual machine (VM) boot processes with the Hive blockchain. 
It enables dynamic VM booting based on time conditions verified through the Hive blockchain, offering a layer of functionality and security in blockchain-based operations.

## Key Features
- **Blockchain-Linked VM Booting:** Boots a VM stored as files on the Hive blockchain, based on blockchain-verified conditions.
- **Time Synchronization:** Ensures the VM boots only when the Hive blockchain time aligns with a predefined target time.
- **Public Key Retrieval:** Fetches public keys from Hive blockchain accounts, aiding in identity verification and testing.
- **Special Account Handling:** Capable of handling Hive accounts with special characters or unique attributes.

## Prerequisites
- Node.js installed on the system.
- Access to the Hive blockchain via the API endpoint (`api.hive.blog`).

## Installation & Setup
1. Clone the GitHub repository:
   ```bash
   git clone https://github.com/txtatech/hive-smart-vm.git
   cd hive-smart-vm
   ```
2. Install necessary Node.js dependencies (if any are specified).

## Usage
Run the script using Node.js:
```bash
node hive_smart_vm.js
```

## Configurations
- **Target Time:** Set the target time in the script for the VM to boot.
- **Hive Username:** Specify the Hive username for public key retrieval and additional verifications.

## Testing
- Utilize public keys for testing and validation purposes.
- Modify the Hive API endpoint to connect to a testnet if required.

## Acknowledgments
- Hive Blockchain Community

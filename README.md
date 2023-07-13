# Project Title

## Table of Contents

- [Project Title](#project-title)
  - [Table of Contents](#table-of-contents)
  - [About ](#about-)
  - [Getting Started ](#getting-started-)
    - [Prerequisites](#prerequisites)
    - [Installing](#installing)
  - [Usage ](#usage-)

## About <a name = "about"></a>

A dating app built on web3, demonstration a proof of concept

## Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them.


- [Metamask Extension](https://metamask.io/download/)
- Node JS
- Typescript

### Installing

A step by step series of examples that tell you how to get a development env running.

1. Clone the repo

    ```bash
    git clone git@github.com:husain3012/lovechain.git
    ```

2. Setup Backend

    ```bash
    cd backend/
    npm i
    ```

3. Test smart contracts (optional)

    ```bash
    npx hardhat test
    ```

4. Start Hardhat node

    ```bash
    npx hardhat node
    ```

5. Deploy Contracts

    ```bash
    npm run deploy:local
    ```

6. Before setting up frontend, **setup metamask to use hardhat network** by following [this guide](https://medium.com/@kaishinaw/connecting-metamask-with-a-local-hardhat-network-7d8cea604dc6)


7. Setting up frontend

    ```bash
    cd ../frontend/
    npm i
    ```

8. Run development server

    ```bash
    npm run dev
    ```

## Usage <a name = "usage"></a>
1. Open http://localhost:5173/ in your browser
2. Connect to metamask using hardhat network
3. Create an account
4. Enjoy!


# Directory structure

Two directories: 
1. AssemblyCode: Contains the assemblyCode contracts
2. Rust: Contains the contracts written in rust 
3. Vue: Contains the frontend code

Video Description NCD-1: https://www.loom.com/share/985a11930dc14150ae668ceeafc21df8
Video Description NCD-2: https://www.loom.com/share/d8484c027ba14597a9372818914a94a0


# AssemblyCode

### starter-kit
1. Started with the hello-world script as instructed by our instructor during our exploratory call. 
2. Made all the required changes for redeployment of the script and tested the results. 
3. In the final submitted code, I have commented all the changes so that you can verify the outcome.

I have used the following code to test it out 

```
cd assymblyCode 
export NEAR_ENV=testnet
export CONTRACT=nearuni.testnet
export BENEFICIARY=unifi.testnet
./scripts/1.dev-deploy.sh
./scripts/2.use-contract.sh
```
### FT and NFT

After this I explored the nomicon.io. It contains a good description around FT and NFT. And cross contract calls. 

### Storage staking 

This was the concept which took a lot of my time. But eventually I understood how this interface along with FT is able to offload the rent to the account holder. 

# Rust

I used rust because it is written multiple times within the documentation that for high value contracts, we should use only rust language.

### counter example
I explored the counter example and tried the rust version of the most simplistic example

### FT 
Then I explored the FT example and tried running various simulation tests to get a feel of it. 

Have used following statements to test the system
```
cd rust
./build.sh
cargo test
cargo test simulate # to run only simulation tests

export NEAR_ENV=testnet
export Contract=nearuni.testnet
near deploy --wasmFile res/unifi.wasm --accountId $Contract
near call $Contract new '{"owner_id": "$Contract", "total_supply": "100000000000000", "metadata": { "spec": "ft-1.0.0", "name": "taifi", "symbol": "EXLT", "decimals": 8 }}' --accountId $Contract
near view $Contract ft_metadata
near view $Contract ft_balance_of '{"account_id": "'$Contract'"}'
near call $Contract ft_transfer '{"receiver_id": "'$Contract'", "amount": "50000"}' --accountId $Contract --amount 0.000000000000000000000001
near view $Contract storage_balance_bounds
near call $Contract storage_deposit '' --accountId $Contract --amount 0.00235


near create-account bob.$ID --masterAccount $ID --initialBalance 1
near call $ID storage_deposit '' --accountId bob.$ID --amount 0.00125
near view $ID ft_balance_of '{"account_id": "'bob.$ID'"}'
near call $ID ft_transfer '{"receiver_id": "'bob.$ID'", "amount": "5"}' --accountId $ID --amount 0.000000000000000000000001

```

# Vue

- As explained, in the course I have tried to create an application using Vue as Frontend. 
- I have used the counter example as the backend with some modifications. 
    - Have added the following functions: 
    - add x
    - subtract x
    - multiply x
    - divide x
    - gettotal
    - getstorage

- Code to test the contract
```
cd rust
./build.sh
cargo test -v

export NEAR_ENV=testnet
export Contract=nearuni.testnet
near deploy --wasmFile res/counter.wasm --accountId $Contract

near call $Contract add '{"x":45}' --accountId $Contract
near call $Contract subtract '{"x":20}' --accountId $Contract
near call $Contract multiply '{"x":4}' --accountId $Contract
near call $Contract divide '{"x":7}' --accountId $Contract
near view $Contract get_total
near view $Contract get_storage

```

After Deploying the contract: 

```
// Install the repositories
npm install 
// Compiles and hot-reloads for development
npm run serve
// Compiles and minifies for production
npm run build
// Lints and fixes files
npm run lint
```

1. After deploying, in the navigation bar , the four buttons for add, subtract, multiply and divide are visible.
2. We need to login first to access the change functions because they need transactions. 
3. We can click on the buttons and check the console for the promise to get completed.
4. Have not added the loading flow but connection to application are complete. 
5. Both view and change functions are working as expected. 

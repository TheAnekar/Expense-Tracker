let accounts = [];
let transactions = [];

acc1 = ["001","Bank Account 1",1000]
acc2 = ["002","Cash On Hand",750]
acc3 = ["003","Travel Card",500]

accounts.push(acc1,acc2,acc3)
console.log(accounts)

trans1 = ["trans001",15,"expense","15/12/2025","001","Food","Tea"]
trans2 = ["trans002",250,"expense","15/12/2025","003","Transportation","Bus Fare"]
trans3 = ["trans003",90,"expense","15/12/2025","001","Food"]
trans4 = ["trans004",50,"income","15/12/2025","002","Food"]
trans5 = ["trans005",15,"expense","15/12/2025","002","Food","Tea"]

transactions.push(trans1,trans2,trans3,trans4,trans5)
console.log(transactions)
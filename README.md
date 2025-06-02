docker pull mongo

docker run -d --name mongodb -p 27017:27017 -v mongodata:/data/db mongo --setParameter storageEngineConcurrentWriteTransactions=128

mongodb://localhost:27017

npm run compile

npm start

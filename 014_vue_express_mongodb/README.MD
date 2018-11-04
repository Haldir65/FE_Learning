## start mongodb
mongod

## start server api
cd server
yarn install && yarn run dev
// now local server api is ready

## start client
cd ../client
yarn install && yarn serve

now navigate to "http://localhost:8080"
you should be able to see your vue mongodb application
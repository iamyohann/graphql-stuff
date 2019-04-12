#!/bin/bash
cd "$(dirname "$0")"

cd server
prisma deploy
prisma import --data export-2019-04-12T00:49:54.648Z.zip
cd ../client
yarn && yarn start
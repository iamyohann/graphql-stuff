#!/bin/bash
cd "$(dirname "$0")"

cd server
prisma deploy
prisma import --data export-2019-04-12T04:16:03.211Z.zip
cd ../client
yarn && yarn start
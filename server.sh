#!/bin/bash
cd "$(dirname "$0")"

cd server
docker-compose up

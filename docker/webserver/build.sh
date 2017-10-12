#!/usr/bin/env bash
set -e
echo "building linux executable"
GOOS=linux go build
docker build -t sabrinamarlo/testserver .
docker push sabrinamarlo/testserver
go clean

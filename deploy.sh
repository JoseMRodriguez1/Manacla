#!/bin/bash

# 1. Deletes everything in ./docs/*
rm -rf ./docs/*

# 2. Copies everything from ./dist/manacla-web/browser/ into ./docs/
cp -r ./dist/manacla-web/browser/* ./docs/

# 3. Copies ./CNAME into ./docs/
cp ./CNAME ./docs/

echo "Deployment script finished."

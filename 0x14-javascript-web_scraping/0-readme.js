#!/usr/bin/node

const fs = require('fs');

const filePath = process.argv[2];

fs.readFile(filePath, 'utf-8', (error, content) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log(content);
});


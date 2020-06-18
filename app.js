const gitlog = require("gitlog");

const commits = gitlog({
  repo: ".",
  number: 10,
  fields: ["hash", "abbrevHash", "subject", "authorName", "authorDate"]
});
console.log(JSON.stringify({ build: process.env.BUILD_NUMBER, commits }, undefined, 2));

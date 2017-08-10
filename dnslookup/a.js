var dnslookup=require('./dnslookup.js')
dnslookup.dnslookup(process.argv[2]).then(console.log)

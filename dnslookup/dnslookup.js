const 	dns=require('dns')
const 	dnslookup=(address)=>
	new Promise(
		(resolve,reject)=>
			dns.resolve4(
				address,
				(err,addresses)=>
					err?reject(err):resolve(addresses)
			)
	)
if(process.argv[2])
	dnslookup(process.argv[2]).then(console.log)
exports.dnslookup=dnslookup


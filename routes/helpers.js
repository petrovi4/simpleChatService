export function auth(req, res, next) {
	// Do some auth
	console.log('Let\'s say the user is logged in');
	next();
}

// The serializer parameter allows us to customize the serialization format of the query result
export function successRes(res, data, _dummy_serializer) { // The *_dummy* prefix allows me to insert unused variables into the code. Linter (eslint) ignores it by rule from config
	res.json(data);
}


export function errorRes(res, error) {
	// To handle errors, you should define error classes and their corresponding HTTP codes and messages.
	// But for the prototype it is enough that there is
	if(error?.message) res.status(500).send({error: {message: error.message}});
	else res.status(500).send(error);
}

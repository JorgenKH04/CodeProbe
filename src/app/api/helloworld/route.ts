export async function GET(request: Request) {
	return new Response(JSON.stringify("Hi"));
}

// https://api.github.com/search/users?q=Qs

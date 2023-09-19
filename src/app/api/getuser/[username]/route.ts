export async function GET({ params }: { params: { slug: string } }) {
	console.log(params);
	// const res = await fetch(`https://api.github.com/users/${params.slug}`);
	return new Response(JSON.stringify("a"));
}

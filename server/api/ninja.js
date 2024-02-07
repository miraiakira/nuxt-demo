export default defineEventHandler(async (event) => {
	// api call with private key
	const { data } = await $fetch(
		"https://api.currencyapi.com/v3/latest?apikey=cur_live_i3lZY6kXFjfvNoi67Iz2Dbugy9d1KHUwJ6RstGwB&currencies=EUR%2CUSD%2CCAD"
	);

	return data;
});

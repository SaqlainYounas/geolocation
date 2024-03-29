/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	async redirects() {
		return [
			{
				source: "/fabrikam",
				destination: "/",
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;

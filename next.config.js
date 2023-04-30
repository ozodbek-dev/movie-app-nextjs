/** @type {import('next').NextConfig} *//** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['image.tmdb.org', 'rb.gy', 'images.unsplash.com'],
	},
		env: {
			TMDB_API_KEY: process.env.TMDB_API_KEY,
			TMDB_API_URL: process.env.TMDB_API_URL,
		},
};

module.exports = nextConfig;
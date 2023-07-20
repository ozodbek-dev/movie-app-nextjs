/** @type {import('next').NextConfig} *//** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['image.tmdb.org', 'rb.gy', 'images.unsplash.com'],
	},
		env: {
			TMDB_API_KEY: process.env.TMDB_API_KEY,
			TMDB_API_URL: process.env.TMDB_API_URL,
			STRIPE_SECRET_KEY:process.env.STRIPE_SECRET_KEY,
			STRIPE_PUBLIC_KEY:process.env.STRIPE_PUBLIC_KEY
		},
};

module.exports = nextConfig;
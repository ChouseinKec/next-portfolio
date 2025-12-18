import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	output: 'export',
	images: {
		unoptimized: true, // Disable image optimization for static export
	},
	// images: {
	// 	domains: ['picsum.photos'],
	// },
};

export default nextConfig;

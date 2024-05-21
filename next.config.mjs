/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 't1.kakaocdn.net',
				port: '',
			},
			{
				protocol: 'https',
				hostname: 'phinf.pstatic.net',
				port: '',
			}
		]
	}
};

export default nextConfig;

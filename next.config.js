const path = require('path');
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
	pwa: {
		disable: process.env.NODE_ENV === 'development',
		dest: 'public',
		register: true,
		publicExcludes: ['/public/img'],
		runtimeCaching,
	},

	// This is not required to make it into a PWA, but is a nice way to clean up your imports
	webpack: (config) => {
		config.resolve.modules.push(path.resolve('./'));
		return config;
	},
});
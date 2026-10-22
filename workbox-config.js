module.exports = {
	globDirectory: '.',
	globPatterns: [
		// jpg, jpeg y webp: las fotos de los 15 productos de Wings Noriega
		'**/*.{js,html,json,svg,png,jpg,jpeg,webp,css}'
	],
	// Archivos que NO son parte de la app: no se precachean
	globIgnores: [
		'**/node_modules/**/*',
		'servidor-ssr*/**/*',
		'docs/**/*',
		'**/*.report.html',
		'reporte-lighthouse*.html',
		'workbox-config.js'
	],
	swDest: 'sw.js',
	// Activa el Service Worker nuevo de inmediato y toma control de las pestañas abiertas
	skipWaiting: true,
	clientsClaim: true,
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};

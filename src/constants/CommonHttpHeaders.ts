export const CommonHttpRequestHeaders: {[s: string]: string[]} = {
	'Content-Length': [],
	'Content-Type': [
		'application/javascript',
		'application/octet-stream',
		'application/pdf',
		'application/json',
		'application/ld+json',
		'application/xml',
		'application/zip',
		'image/gif',
		'image/jpeg',
		'image/png',
		'image/webp',
		'image/svg+xml',
		'text/css',
		'text/csv',
		'text/html',
		'text/plain',
		'text/xml',
	],
	'Content-Encoding': ['gzip', 'compress', 'deflate', 'identity', 'br'],
	'Transfer-Encoding': ['chunked', 'compress', 'deflate', 'gzip', 'dentity'],
	'Cache-Control': [
		'max-age=0',
		'max-stale=0',
		'min-fresh=0',
		'no-cache',
		'no-store',
		'no-transform',
		'only-if-cached',
	],
	Referer: [], // TODO allow override
	'User-Agent': [],
	Cookie: [],
	Dnt: [],
};

export const CommonHttpResponseHeaders: {[s: string]: string[]} = {
	Status: [],
	Server: [],
	'Content-Length': [],
	'Content-Type': [
		'application/javascript',
		'application/octet-stream',
		'application/pdf',
		'application/json',
		'application/ld+json',
		'application/xml',
		'application/zip',
		'image/gif',
		'image/jpeg',
		'image/png',
		'image/webp',
		'image/svg+xml',
		'text/css',
		'text/csv',
		'text/html',
		'text/plain',
		'text/xml',
	],
	'Content-Encoding': ['gzip', 'compress', 'deflate', 'identity', 'br'],
	'Content-Disposition': ['inline', 'attachment', 'attachment; filename=""'],
	Date: [],
	ETag: [],
	Expires: [],
	'Last-Modified': [],
	// prettier-ignore
	'Pragma': [
		'no-cache',
	],
	'Cache-Control': [
		'must-revalidate',
		'no-cache',
		'no-store',
		'no-transform',
		'public',
		'private',
		'proxy-revalidate',
		'max-age=0',
	],
	'Set-Cookie': [],
	'Access-Control-Allow-Origin': [],
	'Access-Control-Allow-Methods': [],
	'Access-Control-Allow-Headers': [],
};

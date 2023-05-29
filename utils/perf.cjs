/* eslint-disable no-console */

// i: Thanks to https://github.com/sounisi5011 for this benchmarking script

const { performance } = require('node:perf_hooks');

function benchmark(name, testFunction) {
	const start = performance.now();
	for (let index = 0; index < 9999; index++) {
		testFunction();
	}
	const end = performance.now();
	console.log(name, end - start + 'ms');
}

const userAgent = 'npm/6.14.18 node/v18.16.0 linux x64 ci/github-actions';

// This is run first to avoid the effect of the dynamic optimization process in JS runtime
benchmark('do nothing', () => userAgent);

benchmark(`userAgent.split(' ')[0]`, () => userAgent.split(' ')[0]);
benchmark(`userAgent.split(' ', 1)[0]`, () => userAgent.split(' ', 1)[0]);
benchmark(`userAgent.indexOf(' ')`, () => {
	const userAgentSeparatorPosition = userAgent.indexOf(' ');
	return userAgentSeparatorPosition < 0
		? userAgent
		: userAgent.slice(0, userAgentSeparatorPosition);
});

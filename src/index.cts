interface PackageManager {
	name: string;
	version: string;
}

function getCurrentPackageManager(): PackageManager | undefined {
	const userAgent = process.env.npm_config_user_agent;
	if (!userAgent || userAgent === '') return;

	const packageManager = userAgent.split(' ')[0];
	if (typeof packageManager !== 'string' || packageManager === '') return;

	const separatorPosition = packageManager.indexOf('/') > 0 ? packageManager.indexOf('/') : null;

	if (!separatorPosition) {
		return {
			name: packageManager,
			version: '',
		};
	}

	return {
		name: packageManager.slice(0, separatorPosition),
		version: packageManager.slice(separatorPosition + 1),
	};
}

export = getCurrentPackageManager;

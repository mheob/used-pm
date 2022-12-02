interface PackageManager {
	name: string;
	version: string;
}

export = (): PackageManager | undefined => {
	const userAgent = process.env.npm_config_user_agent;

	if (!userAgent) return;

	const packageManager = userAgent.split(' ')[0];
	if (!packageManager) return;

	const separatorPosition = packageManager.indexOf('/') ?? 0;

	return {
		name: packageManager.slice(0, separatorPosition),
		version: packageManager.slice(separatorPosition + 1),
	};
};

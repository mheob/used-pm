import { install as installHusky } from 'husky';

const isCI = process.env['CI'] !== undefined;

if (!isCI) {
	installHusky();
}

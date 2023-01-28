// Generic in case NodeJS.ProcessEnv is ever extended in the future
function env<Key extends keyof NodeJS.ProcessEnv>(key: Key) {
	const value = process.env[key];

	if (!value) {
		throw new Error(`Missing environment variable ${key}`);
	}

	return value;
}

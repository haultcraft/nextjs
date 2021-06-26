const heads_api = 'https://cravatar.eu';

export function getHeadURL(username: string, size: number = 64) {
	return `${heads_api}/head/${username}/${size}.png`;
}

export function getAvatarURL(username: string, size: number = 64) {
	return `${heads_api}/avatar/${username}/${size}.png`;
}


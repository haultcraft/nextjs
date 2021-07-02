const heads_api = 'https://cravatar.eu';

export function getHeadURL(username: string, size: number = 64) {
	return `${heads_api}/head/${username}/${size}.png`;
}

export function getAvatarURL(username: string, size: number = 64) {
	return `${heads_api}/avatar/${username}/${size}.png`;
}

import { addHours, getMinutes, getHours, getSeconds, getDay } from 'date-fns';

export const convertToDuration = (secondsAmount: number) => {
	const normalizeTime = (time: string): string =>
		time.length === 1 ? `0${time}` : time;

	const SECONDS_TO_MILLISECONDS_COEFF = 1000;
	const MINUTES_IN_HOUR = 60;

	const milliseconds = secondsAmount * SECONDS_TO_MILLISECONDS_COEFF;

	const date = new Date(milliseconds);
	const timezoneDiff = date.getTimezoneOffset() / MINUTES_IN_HOUR;
	const dateWithoutTimezoneDiff = addHours(date, timezoneDiff);
	const day = (getDay(dateWithoutTimezoneDiff) - 4) * 24;
	const hours = normalizeTime(String(getHours(dateWithoutTimezoneDiff) + day));
	const minutes = normalizeTime(String(getMinutes(dateWithoutTimezoneDiff)));
	const seconds = normalizeTime(String(getSeconds(dateWithoutTimezoneDiff)));

	console.log(day, getHours(dateWithoutTimezoneDiff), getMinutes(dateWithoutTimezoneDiff), getSeconds(dateWithoutTimezoneDiff), timezoneDiff, date);

	const hoursOutput = hours !== '00' ? `${hours}:` : '';

	return `${hoursOutput}${minutes}:${seconds}`;
};
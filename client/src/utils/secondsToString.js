function secondsToString(seconds) {
	let numminutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
	let numseconds = (((seconds % 31536000) % 86400) % 3600) % 60;
	numminutes = `0${numminutes}`.slice(-2);
	numseconds = `0${numseconds}`.slice(-2);
	return `${numminutes}:${numseconds}`;
}
export default secondsToString;

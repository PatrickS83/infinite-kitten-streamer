// pauses for x seconds
export const pause = seconds => new Promise(resolve => setTimeout(resolve, seconds * 1000));

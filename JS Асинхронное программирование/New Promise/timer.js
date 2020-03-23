const wait = time => {
    const promise = new Promise((resolve) => setTimeout(resolve, time));
    return promise;
}

// BEGIN
export default (ms) => new Promise((resolve) => setTimeout(resolve, ms));
// END
export default wait;
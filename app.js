const request = (url) => {
    // setting up the promise with two call backs
    return new Promise((resolve, reject) => {
        // random number to fake the data time loading
        const rand = Math.random();
        setTimeout(() => {
            if (rand > 0.7) {
                resolve("Site Loaded.");
            } else {
                reject("Error loading");
            }
        }, 1000)
    })
}

request('/site/1')
    // if successful code will run
    .then((data) => {
        console.log("finished request!");
        console.log(`Your info ${date}`);
    })
    // catch error if code doesn't load in time
    .catch((err) => {
        console.log("Request Error", err);
    });


    // promises and colors
    const delayedColorChange = (color) => {
        return new Promise((resolve, reject) => {
            
        })
    }
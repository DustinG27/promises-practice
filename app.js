// const request = (url) => {
//     // setting up the promise with two call backs
//     return new Promise((resolve, reject) => {
//         // random number to fake the data time loading
//         const rand = Math.random();
//         setTimeout(() => {
//             if (rand > 0.7) {
//                 resolve("Site Loaded.");
//             } else {
//                 reject("Error loading");
//             }
//         }, 1000)
//     })
// }

// request('/site/1')
//     // if successful code will run
//     .then((data) => {
//         console.log("finished request!");
//         console.log(`Your info ${date}`);
//     })
//     // catch error if code doesn't load in time
//     .catch((err) => {
//         console.log("Request Error", err);
//     });


    // promises and colors
    const delayedColorChange = (color, delay) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                document.body.style.backgroundColor = color;
                resolve();
            }, delay)
        })
    }

    // delayedColorChange("red", 1000)
    //     .then(() => delayedColorChange("green", 1000))
    //     .then(() => delayedColorChange("blue", 1000))
    //     .then(() => delayedColorChange("purple", 1000))
    //     .then(() => delayedColorChange("grey", 1000))

    //async function of colors
    async function rainbow() {
        await delayedColorChange('red', 1000)
        await delayedColorChange('orange', 1000)
        await delayedColorChange('yellow', 1000)
        await delayedColorChange('green', 1000)
        await delayedColorChange('blue', 1000)
        await delayedColorChange('indigo', 1000)
        await delayedColorChange('violet', 1000)
    }

    async function awaitRainbow() {
        await rainbow()
            .then(() => {
                delayedColorChange('black', 1000)
            })
    }

    awaitRainbow();
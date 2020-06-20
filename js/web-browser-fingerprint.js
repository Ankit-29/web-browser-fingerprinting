getBrowserFingerPrint = () => {
    getBrowserDetails().then(res => {
        console.log(btoa(JSON.stringify(res)));
        document.querySelector('span').innerHTML = btoa(JSON.stringify(res));
        // return btoa(JSON.stringify(res));
    });
}

getBrowserDetails = () => {
    return new Promise((res, rej) => {
        const detailsObject = {
            userAgent: navigator.userAgent,
            hardwareConcurrency: navigator.hardwareConcurrency,
            height: window.screen.height,
            width: window.screen.width,
            maxTouchPoints: navigator.maxTouchPoints,
            colorDepth: window.screen.colorDepth,
            isCookieEnabled: navigator.cookieEnabled,
            ip: null
        }

        fetch('https://api.ipify.org/?format=json')
            .then(res => res.json())
            .then(ipData => {
                detailsObject.ip = ipData.ip;
                res(detailsObject);
            }).catch(err => {
                console.error(err);
                res(detailsObject);
            });
    });

}
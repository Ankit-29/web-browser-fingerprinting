getBrowserFingerPrint = () => {
    getBrowserDetails().then(res => {
        console.log(btoa(JSON.stringify(res)));
        document.querySelector('p').innerHTML = btoa(JSON.stringify(res));
        for (key in res) {
            document.querySelector('p').innerHTML += `<p><strong>${key} : ${res[key]}</strong></p>`;
        }
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
            ip: null,
            timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
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



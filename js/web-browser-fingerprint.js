getBrowserFingerPrint = () => {
    return btoa(JSON.stringify(getBrowserDetails()));
}

getBrowserDetails = () => {
    const detailsObject = {
        userAgent: navigator.userAgent,
        hardwareConcurrency: navigator.hardwareConcurrency,
        height: window.screen.height,
        width: window.screen.width,
        maxTouchPoints: navigator.maxTouchPoints,
        colorDepth: window.screen.colorDepth,
        isCookieEnabled: navigator.cookieEnabled
    }

    return detailsObject;
}
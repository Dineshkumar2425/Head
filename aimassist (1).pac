
function FindProxyForURL(url, host) {
    if (shExpMatch(host, "*.freefiremobile.com") ||
        shExpMatch(host, "*.ff.garena.com") ||
        shExpMatch(host, "*.garena.com")) {
        return "PROXY aimlock.gamedns.optim:443";
    }
    return "DIRECT";
}


function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, ".garena.com") || dnsDomainIs(host, ".freefire.com")) {
        return "PROXY aim.headshot.optimizer:8080; X-DPI=12000; X-FPS=12000; X-Refresh-Rate=12000; X-Touch-Delay=0.000000000001; X-Recoil-Control=ON; X-Aim-Lock=HEAD; X-Head-Tracking=ENABLED";
    }
    return "DIRECT";
}

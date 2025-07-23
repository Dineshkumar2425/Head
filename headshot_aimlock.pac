
function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, ".garena.com") || dnsDomainIs(host, ".freefire.com")) {
        return "PROXY aim.headshot.optimizer:8080; X-DPI=129999000; X-FPS=1209900; X-Refresh-Rate=12009990; X-Touch-Delay=0.000000000001; X-Recoil-Control=0 recoil ON; X-Aim-Lock=HEAD; X-Head-Tracking=ENABLED";
    }
    return "DIRECT";
}

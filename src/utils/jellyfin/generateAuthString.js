const generateAuthString = (token) => {
    let authString = "MediaBrowser Client=" + process.env.JELLYFIN_CLIENT + ", Device=sqrt(47-102), DeviceId=sqrt(47-102), Version=" + process.env.JELLYFIN_VERSION;
    if(!!token){
        authString += ", Token=" + token;
    }
    return authString;
}

module.exports = { generateAuthString };
const { JellyFinSingleton } = require("./jellyfinSingleton");

const getToken = async () => {
    const axiosInstance = JellyFinSingleton.getInstance();
    return new Promise((resolve, reject) => {
        axiosInstance.post("/Users/AuthenticateByName", {
            Username: "amnet_synchro",
            Pw: "amnet@birse#"
        })
        .then((response) => {
            JellyFinSingleton.updateHeader('XEmbyAuthorization', response.data['AccessToken']);
            resolve(response);
        })
        .catch((error) => {
            reject(error);
        });
    });
}

module.exports = { getToken };
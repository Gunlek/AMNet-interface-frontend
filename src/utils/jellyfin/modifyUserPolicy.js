const { JellyFinSingleton } = require("./jellyfinSingleton");

const modifyUserPolicy = async (userId, userPolicy, disabled) => {
    const axiosInstance = JellyFinSingleton.getInstance();
    return new Promise((resolve, reject) => {
        axiosInstance.post("/Users/" + userId + "/Policy", userPolicy)
        .then((response) => {
            resolve(response);
        })
        .catch((error) => {
            reject(error);
        });
    });
}

module.exports = { modifyUserPolicy };
const { JellyFinSingleton } = require("./jellyfinSingleton");

const removeUser = async (userId) => {
    const axiosInstance = JellyFinSingleton.getInstance();
    return new Promise((resolve, reject) => {
        axiosInstance.delete("/Users/" + userId)
        .then((response) => {
            resolve(response);
        })
        .catch((error) => {
            reject(error);
        });
    });
}

module.exports = { removeUser };
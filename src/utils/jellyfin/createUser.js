const { JellyFinSingleton } = require("./jellyfinSingleton");

const createUser = async (name, password) => {
    const axiosInstance = JellyFinSingleton.getInstance();
    return new Promise((resolve, reject) => {
        axiosInstance.post("/Users/New", {
            Name: name,
            Password: password
        })
        .then((response) => {
            resolve(response);
        })
        .catch((error) => {
            reject(error);
        });
    });
}

module.exports = { createUser };
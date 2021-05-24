const { JellyFinSingleton } = require("./jellyfinSingleton");

const changePassword = async (userId, newpass) => {
    const axiosInstance = JellyFinSingleton.getInstance();
    return new Promise((resolve, reject) => {
        axiosInstance.post("/Users/" + userId + "/Password", {
            ResetPassword: true
        })
        .then(() => {
            axiosInstance.post('/Users/' + userId + '/Password', {
                NewPw: newpass,
                ResetPassword: false
            })
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            })
        })
        .catch((error) => {
            reject(error);
        });
    });
}

module.exports = { changePassword };
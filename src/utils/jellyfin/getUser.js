const { JellyFinSingleton } = require("./jellyfinSingleton");

const getUser = async (name) => {
    const axiosInstance = JellyFinSingleton.getInstance();
    return new Promise((resolve, reject) => {
        axiosInstance.post("/Users")
        .then((response) => {
            for(let k=0; k < response.data; k++){
                if(response.data[k]['Name'] == name){
                    resolve(response.data[k]);
                    break;
                }
            }
        })
        .catch((error) => {
            reject(error);
        });
    });
}

module.exports = { getUser };
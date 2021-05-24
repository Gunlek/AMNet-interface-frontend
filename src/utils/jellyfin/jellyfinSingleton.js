const { default: axios } = require("axios");
const { generateAuthString } = require("./generateAuthString");
require('dotenv').config();

/**
 * This is a Singleton class for Radius database
 */
const JellyFinSingleton = (function(){

    const JellyFinClass = function(){
        this.jellyfinAxios = axios.create({
            baseURL: process.env.JELLYFIN_URL,
            headers: {
                Accept: "application/json",
                ContentType: "application/x-www-form-urlencoded; charset=UTF-8",
                XApplication: process.env.JELLYFIN_AGENT,
                AcceptCharset: "UTF-8,*",
                AcceptEncoding: "gzip",
                UserAgent: AGENT,
                XEmbyAuthorization: generateAuthString(None)
            }
        })

        this.getJellyFinAxios = () => {
            return this.jellyfinAxios;
        }
    }
    let jellyfinInstance = null;

    return new function(){
        this.getInstance = () => {
            if(jellyfinInstance == null){
                jellyfinInstance = new JellyFinClass();
            }

            return jellyfinInstance;
        }

        this.updateHeader = (headerKey, headerValue) => {
            let jellyfinInstance = this.getInstance();
            jellyfinInstance.default.headers.common[headerKey] = headerValue;
        }
    }
})();

module.exports = { JellyFinSingleton }
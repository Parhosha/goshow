/* eslint-disable func-names */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const axios = require("axios")

const API = {
    getUserMail(getUserMail) {
        return axios
            .get(`https://jsonplaceholder.typicode.com/todos/1`)
            .then(async (response) => {
                const a = await response.data
                return null
            })
            .catch(function (e) {
                console.error(e)
            })
    },
}
export default API

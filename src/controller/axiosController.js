let axios = require("axios")


let getmovies = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'http://www.omdbapi.com/?apikey= 2b9ee31e'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
module.exports.getmovies=getmovies;
let axios = require("axios")

let getmoviesById = async function (req, res) {

    try {
        let id = req.query.i
        let key = req.query.apikey
        console.log(`query params are:  ${id} ${key}`)
        let options = {
            method: 'get',
            url: `http://www.omdbapi.com/?i=${id}&apikey=2b9ee31e`
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
module.exports.getmoviesById=getmoviesById;

let getmoviesByTitle = async function (req, res) {

    try {
        let title= req.query.t
        let key = req.query.apikey
        console.log(`query params are: ${title} ${key}`)
        let options = {
            method: 'get',
            url: `http://www.omdbapi.com/?t=${title}&apikey=2b9ee31e`
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
module.exports.getmoviesByTitle=getmoviesByTitle;
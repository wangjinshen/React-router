const axios = require("axios")
module.exports = function (app) {
    app.get("/music/renks", (req, res) => {
        let url = "https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1546601846728"
        axios.get(url, {
            headers: {
                origin: "https://y.qq.com",
                referer: "https://y.qq.com/m"
            }
        }).then((result) => {
            res.send(result.data.data)
        }).catch((err) => {
            res.send({
                code: 1
            })
        })

    })
    app.get("/music/toplists", (req, res) => {
        let url = "https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1546601843988"
        axios.get(url, {
            headers: {
                origin: "https://y.qq.com",
                referer: "https://y.qq.com/m"
            }
        }).then((result) => {
            res.send(result.data)
        }).catch((err) => {
            res.send({
                code: 1
            })
        })

    })
}
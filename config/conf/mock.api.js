module.exports = {
    //模拟接口调用
    before(app) {
        app.get('/some/path', function (req, res) {
            res.json({ custom: 'response' });
        });
    }
};

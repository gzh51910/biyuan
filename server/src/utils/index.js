const token = require('./token')
function formatData({data=[],status=1,msg='success'}={}){
    if(status === 0){
        msg = 'fail'
    }
    return {
        status,
        data,
        msg
    }
}
module.exports = {
    formatData,
    token
}
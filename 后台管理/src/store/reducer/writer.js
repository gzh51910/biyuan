const initState = {
    writerlist: [{
        username: "64646",
            phone: "13246466649",
            id: "w65465",
            level: "1",
            status: '正常',
            email: '478219876@qq.com'
        },
        {
            username: "5667",
            phone: "13246466644",
            id: "qq65456465",
            level: "2",
            status: '正2常',
            email: '478219876@q1.com'
        }
    ]
}

const reducer = function (state = initState, {
    type,
    payload
}) {
    switch (type) {
        // 本地修改同时发送请求就可以不用重新渲染页面
        // 需要配合页面写ajax请求
        // 修改
        case "DIPATCH_READER_USER":
            // 这里的payload为一个对象
            return {
                ...state,
                writerlist: state.writerlist.map(item => {
                    if (item.id == payload.id) {
                        // 动态判断之三元运算
                        item.username = payload.username == item.username ? item.username : payload.username
                        item.phone = payload.phone == item.phone ? item.phone : payload.phone
                        item.level = payload.level == item.level ? item.level : payload.level
                        item.status = payload.status == item.status ? item.status : payload.status
                        item.email = payload.email == item.email ? item.email : payload.email
                    }
                })
            }

            // 删除
            case "REMOVE_READER_USER":
                    // 这里的payload为一个对象
                    // payload:{id}
                return {
                    ...state,
                    writerlist: state.writerlist.filter(item => item.id != payload.id)
                }
                default:
                    return state;
    }

}
export default reducer
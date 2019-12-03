const initState = {
    list:[],
    menulist: [
        {
            span: 1,
            text: "#",
            type: "#"
        }, {
            span: 2,
            text: "用户头像",
            type: "avatar"
        }, {
            span: 2,
            text: "用户Id",
            type: "id"
        }, {
            span: 2,
            text: "用户名称",
            type: "name"
        }, {
            span: 2,
            text: "用户等级",
            type: "level"
        }, {
            span: 3,
            text: "使用状态",
            type: "status"
        }, {
            span: 3,
            text: "注册手机",
            type: "phone"
        }, {
            span: 3,
            text: "注册邮箱",
            type: "email"
        }, {
            span: 3,
            text: "操作",
            type: "control"
        },
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
                list: state.list.map(item => {
                    if (item.username == payload.username) {
                        // 动态判断之三元运算
                        item.name = payload.name == item.name ? item.name : payload.name
                        item.phone = payload.phone == item.phone ? item.phone : payload.phone
                        item.level = payload.level == item.level ? item.level : payload.level
                        item.status = payload.status == item.status ? item.status : payload.status
                        item.email = payload.email == item.email ? item.email : payload.email
                    }
                })
            };

            // 删除
        case "REMOVE_READER_USER":
            // 这里的payload为一个对象
            // payload:{id}
            return {
                ...state,
                list: state.list.filter(item => item._id !== payload._id)
            };
            // 获取所有reader
        case "GERALL_READER_USER":
            return {
                ...state,
                list:payload
            }
        default:
            return state;
    }

}
export default reducer
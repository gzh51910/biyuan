const initState = {
    id: '',
    displayName: '',
    avatar: '',
    role: "",
    isLogin: false,
    Authorization: "",
    // isLogin:true,
}

const reducer = function (state = initState, {
    type,
    payload
}) {
    switch (type) {
        // 根据不同的action支持不同的操作
        case "LOGINADMIN":
            return {
                ...state,
                isLogin: payload
            };
        case "update":
            return {
                ...state,
                isLogin: payload
            }
            default:
                return state;
    }
}
export default reducer
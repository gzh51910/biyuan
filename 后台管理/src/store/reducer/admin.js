const initState = {
    user: {
        id: '',
        displayName: '',
        avatar: '',
        role: "",
        isLogin: false,
        Authorization: "",
        // isLogin:true,
    }
}

const reducer = function (state = initState, {
    type,
    payload
}) {
    switch(type){

        // 登录
        case "LOGIN":
            return {
                ...state,
                user:payload
            }

        // 退出
        case "LOGOUT":
                // localStorage.removeItem('user');
            return {
                ...state,
                user:{}
            }
        default:
            return state;
    }

}
export default reducer
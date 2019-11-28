const initState={
    id:'',
    displayName:'',
    avatar:'',
    role:"",
    isLogin:false,
    hh:444
}

const reducer =function(state=initState,{type,payload}){
    switch (type) {
    // 根据不同的action支持不同的操作
    case "LOGIN":
        return {
            ...state,
            user:payload
        }
        default:
                return state;
    }
}
export default reducer
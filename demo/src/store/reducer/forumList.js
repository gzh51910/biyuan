let initialState = {
    catid:"0",
    forumList:[],
    fArticleList:[]
}

// reducer会在执行store.dispatch()方法时被内部调用
const reducer = function (state = initialState, {
    type,
    payload
}) {
    switch (type) {
        // 改变catid
        case "CHANGE_CATID":
            state = {
                ...state,
                catid: payload
            }
            return state
        case "ADD_FORUMLIST":
            state = {
                ...state,
                forumList: [payload,...state.forumList]
            }
            return state
        case "ADD_FORUMARTICLE":
            state = {
                ...state,
                fArticleList: [payload,...state.fArticleList]
            }
            return state
        default:
            return state;
    }
}

export default reducer
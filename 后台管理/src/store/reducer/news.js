const initState = {
    newsDatalist: [

    ]
}

const reducer = function (state = initState, {
    type,
    payload
}) {
    switch (type) {

        // 审核状态改变
        case "REVIEW":
            return {
                ...state,

                newsDatalist: state.newsDatalist.map(item => {
                    if (item._id == payload._id) {
                        item.status = payload.status
                    }
                    return item
                })
            };
            case "GETALL_NEWS":
                return {
                    ...state,
                    newsDatalist:payload
                }

        default:
            return state;
    }

}
export default reducer
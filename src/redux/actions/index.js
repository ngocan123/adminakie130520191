import axioApi from './../../config/axioConfig';
export function getPosts (id) {
    return (dispatch) => {
        axioApi.get('product/list?author='+id).then((res) => {  // redux_step2 getting datas from server
            let posts = res.data
            dispatch({type:'VIEW_POSTS', posts})
        })
        .catch((err) => {
            dispatch({type:'VIEW_POSTS_ERR', err})
        })
    }
}
export function deletePost(id){
    return async() => {
        let res
        try{
            res = await axioApi.post('/product/removepost', {_id : id});
        }catch(e){
            res = e;
        }
        return res;
    }
}
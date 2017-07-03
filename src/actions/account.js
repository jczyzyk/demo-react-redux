import actionType from '../constants/actions'

export const doLogin = (user, history) => (dispatch, getState) => {
    dispatch({ type: "DO_LOGIN_REQUEST"});
    // api.login(user).then(() => {
    
    // });



    let now = new Date().getTime();
    dispatch({ type: actionType.LoginSuccess, account: { token:'1', expDate: new Date(now + 30 * 60000).getTime()}});
    history.replace('/');
    return;
}
import api from './../res/api';
import http from './http';
function getAccessToken() {
    //测试
    var accessToken = Mlux.StoreManager.AccessToken.get('value');
    if (accessToken != '') {
        return Promise.resolve(accessToken);
    } else {
        return HTTP.get(ServiceUrl.getAccessToken, {
            client: Device.broswer() + '-' + Device.os(),
            device_number: Device.deviceNumber()
        }).then(function (content) {
            if (content.boolen == 1) {
                var access_token = content.data.access_token;
                Mlux.StoreManager.AccessToken.set('value', access_token);
                return access_token
            } else {
                window.NXSD.Toast.show(content.message);
            }
        })
    }
}
export default createAPI(api);

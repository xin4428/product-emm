function onRequest(context){
    var userModule = require("/modules/user.js").userModule;
    var permissions = {};

    if(userModule.isAuthorized("/permission/device-mgt/admin/devices/list")){
        permissions.LIST_DEVICES = true;
    }
    if(userModule.isAuthorized("/permission/device-mgt/admin/users/list")){
        permissions.LIST_USERS = true;
    }
    if(userModule.isAuthorized("/permission/device-mgt/admin/users/add-user")){
        permissions.ADD_USER = true;
    }

    context.permissions = permissions;
    return context;
}
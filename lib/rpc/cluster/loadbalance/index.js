//-----------------------------------------------------------------------------------------------
//
//
//
//
//
//-----------------------------------------------------------------------------------------------
var LoadBalance = function () {
    this.init();
};


//-----------------------------------------------------------------------------------------------
//
//-----------------------------------------------------------------------------------------------
LoadBalance.prototype.init = function () {
};

//-----------------------------------------------------------------------------------------------
//
//-----------------------------------------------------------------------------------------------
LoadBalance.prototype.getProvider = function (serviceName, providerList) {
    if (providerList.length <= 1) {
        return providerList[0];
    }
    else {
        return this._getProvider(serviceName, providerList);
    }
};

//-----------------------------------------------------------------------------------------------
// 子类走着
//-----------------------------------------------------------------------------------------------
LoadBalance.prototype._getProvider = function (serviceName, providerList) {
    console.warn('LoadBalance : 不要用默认类, 这个只会返回第一个提供者');
    return providerList[0];
};

//-----------------------------------------------------------------------------------------------
//
//
//
//
//
//-----------------------------------------------------------------------------------------------
module.exports = LoadBalance;
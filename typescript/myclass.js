var Service = /** @class */ (function () {
    function Service(id, name, projectCode) {
        this.id = id;
        this.name = name;
        this.projectCode = projectCode;
    }
    Service.prototype.getName = function () {
        return this.name;
    };
    Service.prototype.setEmail = function (email) {
        this.email = email;
    };
    Service.prototype.getEmail = function () {
        return this.email;
    };
    return Service;
}());
var obj1 = new Service(1, 'Mohsin', 'p11');
console.log(obj1.getName());
obj1.setEmail('test@gg.com');
console.log(obj1.getEmail());
console.log(obj1.projectCode);
// scopes
// public -- full visibility
// private - local to class
// protected - available in sublass as well

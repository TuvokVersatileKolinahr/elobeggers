"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var angular2_jwt_1 = require("angular2-jwt");
var user_service_1 = require("../services/user.service");
var AuthService = (function () {
    function AuthService(userService, router) {
        this.userService = userService;
        this.router = router;
        this.loggedIn = false;
        this.isAdmin = false;
        this.jwtHelper = new angular2_jwt_1.JwtHelper();
        this.currentUser = { _id: '', username: '', role: '' };
        var token = localStorage.getItem('token');
        if (token) {
            var decodedUser = this.decodeUserFromToken(token);
            this.setCurrentUser(decodedUser);
        }
    }
    AuthService.prototype.login = function (emailAndPassword) {
        var _this = this;
        return this.userService.login(emailAndPassword).map(function (res) { return res.json(); }).map(function (res) {
            localStorage.setItem('token', res.token);
            var decodedUser = _this.decodeUserFromToken(res.token);
            _this.setCurrentUser(decodedUser);
            return _this.loggedIn;
        });
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('token');
        this.loggedIn = false;
        this.isAdmin = false;
        this.currentUser = { _id: '', username: '', role: '' };
        this.router.navigate(['/']);
    };
    AuthService.prototype.decodeUserFromToken = function (token) {
        return this.jwtHelper.decodeToken(token).user;
    };
    AuthService.prototype.setCurrentUser = function (decodedUser) {
        this.loggedIn = true;
        this.currentUser._id = decodedUser._id;
        this.currentUser.username = decodedUser.username;
        this.currentUser.role = decodedUser.role;
        decodedUser.role === 'admin' ? this.isAdmin = true : this.isAdmin = false;
        delete decodedUser.role;
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        router_1.Router])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map
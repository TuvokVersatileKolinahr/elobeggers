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
var forms_1 = require("@angular/forms");
var auth_service_1 = require("../services/auth.service");
var toast_component_1 = require("../shared/toast/toast.component");
var LoginComponent = (function () {
    function LoginComponent(auth, formBuilder, router, toast) {
        this.auth = auth;
        this.formBuilder = formBuilder;
        this.router = router;
        this.toast = toast;
        this.email = new forms_1.FormControl('', [forms_1.Validators.required,
            forms_1.Validators.minLength(3),
            forms_1.Validators.maxLength(100)]);
        this.password = new forms_1.FormControl('', [forms_1.Validators.required,
            forms_1.Validators.minLength(6)]);
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.auth.loggedIn) {
            this.router.navigate(['/']);
        }
        this.loginForm = this.formBuilder.group({
            email: this.email,
            password: this.password
        });
    };
    LoginComponent.prototype.setClassEmail = function () {
        return { 'has-danger': !this.email.pristine && !this.email.valid };
    };
    LoginComponent.prototype.setClassPassword = function () {
        return { 'has-danger': !this.password.pristine && !this.password.valid };
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.auth.login(this.loginForm.value).subscribe(function (res) { return _this.router.navigate(['/']); }, function (error) { return _this.toast.setMessage('invalid email or password!', 'danger'); });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.scss']
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        forms_1.FormBuilder,
        router_1.Router,
        toast_component_1.ToastComponent])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map
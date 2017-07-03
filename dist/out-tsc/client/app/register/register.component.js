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
var user_service_1 = require("../services/user.service");
var toast_component_1 = require("../shared/toast/toast.component");
var RegisterComponent = (function () {
    function RegisterComponent(formBuilder, router, toast, userService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.toast = toast;
        this.userService = userService;
        this.username = new forms_1.FormControl('', [forms_1.Validators.required,
            forms_1.Validators.minLength(2),
            forms_1.Validators.maxLength(30),
            forms_1.Validators.pattern('[a-zA-Z0-9_-\\s]*')]);
        this.email = new forms_1.FormControl('', [forms_1.Validators.required,
            forms_1.Validators.minLength(3),
            forms_1.Validators.maxLength(100)]);
        this.password = new forms_1.FormControl('', [forms_1.Validators.required,
            forms_1.Validators.minLength(6)]);
        this.role = new forms_1.FormControl('', [forms_1.Validators.required]);
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            username: this.username,
            email: this.email,
            password: this.password,
            role: this.role
        });
    };
    RegisterComponent.prototype.setClassUsername = function () {
        return { 'has-danger': !this.username.pristine && !this.username.valid };
    };
    RegisterComponent.prototype.setClassEmail = function () {
        return { 'has-danger': !this.email.pristine && !this.email.valid };
    };
    RegisterComponent.prototype.setClassPassword = function () {
        return { 'has-danger': !this.password.pristine && !this.password.valid };
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.userService.register(this.registerForm.value).subscribe(function (res) {
            _this.toast.setMessage('you successfully registered!', 'success');
            _this.router.navigate(['/login']);
        }, function (error) { return _this.toast.setMessage('email already exists', 'danger'); });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        selector: 'app-register',
        templateUrl: './register.component.html',
        styleUrls: ['./register.component.scss']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        router_1.Router,
        toast_component_1.ToastComponent,
        user_service_1.UserService])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map
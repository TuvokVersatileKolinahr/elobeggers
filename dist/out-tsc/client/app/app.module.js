"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var routing_module_1 = require("./routing.module");
var shared_module_1 = require("./shared/shared.module");
var game_service_1 = require("./services/game.service");
var user_service_1 = require("./services/user.service");
var auth_service_1 = require("./services/auth.service");
var auth_guard_login_service_1 = require("./services/auth-guard-login.service");
var auth_guard_admin_service_1 = require("./services/auth-guard-admin.service");
var app_component_1 = require("./app.component");
var games_component_1 = require("./games/games.component");
var about_component_1 = require("./about/about.component");
var register_component_1 = require("./register/register.component");
var login_component_1 = require("./login/login.component");
var logout_component_1 = require("./logout/logout.component");
var account_component_1 = require("./account/account.component");
var admin_component_1 = require("./admin/admin.component");
var not_found_component_1 = require("./not-found/not-found.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            games_component_1.GamesComponent,
            about_component_1.AboutComponent,
            register_component_1.RegisterComponent,
            login_component_1.LoginComponent,
            logout_component_1.LogoutComponent,
            account_component_1.AccountComponent,
            admin_component_1.AdminComponent,
            not_found_component_1.NotFoundComponent
        ],
        imports: [
            routing_module_1.RoutingModule,
            shared_module_1.SharedModule
        ],
        providers: [
            auth_service_1.AuthService,
            auth_guard_login_service_1.AuthGuardLogin,
            auth_guard_admin_service_1.AuthGuardAdmin,
            game_service_1.GameService,
            user_service_1.UserService
        ],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
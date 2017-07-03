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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var GameService = (function () {
    function GameService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    GameService.prototype.getGames = function () {
        return this.http.get('/api/games').map(function (res) { return res.json(); });
    };
    GameService.prototype.countGames = function () {
        return this.http.get('/api/games/count').map(function (res) { return res.json(); });
    };
    GameService.prototype.addGame = function (game) {
        return this.http.post('/api/game', JSON.stringify(game), this.options);
    };
    GameService.prototype.getGame = function (game) {
        return this.http.get("/api/game/" + game._id).map(function (res) { return res.json(); });
    };
    GameService.prototype.editGame = function (game) {
        return this.http.put("/api/game/" + game._id, JSON.stringify(game), this.options);
    };
    GameService.prototype.deleteGame = function (game) {
        return this.http.delete("/api/game/" + game._id, this.options);
    };
    return GameService;
}());
GameService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], GameService);
exports.GameService = GameService;
//# sourceMappingURL=game.service.js.map
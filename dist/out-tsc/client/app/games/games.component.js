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
var forms_1 = require("@angular/forms");
var game_service_1 = require("../services/game.service");
var toast_component_1 = require("../shared/toast/toast.component");
var GamesComponent = (function () {
    function GamesComponent(gameService, formBuilder, http, toast) {
        this.gameService = gameService;
        this.formBuilder = formBuilder;
        this.http = http;
        this.toast = toast;
        this.game = {};
        this.games = [];
        this.isLoading = true;
        this.isEditing = false;
        this.teamRed = new forms_1.FormControl('', forms_1.Validators.required);
        this.teamBlue = new forms_1.FormControl('', forms_1.Validators.required);
        this.winner = new forms_1.FormControl('', forms_1.Validators.required);
        this.teamRedScore = new forms_1.FormControl('', forms_1.Validators.required);
        this.teamBlueScore = new forms_1.FormControl('', forms_1.Validators.required);
    }
    GamesComponent.prototype.ngOnInit = function () {
        this.getGames();
        this.addGameForm = this.formBuilder.group({
            teamRed: this.teamRed,
            teamBlue: this.teamBlue,
            winner: this.winner,
            teamRedScore: this.teamRedScore,
            teamBlueScore: this.teamBlueScore
        });
    };
    GamesComponent.prototype.getGames = function () {
        var _this = this;
        this.gameService.getGames().subscribe(function (data) { return _this.games = data; }, function (error) { return console.log(error); }, function () { return _this.isLoading = false; });
    };
    GamesComponent.prototype.addGame = function () {
        var _this = this;
        this.gameService.addGame(this.addGameForm.value).subscribe(function (res) {
            var newGame = res.json();
            _this.games.push(newGame);
            _this.addGameForm.reset();
            _this.toast.setMessage('item added successfully.', 'success');
        }, function (error) { return console.log(error); });
    };
    GamesComponent.prototype.enableEditing = function (game) {
        this.isEditing = true;
        this.game = game;
    };
    GamesComponent.prototype.cancelEditing = function () {
        this.isEditing = false;
        this.game = {};
        this.toast.setMessage('item editing cancelled.', 'warning');
        // reload the games to reset the editing
        this.getGames();
    };
    GamesComponent.prototype.editGame = function (game) {
        var _this = this;
        this.gameService.editGame(game).subscribe(function (res) {
            _this.isEditing = false;
            _this.game = game;
            _this.toast.setMessage('item edited successfully.', 'success');
        }, function (error) { return console.log(error); });
    };
    GamesComponent.prototype.deleteGame = function (game) {
        var _this = this;
        if (window.confirm('Are you sure you want to permanently delete this item?')) {
            this.gameService.deleteGame(game).subscribe(function (res) {
                var pos = _this.games.map(function (elem) { return elem._id; }).indexOf(game._id);
                _this.games.splice(pos, 1);
                _this.toast.setMessage('item deleted successfully.', 'success');
            }, function (error) { return console.log(error); });
        }
    };
    return GamesComponent;
}());
GamesComponent = __decorate([
    core_1.Component({
        selector: 'app-games',
        templateUrl: './games.component.html',
        styleUrls: ['./games.component.scss']
    }),
    __metadata("design:paramtypes", [game_service_1.GameService,
        forms_1.FormBuilder,
        http_1.Http,
        toast_component_1.ToastComponent])
], GamesComponent);
exports.GamesComponent = GamesComponent;
//# sourceMappingURL=games.component.js.map
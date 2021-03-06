System.register(['./mock-heroes', 'angular2/core', 'angular2/http', 'rxjs/Observable', 'localStorage', 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var mock_heroes_1, core_1, http_1, Observable_1, localStorage_1;
    var HeroService;
    return {
        setters:[
            function (mock_heroes_1_1) {
                mock_heroes_1 = mock_heroes_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (localStorage_1_1) {
                localStorage_1 = localStorage_1_1;
            },
            function (_1) {}],
        execute: function() {
            HeroService = (function () {
                function HeroService(http) {
                    this.http = http;
                    this.pharmacys = [];
                    this.loggedIn = false;
                    this.loggedIn = !!localStorage_1.localStorage.getItem('auth_token');
                }
                HeroService.prototype.login = function (email, password) {
                    var _this = this;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this.http
                        .post('/login', JSON.stringify({ email: email, password: password }), { headers: headers })
                        .map(function (res) { return res.json(); })
                        .map(function (res) {
                        if (res.success) {
                            localStorage_1.localStorage.setItem('auth_token', res.auth_token);
                            _this.loggedIn = true;
                        }
                        return res.success;
                    });
                };
                HeroService.prototype.logout = function () {
                    localStorage_1.localStorage.removeItem('auth_token');
                    this.loggedIn = false;
                };
                HeroService.prototype.isLoggedIn = function () {
                    return this.loggedIn;
                };
                HeroService.prototype.initSesion = function (item) {
                    var _this = this;
                    var url = "http://localhost:3000/api/login";
                    var body = JSON.stringify(item);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post(url, body, options)
                        .map(function (response) { return response.json(); }).catch(function (error) { return _this.handleError(error); });
                };
                HeroService.prototype.addPharmacy = function (item) {
                    var _this = this;
                    var url = "http://localhost:3000/api/pharmacys";
                    var body = JSON.stringify(item);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post(url, body, options)
                        .map(function (response) { return response.json(); }).catch(function (error) { return _this.handleError(error); });
                };
                HeroService.prototype.getAllPharmacy = function () {
                    var _this = this;
                    var url = "http://localhost:3000/api/tvshows/";
                    return this.http.get(url)
                        .map(function (response) { return response.json(); }).catch(function (error) { return _this.handleError(error); });
                };
                HeroService.prototype.handleError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw("Server error (" + error.status + "): " + error.text());
                };
                HeroService.prototype.getHeroes = function () {
                    return Promise.resolve(mock_heroes_1.HEROES);
                };
                // See the "Take it slow" appendix
                HeroService.prototype.getHeroesSlowly = function () {
                    return new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(mock_heroes_1.HEROES); }, 2000);
                    } // 2 seconds
                    );
                };
                HeroService.prototype.getHero = function (id) {
                    return Promise.resolve(mock_heroes_1.HEROES).then(function (heroes) { return heroes.filter(function (hero) { return hero.password === id; })[0]; });
                };
                HeroService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], HeroService);
                return HeroService;
            }());
            exports_1("HeroService", HeroService);
        }
    }
});
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
//# sourceMappingURL=hero.service.js.map
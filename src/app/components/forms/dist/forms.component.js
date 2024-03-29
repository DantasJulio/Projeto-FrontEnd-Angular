"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FormsComponent = void 0;
var core_1 = require("@angular/core");
var FormsComponent = /** @class */ (function () {
    function FormsComponent(formBuilder, unitService) {
        this.formBuilder = formBuilder;
        this.unitService = unitService;
        this.results = [];
    }
    FormsComponent.prototype.ngOnInit = function () {
        this.formGroup = this.formBuilder.group({
            hour: '',
            showClosed: false
        });
    };
    FormsComponent.prototype.onSubmit = function () {
        this.unitService.getAllUnits().subscribe(function (data) { return console.log(data); });
    };
    FormsComponent.prototype.onClean = function () {
        this.formGroup.reset();
        console.log('Limpo!');
    };
    FormsComponent = __decorate([
        core_1.Component({
            selector: 'app-forms',
            templateUrl: './forms.component.html',
            styleUrls: ['./forms.component.scss']
        })
    ], FormsComponent);
    return FormsComponent;
}());
exports.FormsComponent = FormsComponent;

"use strict";
//Autor: Geovanny Quesada Chanto
//Date: May 14, 2017
//Description: Technical Test for work with GFT Enterprise.
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
var AppComponent = (function () {
    //The constructor initialize the variables of the application.
    function AppComponent() {
        //The array contains the multiple pairs of possible elements for evaluate
        this.pairWiseNumbers = [7, 9, 11, 13, 15, 1, 2, 4, 5];
        this.pageTitle = "Question Number 2";
        this.pageDescription = "Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.";
        this.numberSum = 20;
        this.totalIndices = 0;
        this.totalGeneralIndices = 0;
        this.arrayItemPairs = [];
        this.pairWise = [];
        this.firstElement = 0;
        this.secondElement = 0;
    }
    //This Method display the final result for all the pair of elements 
    //whose sum equal the second argument arg(numberSum)
    AppComponent.prototype.DisplayResults = function (pairWiseNumbers, numberSum) {
        var sumTotal;
        var firstElement;
        var secondElement;
        var positionFirstElement;
        var positionSecondElement;
        //For each element of the Array, the application compare the first 
        //element with the second element
        for (var indexItem = 0; indexItem <= this.pairWiseNumbers.length - 1; indexItem++) {
            for (var indexPair = indexItem + 1; indexPair <= this.pairWiseNumbers.length - 1; indexPair++) {
                //The sumTotal contains the sum of the pair of elements that are evaluate
                //Ejemple: [3,4] = 7(sumTotal)
                sumTotal = Number(this.pairWiseNumbers[indexItem]) + Number(this.pairWiseNumbers[indexPair]);
                //if sumTotal is equal to numberSum that means that this pair 
                //of elements match with the condition that we want to reach
                //but also we need to check it out if these pairs of elements 
                //have not been evaluated before
                if (Number(sumTotal) == this.numberSum) {
                    this.firstElement = Number(this.pairWiseNumbers[indexItem]);
                    this.secondElement = Number(this.pairWiseNumbers[indexPair]);
                    //The  positionFirstElement contains the position of the first element found.
                    positionFirstElement = this.pairWiseNumbers.indexOf(this.firstElement);
                    //The  positionSecondElement contains the position of the second element found.
                    positionSecondElement = this.pairWiseNumbers.indexOf(this.secondElement);
                    this.totalIndices = positionFirstElement + positionSecondElement;
                    //This conditions evaluate if the pairs of elements found have not been evaluated before, if these pair of elements have not been evaluated before, the next step is stored these elements in the final arrays
                    if ((this.arrayItemPairs.indexOf(this.firstElement) < 0) && (this.arrayItemPairs.indexOf(this.secondElement) < 0)) {
                        this.arrayItemPairs.push(this.firstElement);
                        this.arrayItemPairs.push(this.secondElement);
                        this.totalGeneralIndices = this.totalGeneralIndices + positionFirstElement + positionSecondElement;
                    }
                    //The variable modal represent a variable of IPairWise interfaces
                    //The IPairWise represent the interface of elements that we want to stored, it is like a structure of elements that contains the information that we want to display
                    var modal = {};
                    modal.firstElement = this.firstElement;
                    modal.secondElement = this.secondElement;
                    modal.posFirstElement = positionFirstElement;
                    modal.posSecondElement = positionSecondElement;
                    modal.sumElements = this.firstElement + this.secondElement;
                    modal.sumPositions = this.totalIndices;
                    this.pairWise.push(modal);
                }
            }
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'pm-app',
        templateUrl: 'pairWise.component.html',
        styleUrls: ['styles.css']
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
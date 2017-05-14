//Autor: Geovanny Quesada Chanto
//Date: May 14, 2017
//Description: Technical Test for work with GFT Enterprise.


import { Component } from '@angular/core';
import { IPairWise } from './pairWise';

@Component({
    selector: 'pm-app',
    templateUrl: 'pairWise.component.html',
    styleUrls: ['styles.css']
})

export class AppComponent {

    //The array contains the multiple pairs of possible elements for evaluate
    pairWiseNumbers = [7, 9, 11, 13, 15,1,2,4,5];
    
    //The pageTitle contains the title of the page
    pageTitle: string;
    //The pageDescription contains the description of the page
    pageDescription: string;

    //The numberSum contains the value of the second argument     
    numberSum: number;

    //The totalIndices contains the total of the index positions for a particular pair of elements
    //For example: [0+3] = 3(totalIndices)
    totalIndices: number;

    //The totalGeneralIndices contains the total of all index positions
    //For example: [0+3] = 3, [1+2] = 3 -->  6(totalGeneralIndices)
    totalGeneralIndices: number;


    //The arrayItemPairs contains the arrays for all pairs of elements their sums does not match with numberSum     
    arrayItemPairs:any;
    //The firstElement contains the first element of pair of elements
    //Example: [3,4] --->  3(firstElement)
    firstElement:number;
     //The secondElement contains the second element of pair of elements
    //Example: [3,4] --->  4(secondElement)
    secondElement:number;


    //The pairWise is an object that contains the result for the all pairs of elements
    //This object represent and array of PairWise interfaces
    pairWise: any;
   
    

    
    
    

    //The constructor initialize the variables of the application.
    constructor() {
        this.pageTitle = `Question Number 2`;
        this.pageDescription = `Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.`;
        this.numberSum = 20;
        this.totalIndices = 0;
        this.totalGeneralIndices = 0;
        this.arrayItemPairs = [];
        this.pairWise = [];
        this.firstElement =  0;
        this.secondElement =  0;
        
        
        
    }

    //This Method display the final result for all the pair of elements 
    //whose sum equal the second argument arg(numberSum)
    DisplayResults(pairWiseNumbers: any, numberSum: number): void {
      
     
        let sumTotal: number;
        let firstElement: number;
        let secondElement: number;
        let positionFirstElement: number;
        let positionSecondElement: number;
        
        //For each element of the Array, the application compare the first 
        //element with the second element
        for (let indexItem = 0; indexItem <= this.pairWiseNumbers.length - 1; indexItem++) {
            for (let indexPair = indexItem + 1; indexPair <= this.pairWiseNumbers.length - 1; indexPair++) {

                //The sumTotal contains the sum of the pair of elements that are evaluate
                //Ejemple: [3,4] = 7(sumTotal)
                sumTotal = Number(this.pairWiseNumbers[indexItem]) + Number(this.pairWiseNumbers[indexPair])
               
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
                     if ((this.arrayItemPairs.indexOf(this.firstElement) < 0) && (this.arrayItemPairs.indexOf(this.secondElement) < 0))
                     {
                        this.arrayItemPairs.push(this.firstElement);
                        this.arrayItemPairs.push(this.secondElement);
                        
                        this.totalGeneralIndices = this.totalGeneralIndices +  positionFirstElement + positionSecondElement;
                     }
                        //The variable modal represent a variable of IPairWise interfaces
                        //The IPairWise represent the interface of elements that we want to stored, it is like a structure of elements that contains the information that we want to display
                        var modal = <IPairWise>{};
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
        }

    }






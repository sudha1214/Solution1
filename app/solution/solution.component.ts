import { FunctionService } from './services/functionService';
import { IFunctionModel } from './functionModel';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';


const TEN_TERRABYTE = (10 * 1024 * 1024);
const TWENTY_TERRABYTE = 2 * TEN_TERRABYTE;

@Component({
   moduleId: __moduleName,
   selector: 'my-solution',
   templateUrl: 'solution.component.html',
   styleUrls: ['solution.css']
})


export class SolutionComponent implements OnInit {
   faasStatuses: Observable<IFunctionModel[]>;
   IDS: string[] = ['1', '2', '3', '4', '5', '6', '7', '8'];

   constructor(public faasStatusService: FunctionService) {
   }

   isAmberAlert(memory) {
      return memory >  TEN_TERRABYTE &&
         memory < TWENTY_TERRABYTE;
   }
   isRedAlert(memory) {
      return memory >= TWENTY_TERRABYTE;
   }
   ngOnInit() {
      this.faasStatuses = this.faasStatusService.getFunctionIdsStatus$(this.IDS);
   }
}


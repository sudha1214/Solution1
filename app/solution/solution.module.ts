import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SolutionComponent } from './solution.component';
import { FunctionService } from './services/functionService';
import { ClarityModule } from 'clarity-angular';


@NgModule({
   imports: [SharedModule,  ClarityModule.forRoot()],
   declarations: [SolutionComponent],
   exports: [SolutionComponent],
   providers: [FunctionService]
})
export class SolutionModule { }

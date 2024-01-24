import { NgModule } from "@angular/core";
import { CounterComponetn } from './components/counter/counter.component';



@NgModule({
  declarations:[
    CounterComponetn
  ],
  exports:[
    CounterComponetn
  ]
})

export class CounterModule{

}

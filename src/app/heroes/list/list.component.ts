import { Component } from '@angular/core';
import { consumerPollProducersForChange } from '@angular/core/primitives/signals';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

    public heroNames: string[] = ['Spiderman','Ironman','Hulk','Thor','She Hulk'];

    public deletedHero?: string;
    removelastHero(): void {
      this.deletedHero = this.heroNames.pop();


    }




}

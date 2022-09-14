import { Component, OnInit } from '@angular/core';
import { champions } from '../champion-sheet';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.scss']
})
export class ChampionsComponent implements OnInit {
  champions = champions;

  constructor() { }

  convertStar(n:number): string {
    var result:string = '';
    for (var i:number = 0; i < 5; i++) {
      if (i < n)
        result += '★'
      else
        result += '☆'
    }
    return result;
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  coins: any[] = []
  constructor(private testService: TestService) { }

  ngOnInit() {
    this.testService.getCoins().subscribe(res => {
      this.coins = res;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import{BreakfastService} from '../Services/user.service';
@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {
  title = "Breakfast";
 OnBreakfast() {
  const breakfastService = new BreakfastService()
  breakfastService.OnBreakfastClicked(this.title)
 }

  ngOnInit(): void {
  }

}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Flower} from '../flower';

@Component({
  selector: 'app-flower-list',
  templateUrl: './flower-list.component.html',
  styleUrls: ['./flower-list.component.css']
})
export class FlowerListComponent implements OnInit {
  public flower: Flower; // the selected flower
  @Input() public flowers: Flower[];
  @Output() public flowerSelected = new EventEmitter();

  public selectFlower(i: number): void {
    this.flower = this.flowers[i];
    this.flowerSelected.emit(this.flower);
  }

  ngOnInit(): void {
    this.flower = this.flowers[0];
  }
}

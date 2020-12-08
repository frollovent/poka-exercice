import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'poka-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.scss']
})
export class PlantComponent {
  @Input() public plant: any;
}

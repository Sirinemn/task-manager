import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-tips',
  standalone: true,
  imports: [HeaderComponent,
    RouterModule,
    NgIf
  ],
  templateUrl: './tips.component.html',
  styleUrl: './tips.component.css'
})
export class TipsComponent {

  public more:boolean = false;

  moreTips() {
    this.more = true;
  }
  lessTips() {
    this.more = false;
  }

}

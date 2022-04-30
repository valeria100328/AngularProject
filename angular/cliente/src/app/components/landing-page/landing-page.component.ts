import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  @Input() navbar_categoria: any
  @Input() landing: any
  hide : boolean = true;
  

  constructor() { }

  ngOnInit(): void {
  }

}


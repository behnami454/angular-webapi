import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {HomeService} from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('rendererCanvas', {static: true})
  rendererCanvas: ElementRef<HTMLCanvasElement>;

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.createScene(this.rendererCanvas);
    this.homeService.animate();
  }

}

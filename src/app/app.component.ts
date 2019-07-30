import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  level0: string;
  level1: string;
  level2: string;
  level3: string;
  level4: string;
  kidding1: string;
  regression2: string;
  validated3: string;
  purchased4: string;
  existing5: string;
  grey: string;
  white: string;
  black: string;
  system: string;
  unit: string;
  acceptance: string;
  integration: string;

  score: number = 0;
  scoreLabel: string = '-/17';

  submitAnswers() {
    this.score = 0;

    if(this.level0 === '0') {
      this.score = this.score + 1;
    }
    if(this.level1 === '1') {
      this.score = this.score + 1;
    }
    if(this.level2 === '2') {
      this.score = this.score + 1;
    }
    if(this.level3 === '3') {
      this.score = this.score + 1;
    }
    if(this.level4 === '4') {
      this.score = this.score + 1;
    }

    if(this.kidding1 === '1') {
      this.score = this.score + 1;
    }
    if(this.regression2 === '2') {
      this.score = this.score + 1;
    }
    if(this.validated3 === '3') {
      this.score = this.score + 1;
    }
    if(this.purchased4 === '4') {
      this.score = this.score + 1;
    }
    if(this.existing5 === '5') {
      this.score = this.score + 1;
    }

    if(this.grey === "grey") {
      this.score = this.score + 1;
      console.log(this.grey);
    }
    if(this.white === "white") {
      this.score = this.score + 1;
    }
    if(this.black === "black") {
      this.score = this.score + 1;
    }

    if(this.system === 'system') {
      this.score = this.score + 1;
    }
    if(this.unit === 'unit') {
      this.score = this.score + 1;
    }
    if(this.acceptance === "acceptance") {
      this.score = this.score + 1;
    }
    if(this.integration === 'integration') {
      this.score = this.score + 1;
    }
  
    this.scoreLabel = this.score + '/17';
  }
}

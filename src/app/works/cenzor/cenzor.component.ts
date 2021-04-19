import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.css']
})
export class CenzorComponent implements OnInit {

  badwords: string[] = ['Java', 'Tottenham'];
  cenzorwords: string[];
  enter: string;
  text: string = 'Java Tottenham';
  textarea: string;
  invalidtext: boolean = false;
  invalidarea: boolean = false;
  holdertext: string = 'word here..';
  holderarea: string = 'text here..';

  constructor() { }

  ngOnInit(): void {
  }

  add(): void {
    if (!this.enter) {
      this.invalidtext = true;
      this.holdertext = 'please write a word!'
    }
    else {
      this.badwords.push(this.enter);
      this.text = this.badwords.join(' ');
      this.enter = '';
      this.invalidtext = false;
      this.holdertext = 'word here..'
    }

  }

  cenzor(): void {
    if (!this.textarea) {
      this.invalidarea = true;
      this.holderarea = 'please write a text!'
    }
    else {
      this.cenzorwords = this.textarea.split(' ');
      for (let i = 0; i < this.cenzorwords.length; i++) {
        for (let j = 0; j < this.badwords.length; j++) {
          if (this.cenzorwords[i] == this.badwords[j]) {
            this.cenzorwords[i] = '*'.repeat(this.cenzorwords[i].length);
          }
        }
      }
      this.textarea = this.cenzorwords.join(' ');
      this.holderarea = 'text here..'
      this.invalidarea = false;
    }
  }

  reset(): void {
    this.badwords = [];
    this.textarea = '';
    this.enter = '';
    this.text = '';
    this.invalidarea = false;
    this.invalidtext = false;
    this.holderarea = 'text here..'
    this.holdertext = 'word here..'
  }
}
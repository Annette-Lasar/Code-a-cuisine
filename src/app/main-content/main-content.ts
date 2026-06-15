import { Component } from '@angular/core';
import { Hero } from './hero/hero';

@Component({
  selector: 'cuis-main-content',
  imports: [Hero],
  templateUrl: './main-content.html',
  styleUrl: './main-content.scss',
})
export class MainContent {}

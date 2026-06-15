import { Component } from '@angular/core';
import { Logo } from '../../shared/components/logo/logo';

@Component({
  selector: 'cuis-hero',
  imports: [Logo],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {}

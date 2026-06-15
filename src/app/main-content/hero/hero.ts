import { Component } from '@angular/core';
import { Logo } from '../../shared/components/logo/logo';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'cuis-hero',
  imports: [Logo, RouterModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {}

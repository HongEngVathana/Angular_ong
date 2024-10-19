import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-contactme',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './contactme.component.html',
  styleUrl: './contactme.component.css',
})
export class ContactmeComponent {}

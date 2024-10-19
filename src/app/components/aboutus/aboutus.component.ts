import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [HomeComponent, FormsModule, CommonModule],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css',
})
export class AboutusComponent {
  FormDataList: any[] = [];

  constructor() {
    const stroeData = localStorage.getItem('formDataList');
    if (stroeData) {
      this.FormDataList = JSON.parse(stroeData);
    }
  }
  GetFormSubmit(data: any) {
    this.FormDataList.push(data);
    console.log(data);

    localStorage.setItem('formDataList', JSON.stringify(this.FormDataList));
  }
}

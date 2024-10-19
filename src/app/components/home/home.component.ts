import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  output,
  ɵgetOutputDestroyRef,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  @Input() First_name?: string;
  @Input() Last_nmae?: string;
  @Input() Company_name?: string;
  @Input() Adress?: number;
  @Input() Email?: string;
  @Input() Phone?: number;
  @Input() Addititonal_Information?: string;
  @Output() FormSubmit = new EventEmitter<any>();

  FormData = {
    First_name: '',
    Last_nmae: '',
    Company_name: '',
    Adress: '',
    Email: '',
    Phone: '',
    Addititonal_Information: '',
  };
  onSubmit() {
    this.FormSubmit.emit(this.FormData);
  }
}

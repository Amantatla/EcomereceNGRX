import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from "./counter/counter.component";
import { AppState } from './states/app.state';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectCount } from './states/counter/counter.selector';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  conunt$: Observable<number>;
  constructor(private store:Store<AppState>) {
    this.conunt$ = this.store.select(selectCount)
  }
  title = 'counExample';
}

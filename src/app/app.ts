import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-time-app');
  protected readonly currentTime = signal('');
  protected readonly showTime = signal(false);

  showCurrentTime() {
    const now = new Date();
    const timeString = now.toLocaleString('zh-CN');
    this.currentTime.set(timeString);
    this.showTime.set(true);
  }
}

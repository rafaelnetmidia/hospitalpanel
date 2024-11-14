import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentTime: string = '';

  constructor() { }

  ngOnInit(): void{
    setInterval(() => this.updateTime(), 1000); // Atualiza a cada segundo
  }

  updateTime(): void {
    const now = new Date();
    this.currentTime = now.toLocaleString(); // Exibe data e hora local formatadas
  }

}

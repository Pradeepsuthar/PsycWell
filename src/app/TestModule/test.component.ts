import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {

  ngOnInit() { }

  public isScrolled = false;
  constructor() { }

  @HostListener('document:scroll')
  onWindowScroll() {
    const number = document.body.scrollTop;
    console.log("scroll:", number);
    if (number > 150) {
      this.isScrolled = true;
    } else if (this.isScrolled && number < 2) {
      this.isScrolled = false;
    }
  }

}

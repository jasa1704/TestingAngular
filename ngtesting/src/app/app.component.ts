import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  @ViewChild('result') result:any;
  @ViewChild('num1') num1:any;
  @ViewChild('num2') num2:any;
  title = 'ngtesting';

  public ngOnInit(): void {

  }

  public add(num1: number, num2: number): number {
    return Number(num1) + Number(num2);
  }

  public printAdd(): any {
    const num1 = this.num1.nativeElement.value;
    const num2 = this.num1.nativeElement.value;
    this.result.nativeElement.value = this.add(num1,num2);
  }
}

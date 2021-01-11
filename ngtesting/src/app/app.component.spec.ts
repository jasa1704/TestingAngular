import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  /////// Testing inicial////
  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     imports: [
  //       RouterTestingModule
  //     ],
  //     declarations: [
  //       AppComponent
  //     ],
  //   }).compileComponents();
  // });

  // it('should create the app', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app).toBeTruthy();
  // });

  // it(`should have as title 'ngtesting'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('ngtesting');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('ngtesting app is running!');
  // });

  /////Testing toEquel ////////

  // let app: AppComponent;

  // beforeEach(async (() => {
  //   app = new AppComponent();
  // }));

  // it('Las suma debe dar 4', async (() =>{
  //   expect(app.add(2,2)).toEqual(4);
  // }))

  ////////Testing  /////////
  let n = 0;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).createComponent(AppComponent);

    afterEach(async (() =>{
      // (<HTMLInputElement>document.getElementById('num1')).value = '0';
      // (<HTMLInputElement>document.getElementById('num2')).value = '0';
      // document.getElementById('calc')?.click();
      n++;
    }));

    it('Las suma debe dar 2', async (() =>{
      /// beforeEach
      (<HTMLInputElement>document.getElementById('num1')).value = n.toString();
      (<HTMLInputElement>document.getElementById('num2')).value = '2';
      document.getElementById('calc')?.click();
      expect((<HTMLInputElement>document.getElementById('result')).value).toBe('2');
      /// afterEach
    }));

    it('Las suma debe dar 3', async (() =>{
      // beforeEach
      (<HTMLInputElement>document.getElementById('num1')).value = n.toString();
      (<HTMLInputElement>document.getElementById('num2')).value = '3';
      document.getElementById('calc')?.click();
      expect((<HTMLInputElement>document.getElementById('result')).value).toBe('3');
      // afterEach
    }))

  });

});

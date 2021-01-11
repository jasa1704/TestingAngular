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

  ////////Testing beforeEach, afterEach y tobe /////////
  // let n = 0;
  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [
  //       AppComponent
  //     ],
  //   }).compileComponents();
  //   TestBed.configureTestingModule({
  //     declarations: [
  //       AppComponent
  //     ],
  //   }).createComponent(AppComponent);

  //   afterEach(async (() =>{
  //     // (<HTMLInputElement>document.getElementById('num1')).value = '0';
  //     // (<HTMLInputElement>document.getElementById('num2')).value = '0';
  //     // document.getElementById('calc')?.click();
  //     n++;
  //   }));

  //   it('Las suma debe dar 2', async (() =>{
  //     /// beforeEach
  //     (<HTMLInputElement>document.getElementById('num1')).value = n.toString();
  //     (<HTMLInputElement>document.getElementById('num2')).value = '2';
  //     document.getElementById('calc')?.click();
  //     expect((<HTMLInputElement>document.getElementById('result')).value).toBe('2');
  //     /// afterEach
  //   }));

  //   it('Las suma debe dar 3', async (() =>{
  //     // beforeEach
  //     (<HTMLInputElement>document.getElementById('num1')).value = n.toString();
  //     (<HTMLInputElement>document.getElementById('num2')).value = '3';
  //     document.getElementById('calc')?.click();
  //     expect((<HTMLInputElement>document.getElementById('result')).value).toBe('3');
  //     // afterEach
  //   }))
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

    it('Las suma debe dar 2', async (() =>{
      (<HTMLInputElement>document.getElementById('num1')).value = '0';
      (<HTMLInputElement>document.getElementById('num2')).value = '2';
      document.getElementById('calc')?.click();
      expect((<HTMLInputElement>document.getElementById('result')).value).toBe('2'); // Igual a
      //expect((<HTMLInputElement>document.getElementById('result')).value).not.toBe('2'); // Negar igualdad
      //expect((<HTMLInputElement>document.getElementById('result')).value).toEqual('2'); // Estrictamente igual a
    })); 

    it('contiene SumApp', async(()=>{
      const title = document.getElementById('title')?.innerHTML;

      expect(title).toContain('SumApp'); // Contiene la palabra SumApp
    }));

    it('descripcion contiene (app)', async(()=>{
      const des = document.getElementById('description')?.innerHTML;

      expect(des).toMatch('\(app\)'); // Contiene (app)
    }));

    it('titulo está definido', async(()=>{
      const title = document.getElementById('title')?.innerHTML;

      expect(title).toBeDefined(); // Está definido
      // expect(title).toBeUndefined(); // Está indefinido
      // expect(title).toBeNull(); // Es Null
      // expect(title).not.toBeNull(); // No es Null
    }));

    it('Las suma es mayor a 3', async (() =>{
      (<HTMLInputElement>document.getElementById('num1')).value = '2';
      (<HTMLInputElement>document.getElementById('num2')).value = '2';
      document.getElementById('calc')?.click();
      expect((<HTMLInputElement>document.getElementById('result')).value).toBeGreaterThan(3); // Mayor a
    })); 

    it('Las suma es menor a 5', async (() =>{
      (<HTMLInputElement>document.getElementById('num1')).value = '2';
      (<HTMLInputElement>document.getElementById('num2')).value = '2';
      document.getElementById('calc')?.click();
      expect((<HTMLInputElement>document.getElementById('result')).value).toBeLessThan(5); // Menor a
    })); 

    it('Las suma es cercana a 4', async (() =>{
      (<HTMLInputElement>document.getElementById('num1')).value = '2';
      (<HTMLInputElement>document.getElementById('num2')).value = '2';
      document.getElementById('calc')?.click();
      expect((<HTMLInputElement>document.getElementById('result')).value).toBeCloseTo(4, 0.1); // Cercana a 4 +/- 0.1 = 3.9+4.1
    })); 

    it('funcion throw', async(()=>{
      const foo  = function() {
        return 2 + 2;
      }

      expect(foo).not.toThrow(); // Comprueba que la funcion no tiene errores ejemplo de prueba para que de error
      //expect(foo).toThrow();
    }));

  });

});

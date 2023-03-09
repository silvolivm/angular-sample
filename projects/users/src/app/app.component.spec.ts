import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents(); // Compila el componente
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent); //Forma de entrar dentro del componente y ejecutarlo
    const app = fixture.componentInstance; // El componente que ya existe
    expect(app).toBeTruthy(); // Sería como el toBeInTheDocument()
  });

  it(`should have as title 'users'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Users'); // La variable dentro del componente, sin pintarla, podes comprobarla
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const renderer = fixture.nativeElement as HTMLElement; // Sería el html ya renderizado
    expect(renderer.querySelector('.content span')?.textContent).toContain(
      'Users app is running!'
    ); // Compruevo que en el componente ya renderizado, puedo hacer querySelector y lo que me de la gana (disparar un click, etc)
  });
});

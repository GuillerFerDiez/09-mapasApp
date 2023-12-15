import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcadoresComponent } from './marcadores.component';

describe('MarcadoresComponent', () => {
  let component: MarcadoresComponent;
  let fixture: ComponentFixture<MarcadoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarcadoresComponent]
    });
    fixture = TestBed.createComponent(MarcadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

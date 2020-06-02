import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EraUmaVezPage } from './era-uma-vez.page';

describe('EraUmaVezPage', () => {
  let component: EraUmaVezPage;
  let fixture: ComponentFixture<EraUmaVezPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EraUmaVezPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EraUmaVezPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScoobPage } from './scoob.page';

describe('ScoobPage', () => {
  let component: ScoobPage;
  let fixture: ComponentFixture<ScoobPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoobPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScoobPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

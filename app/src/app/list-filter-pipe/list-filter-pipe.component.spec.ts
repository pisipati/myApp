import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFilterPipeComponent } from './list-filter-pipe.component';

describe('ListFilterPipeComponent', () => {
  let component: ListFilterPipeComponent;
  let fixture: ComponentFixture<ListFilterPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFilterPipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFilterPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

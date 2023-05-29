import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDataComponent } from './book-data.component';
import { TruncatePipe } from '../truncate.pipe';

describe('BookDataComponent', () => {
  let component: BookDataComponent;
  let fixture: ComponentFixture<BookDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookDataComponent, TruncatePipe]
    });
    fixture = TestBed.createComponent(BookDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

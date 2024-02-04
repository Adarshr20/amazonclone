import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyComponent } from './body.component';

describe('BodyComponent', () => {
  let component: BodyComponent;
  let fixture: ComponentFixture<BodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BodyComponent], // Declare the component here
    }).compileComponents();

    fixture = TestBed.createComponent(BodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should clear bookDetails if it is not empty', () => {
    component.bookDetails = 'Some book details';
    component.getBookDetails(0);
    expect(component.bookDetails).toBe('');
  });

  it('should set bookDetails and bookid if bookDetails is empty', () => {
    const index = 0;
    component.getBookDetails(index);
    expect(component.bookDetails).toBe(component.bookArray[index].desc);
    expect(component.bookid).toBe(component.bookArray[index].id);
  });
});

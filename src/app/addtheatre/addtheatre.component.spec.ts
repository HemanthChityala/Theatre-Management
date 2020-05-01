import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { addtheatreComponent } from "./addtheatre.component";

describe("addtheatreComponent", () => {
  let component: addtheatreComponent;
  let fixture: ComponentFixture<addtheatreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [addtheatreComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(addtheatreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

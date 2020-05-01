import { TestBed } from "@angular/core/testing";

import { theatreService } from "./theatre.service";

describe("theatreService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: theatreService = TestBed.get(theatreService);
    expect(service).toBeTruthy();
  });
});

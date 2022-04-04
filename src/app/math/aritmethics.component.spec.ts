import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Aritmethics } from './aritmethics';

describe('Aritmethics', () => {
  let service: Aritmethics;
  // let fixture: ComponentFixture<>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [Aritmethics]
    }).compileComponents();
    service = TestBed.inject(Aritmethics);
  });

  it('Sum of 5 and 10 returns 15.', () => {
    service.sum(5, 10).then((result: number) => expect(result).toBe(15));
  });
});

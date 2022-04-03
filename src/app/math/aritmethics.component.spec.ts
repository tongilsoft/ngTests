import { TestBed } from '@angular/core/tests';
import { Aritmethics } from './aritmethics';

describe('Aritmethics', () => {
  let component: Aritmethics;

  beforeEach(() => {
    component = TestBed.inject('Aritmethics');

  }).compileComponent();

  it('Sum of 5 and 10 returns 15.', () => {
    component.sum(5, 10).then((result: number) => {
      expect(result).toBe(15);
    }
  });
});

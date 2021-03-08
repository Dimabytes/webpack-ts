import path from 'path';
import fs from 'fs';
import { fn } from '../index';

const getFixturePath = (filename: string) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename: string) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const expectedValue = JSON.parse(readFile('expect.json'));

test('getClassroomsWithLessons', () => {
  const res = fn();
  expect(res).toEqual(expectedValue);
});

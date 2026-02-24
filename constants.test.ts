import { test } from 'node:test';
import assert from 'node:assert';
import { COGNITIVE_FRAMEWORKS } from './constants.ts';

test('COGNITIVE_FRAMEWORKS should have the correct structure', () => {
  assert(Array.isArray(COGNITIVE_FRAMEWORKS), 'COGNITIVE_FRAMEWORKS should be an array');
  assert(COGNITIVE_FRAMEWORKS.length > 0, 'COGNITIVE_FRAMEWORKS should not be empty');

  COGNITIVE_FRAMEWORKS.forEach((framework) => {
    assert.strictEqual(typeof framework.id, 'string', `Framework ${framework.id} should have a string id`);
    assert.strictEqual(typeof framework.name, 'string', `Framework ${framework.id} should have a string name`);
    assert.strictEqual(typeof framework.description, 'string', `Framework ${framework.id} should have a string description`);
    assert.strictEqual(typeof framework.structure, 'string', `Framework ${framework.id} should have a string structure`);

    // Check that strings are not empty
    assert(framework.id.length > 0, `Framework id should not be empty`);
    assert(framework.name.length > 0, `Framework name should not be empty`);
    assert(framework.description.length > 0, `Framework description should not be empty`);
    assert(framework.structure.length > 0, `Framework structure should not be empty`);
  });
});

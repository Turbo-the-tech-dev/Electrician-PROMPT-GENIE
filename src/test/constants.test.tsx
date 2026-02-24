import { test } from 'node:test';
import assert from 'node:assert';
import React from 'react';
import { ElectricianGenieIcon, POPULAR_TEMPLATES, COGNITIVE_FRAMEWORKS } from '../constants';

test('ElectricianGenieIcon is a memoized component', () => {
  // Check if the component is wrapped in React.memo
  // React.memo components have $$typeof as Symbol.for('react.memo')
  const memoType = Symbol.for('react.memo');

  // @ts-ignore
  const type = ElectricianGenieIcon.$$typeof;

  assert.strictEqual(type, memoType, 'ElectricianGenieIcon should be a memoized component');
});

test('POPULAR_TEMPLATES are exported correctly', () => {
  assert.ok(Array.isArray(POPULAR_TEMPLATES), 'POPULAR_TEMPLATES should be an array');
  assert.strictEqual(POPULAR_TEMPLATES.length, 3, 'Should have 3 popular templates');

  const template = POPULAR_TEMPLATES[0];
  assert.ok(template.id, 'Template should have an id');
  assert.ok(template.title, 'Template should have a title');
});

test('COGNITIVE_FRAMEWORKS are exported correctly', () => {
  assert.ok(Array.isArray(COGNITIVE_FRAMEWORKS), 'COGNITIVE_FRAMEWORKS should be an array');
  assert.strictEqual(COGNITIVE_FRAMEWORKS.length, 3, 'Should have 3 cognitive frameworks');

  const framework = COGNITIVE_FRAMEWORKS[0];
  assert.ok(framework.id, 'Framework should have an id');
  assert.ok(framework.name, 'Framework should have a name');
});

import { describe, it } from 'node:test';
import assert from 'node:assert';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { ElectricianGenieIcon, POPULAR_TEMPLATES, COGNITIVE_FRAMEWORKS } from './constants';

describe('Constants', () => {
  it('should export POPULAR_TEMPLATES', () => {
    assert.ok(Array.isArray(POPULAR_TEMPLATES));
    assert.strictEqual(POPULAR_TEMPLATES.length, 3);
  });

  it('should export COGNITIVE_FRAMEWORKS', () => {
    assert.ok(Array.isArray(COGNITIVE_FRAMEWORKS));
    assert.strictEqual(COGNITIVE_FRAMEWORKS.length, 3);
  });
});

describe('ElectricianGenieIcon', () => {
  it('should render correctly', () => {
    const html = renderToStaticMarkup(<ElectricianGenieIcon />);
    assert.ok(html.includes('⚡'));
    assert.ok(html.includes('🛠️'));
  });

  it('should be a memoized component', () => {
    assert.strictEqual(typeof ElectricianGenieIcon, 'object');
  });

  it('should return the same element reference (hoisted)', () => {
    // Access the inner function of the memoized component
    // @ts-ignore - Accessing internal property for testing optimization
    const Component = ElectricianGenieIcon.type;
    const element1 = Component();
    const element2 = Component();
    assert.strictEqual(element1, element2);
  });
});

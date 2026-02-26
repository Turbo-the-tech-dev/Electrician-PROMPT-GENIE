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

  it('should return a static element reference', () => {
    const element1 = ElectricianGenieIcon();
    const element2 = ElectricianGenieIcon();
    assert.strictEqual(element1, element2);
  });
});

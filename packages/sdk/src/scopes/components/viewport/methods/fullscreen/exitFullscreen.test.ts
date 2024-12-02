import { beforeEach, describe, vi } from 'vitest';

import { testSafety } from '@test-utils/predefined/testSafety.js';
import { resetPackageState } from '@test-utils/reset/reset.js';
import { mockPostEvent } from '@test-utils/mockPostEvent.js';

import { isMounted } from '../../signals/mounting.js';
import { exitFullscreen } from './exitFullscreen.js';

beforeEach(() => {
  resetPackageState();
  vi.restoreAllMocks();
  mockPostEvent();
});

describe('safety', () => {
  testSafety(exitFullscreen, 'exitFullscreen', {
    component: 'viewport',
    minVersion: '8.0',
    isMounted,
  });
});
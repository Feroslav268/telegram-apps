import {
  isCheckingHomeScreenStatus,
  checkHomeScreenStatusError,
  checkHomeScreenStatusPromise,
} from '@/scopes/utilities/home-screen/checkHomeScreenStatus.js';
import { resetSignal } from '@test-utils/reset/reset.js';

export function resetHomeScreen() {
  [
    isCheckingHomeScreenStatus,
    checkHomeScreenStatusError,
    checkHomeScreenStatusPromise,
  ].forEach(resetSignal);
}
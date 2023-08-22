import { Signal, computed } from '@angular/core';
import { equal } from './equal.util';

export function selectSignal<T>(computation: () => T): Signal<T> {
  return computed(computation, { equal });
}

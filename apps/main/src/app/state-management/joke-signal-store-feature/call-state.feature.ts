import { computed } from '@angular/core';

import { HttpErrorResponse } from '@angular/common/http';
import { signalStoreFeature, withComputed, withState } from '@angular-signals/signals-store';

export type CallState = 'init' | 'loading' | 'loaded' | { error: HttpErrorResponse };

export function withCallState() {
  return signalStoreFeature(
    withState<{ callState: CallState }>({ callState: 'init' }),
    withComputed(({ callState }) => ({
      loading: computed(() => callState() === 'loading'),
      loaded: computed(() => callState() === 'loaded'),
      error: computed(() => {
        const state = callState();
        return typeof state === 'object' ? state.error : null
      }),
    }))
  );
}

export function setLoading(): { callState: CallState } {
  return { callState: 'loading' };
}

export function setLoaded(): { callState: CallState } {
  return { callState: 'loaded' };
}

export function setError(error: HttpErrorResponse): { callState: CallState } {
  return { callState: { error } };
}

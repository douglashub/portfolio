import { createSelector, createFeatureSelector } from '@ngrx/store';
import { RouterStateUrl } from './router-state.custom-serializer';

export interface RouterState {
  state: RouterStateUrl;
  navigationId: number;
}

const getRouterState = createFeatureSelector<RouterState>('router');

// tslint:disable-next-line: no-namespace
export namespace RouterStateSelector {
  export const getState = createSelector(getRouterState, state => state && state.state);

  export const getCurrentUrl = createSelector(getRouterState, state => state && state.state && state.state.url);

  export const getCurrentPageTitle = createSelector(getRouterState, state => state && state.state && state.state.title);

  export const getCurrentPageIndex = createSelector(getRouterState, state => state && state.state && state.state.index);

  export const getCurrentParams = createSelector(getRouterState, state => state && state.state && state.state.params);

  export const getCurrentQueryParams = createSelector(
    getRouterState,
    state => state && state.state && state.state.queryParams
  );
}

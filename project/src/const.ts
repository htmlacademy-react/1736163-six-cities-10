export enum AppRoute {
  Login = '/login',
  Favourites = '/favourites',
  Root = '/',
  Room = ':id'
}

export enum AuthorizationStatus {
  Auth='AUTH',
  NoAuth='NO_AUTH',
  Unknown='UNKNOWN'
}

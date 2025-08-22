export class Session {
  get(key: string): any {
    return window.sessionStorage.getItem(key);
  }

  set(key: string, value: any): void {
    window.sessionStorage.setItem(key, value);
  }

  delete(key: string): void {
    window.sessionStorage.removeItem(key);
  }
}

export class Local {
  get(key: string): any {
    return window.localStorage.getItem(key);
  }

  set(key: string, value: any): void {
    window.localStorage.setItem(key, value);
  }

  delete(key: string): void {
    window.localStorage.removeItem(key);
  }
}

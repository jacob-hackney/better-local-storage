import { Local } from "./lib/local.js";
import { Session } from "./lib/session.js";

const betterLocalStorage = new Proxy(new Local(), {
  get(target, prop: string) {
    if (typeof target[prop as keyof Local] !== "undefined") {
      return target[prop as keyof Local];
    }
    return target.get(prop);
  },
  set(target, prop: string, value) {
    target.set(prop, value);
    return true;
  },
  deleteProperty(target, prop: string) {
    target.delete(prop);
    return true;
  },
});
const betterSessionStorage = new Proxy(new Session(), {
  get(target, prop: string) {
    if (typeof target[prop as keyof Session] !== "undefined") {
      return target[prop as keyof Session];
    }
    return target.get(prop);
  },
  set(target, prop: string, value) {
    target.set(prop, value);
    return true;
  },
  deleteProperty(target, prop: string) {
    target.delete(prop);
    return true;
  },
});

export { betterLocalStorage, betterSessionStorage };
export default { local: betterLocalStorage, session: betterSessionStorage };

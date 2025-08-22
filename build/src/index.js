import { Local } from "./lib/local.js";
import { Session } from "./lib/session.js";
const betterLocalStorage = new Proxy(new Local(), {
    get(target, prop) {
        if (typeof target[prop] !== "undefined") {
            return target[prop];
        }
        return target.get(prop);
    },
    set(target, prop, value) {
        target.set(prop, value);
        return true;
    },
    deleteProperty(target, prop) {
        target.delete(prop);
        return true;
    },
});
const betterSessionStorage = new Proxy(new Session(), {
    get(target, prop) {
        if (typeof target[prop] !== "undefined") {
            return target[prop];
        }
        return target.get(prop);
    },
    set(target, prop, value) {
        target.set(prop, value);
        return true;
    },
    deleteProperty(target, prop) {
        target.delete(prop);
        return true;
    },
});
export { betterLocalStorage, betterSessionStorage };
export default { local: betterLocalStorage, session: betterSessionStorage };

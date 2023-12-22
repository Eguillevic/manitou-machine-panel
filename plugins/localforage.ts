import {defineNuxtPlugin} from "#app";
import localforage from "localforage";

interface IStorageInstance {
    images: LocalForage,
    emails: LocalForage,
    cache: LocalForage,
}
export default defineNuxtPlugin(() => {
    const modules: IStorageInstance = {
        images: localforage.createInstance({
            name: "manitou",
            driver: localforage.INDEXEDDB,
            storeName: 'images',
            description: 'Images storage'
        }),
        emails: localforage.createInstance({
            name: "manitou",
            driver: localforage.INDEXEDDB,
            storeName: 'emails',
            description: 'Emails storage'
        }),
        cache: localforage.createInstance({
            name: "manitou",
            driver: localforage.INDEXEDDB,
            storeName: 'cache',
            description: 'Cache storage'
        }),
        json: localforage.createInstance({
            name: "manitou",
            driver: localforage.INDEXEDDB,
            storeName: 'json',
            description: 'JSON storage'
        }),
    };
    return {
        provide: {
            storage: modules,
        },
    };
});
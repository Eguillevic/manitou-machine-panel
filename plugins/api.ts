import { defineNuxtPlugin } from '#app';
import { $fetch, FetchOptions } from 'ohmyfetch';
import MachineModule from "~/repository/modules/machine";
import EventModule from "~/repository/modules/event";


/** ApiInstance interface provides us with good typing */
interface IApiInstance {
  event: EventModule,
  machine: MachineModule,
}

export default defineNuxtPlugin(() => {
  /** get the runtime config */
  const config = useRuntimeConfig()

  /** define custom options for $fetcher */
  const fetchOptions: FetchOptions = {
    baseURL: config.public.apiUrl,
  }

  /** create a new instance of $fetcher with custom option */
  const apiFetcher = $fetch.create(fetchOptions);

  /** an object containing all repositories we need to expose */
  const modules: IApiInstance = {
    event: new EventModule(apiFetcher),
    machine: new MachineModule(apiFetcher),
  };

  return {
    provide: {
      api: modules,
    },
  };
});
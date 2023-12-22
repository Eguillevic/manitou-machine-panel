import { $Fetch } from 'ohmyfetch';

class HttpFactory {
  private $fetch: $Fetch;

  constructor(fetcher: $Fetch) {
    this.$fetch = fetcher;
  }

  /**
     * @param method HTTP method
     * @param url URL
     * @param data Data to send
     * @param extras Extra options
     * @param token Bearer token for authentication
     * @returns Promise
     * @example
     * const $res = await this.call<ICreateAccountResponse>('POST', `${this.RESOURCE}/register`, account);
     */
  async call<T>(method: string, url: string, data?: object, extras = {}): Promise<T> {
    const headers: HeadersInit = {};

    // const token = useCookie('bearer_token');
    //
    // if (token) {
    //   headers['Authorization'] = ``;
    // }

    const $res: T = await this.$fetch(url, { method, body: data, headers, ...extras });
    return $res;
  }
}

export default HttpFactory;
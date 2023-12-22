import HttpFactory from '~/repository/factory';

class MachineModule extends HttpFactory {
  private RESOURCE = '/machine-panel';

  /**
   * @returns
   */
  async getMachines(params): Promise<any> {
    return await this.call<any>('GET', `${this.RESOURCE}/machines?country=${params.country}`);
  }

  /**
   * @param identifier
   * @param params
   * @returns
   */
  async getMachineDetails(identifier: string, {country, unit, locale}): Promise<any> {
    return await this.call<any>('GET', `${this.RESOURCE}/machines/${identifier}?country=${country}&unit=${unit}&locale=${locale}`);
  }

  /**
   * @param {country, unit, locale}
   * @returns
   */
  async getAttachments({country, unit, locale}): Promise<any> {
    return await this.call<any>('GET', `${this.RESOURCE}/attachments?country=${country}&unit=${unit}&locale=${locale}`);
  }

  /**
   * @param identifier
   * @param {country, unit, locale}
   * @returns
   */
  async getAttachmentDetails(identifier: string, {country, unit, locale}): Promise<any> {
    return await this.call<any>('GET', `${this.RESOURCE}/attachments/${identifier}?country=${country}&unit=${unit}&locale=${locale}`);
  }

  /**
   * @param {country, locale}
   * @returns
   */
  async getInnovations({country, locale}): Promise<any> {
    return await this.call<any>('GET', `${this.RESOURCE}/innovations?country=${country}&locale=${locale}`);
  }

  /**
   * @param {country, locale}
   * @returns
   */
  async getServices({country, locale}): Promise<any> {
    return await this.call<any>('GET', `${this.RESOURCE}/services?country=${country}&locale=${locale}`);
  }
}

export default MachineModule;
import HttpFactory from '~/repository/factory';

class EventModule extends HttpFactory {
  private RESOURCE = '/exhibitions';

  /**
   * @returns
   */
  async getExhibitions(): Promise<any> {
    return await this.call<any>('GET', `${this.RESOURCE}/list`);
  }

  /**
   * @param identifier
   * @returns
   */
  async getExhibition(identifier: string): Promise<any> {
    return await this.call<any>('GET', `${this.RESOURCE}/exhibition/${identifier}`);
  }

  /**
   * @param payload
   * @returns
   */
  async createExhibition(payload): Promise<any> {
    return await this.call<any>('POST', `${this.RESOURCE}/store`, payload);
  }
}

export default EventModule;
import { WebResourceModel } from './'

/**
 * Helper class for working with WebResources from the Power Apps environment.
 */
export class WebResourceHelper {
    constructor(
        private webApi: ComponentFramework.WebApi
    ) {
    }

    /**
     * Retrieves a WebResource by name.
     * @param name Name of the WebResource to retrieve.
     */
    async getWebResourceByName(name: string): Promise<WebResourceModel> {
        const entityType = 'webresource'
        const query = '?' + [
            `$filter=name eq '${name}'`
        ].join('&')

        const result = await this.webApi.retrieveMultipleRecords(entityType, query)
        const entity = result.entities[0]

        return <WebResourceModel>entity;
    }

    /**
     * Decodes the base64 encoded content of the WebResource.
     * @param webResource WebResource object.
     */
    getContent(webResource: WebResourceModel): string {
        return atob(webResource.content)
    }
}
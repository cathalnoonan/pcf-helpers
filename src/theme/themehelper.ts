import { ThemeModel } from "./"

/**
 * Helper class for working with Themes from the Power Apps environment.
 */
export class ThemeHelper {
    constructor(
        private webApi: ComponentFramework.WebApi
    ) {
    }

    /**
     * Retrieves the active theme in the environment.
     */
    async getActiveTheme(): Promise<ThemeModel> {
        const entityType = 'theme'
        const query = '?' + [
            `$filter=isdefaulttheme eq true`
        ].join('&')

        const result = await this.webApi.retrieveMultipleRecords(entityType, query)
        const entity = result.entities[0]

        return <ThemeModel>entity;
    }
}
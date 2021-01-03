import { ManagedProperty } from '../common'

/**
 * WebResource entity reference:
 * https://docs.microsoft.com/en-us/dynamics365/customerengagement/on-premises/developer/entities/webresource
 */
export interface WebResourceModel {
    canbedeleted: ManagedProperty<boolean>
    content: string
    contentjson: string | null
    dependencyxml: string | null
    description: string | null
    displayname: string | null
    introducedversion: string
    isavailableformobileoffline: boolean
    iscustomizable: ManagedProperty<boolean>
    isenabledformobileclient: boolean
    ishidden: ManagedProperty<boolean>
    languagecode: number | null
    name: string
    silverlightversion: string | null
    webresourceid: string
    webresourcetype: WebResourceType
}

export type WebResourceType = {
    HTML: 1,
    CSS: 2,
    JScript: 3,
    XML: 4,
    PNG: 5,
    JPG: 6,
    GIF: 7,
    Silverlight: 8,
    XSL: 9,
    ICO: 10,
    SVG: 11,
    RESX: 12,
}
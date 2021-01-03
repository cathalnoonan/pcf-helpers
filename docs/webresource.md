# Web Resource

---

## WebResourceHelper

```typescript
import { WebResourceHelper, WebResourceModel } from '@cathalnoonan/pcf-helpers'

export class MyPCF implements ComponentFramework.StandardControl<IInputs, IOutputs> {

    private context: ComponentFramework.Context<IInputs>
    
    ...

    public init(context: ComponentFramework.Context<IInputs>, ...) {    
        this.context = context

        this.render()
    }

    private async render() {
        const webResourceHelper = new WebResourceHelper(this.context.webAPI)
        const webResource = await webResourceHelper.getWebResourceByName('new_/js/somefile.js')
        const webResourceContents = webResourceHelper.getContent(webResource)
        
        // do something with contents of the webresource
        ...
    }

}
```

---
# Theme

---

## ThemeHelper

```typescript
import { ThemeHelper, ThemeModel } from '@cathalnoonan/pcf-helpers'

export class MyPCF implements ComponentFramework.StandardControl<IInputs, IOutputs> {

    private context: ComponentFramework.Context<IInputs>

    ...

    public init(context: ComponentFramework.Context<IInputs>, ...) {    
        this.context = context

        this.render()
    }

    private async render() {
        const themeHelper = new ThemeHelper(this.context.webAPI)
        const theme = await themeHelper.getActiveTheme()

        // do something with theme colours
        ...
    }

}
```
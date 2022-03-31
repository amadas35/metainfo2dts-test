// Type definitions for Nexacro N
// TypeScript Version: 3.8

namespace Base {
    type ImplicitAny<Base> = Base & Record<string,any>;
    interface TestForm extends ImplicitAny<nexacro.Form> {

        Button00: Button;
        Combo00: Combo;
        FileUpload00: FileUpload;

    };
}

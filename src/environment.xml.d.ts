// Type definitions for Nexacro N
// TypeScript Version: 3.8

/// <reference path="typedefinition.xml.d.ts" />

interface NexacroAPI {
    _environment: nexacro._environment;
}

type ImplicitAny<Base> = Base & Record<string,any>;
namespace nexacro {
    type _environment = ImplicitAny<nexacro.Environment>;
}

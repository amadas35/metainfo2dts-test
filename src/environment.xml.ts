
/// <reference path="./environment.xml.d.ts" />

export default function (this: nexacro._environment) {

    this.Environment_onerror = function(obj:typeof this,e:nexacro.ErrorEventInfo)
    {
        trace(e.errormsg);
    };
}
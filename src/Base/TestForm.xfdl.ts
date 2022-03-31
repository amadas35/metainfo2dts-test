
/// <reference path="./TestForm.xfdl.d.ts" />
export default function (this: Base.TestForm) {

    // @ts-ignore 
    this.Button00_onclick = function (obj:Button, e:nexacro.ClickEventInfo) : void
    {
        //obj.addEventHandler(s
        const size = this.scrollbarsize;

        const btom = this.Button00.bottom;
        this.Button03.name = 'aaa';
    };

    // @ts-ignore 
    this.FileUpload00_oncontextmenu = function(obj:FileUpload, e:nexacro.FileUploadContextMenuEventInfo) : void
    {

    };

    // ts-ignore 없는 방법 ==> 함수가 Form의 'named' method로 추가되지 않기 때문에, 함수를 여러 이벤트에서 공통 사용 불가
    this.addEventHandler('onclick', (obj:Button, e:nexacro.ClickEventInfo) : void => {
        console.log(obj.name);
    }, this.Combo00);
    
}

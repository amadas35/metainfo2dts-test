
/// <reference path="./App_Desktop.xadl.d.ts" />
export default function (this: App_Desktop) {

    //(this as any).VFSet01;
    //(<any>this).VFSet02;
    this.VFSet01;
    this.VFSet02;
    this.HFSet01;
    this.TopFrame;
    this.LeftFrame;
    this.MdiFrame;
    this.BottomFrame;
    this.WorkFrame;

    // @ts-ignore
    this.Application_onload = function(obj:nexacro.Application, e:nexacro.LoadEventInfo)
    {
        this.VFSet01 = this.mainframe.VFSet01;
        this.VFSet02 = this.mainframe.VFSet01.HFSet01.VFSet02;
        this.HFSet01 = this.mainframe.VFSet01.HFSet01;
        this.TopFrame = this.mainframe.VFSet01.TopFrame;
        this.LeftFrame = this.mainframe.VFSet01.HFSet01.LeftFrame;
        this.MdiFrame = this.mainframe.VFSet01.HFSet01.VFSet02.MdiFrame;
        this.BottomFrame = this.mainframe.VFSet01.BottomFrame;
        this.WorkFrame = this.mainframe.VFSet01.HFSet01.VFSet02.WorkFrame;

        //obj.mainframe.VFSet01 --> any로 인식함.
        // 'typeof this'를 사용하면 정상인식하지만, 그럴 경우, frame, component 를 모두 그렇게 처리할지 여부
        const name = obj.mainframe.VFSet01.name;

    };

    // this.mainframe_VFSet01_HFSet01_VFSet02_onactivate = function(obj:nexacro.VFrameSet,e:nexacro.ActivateEventInfo)
    this.mainframe_VFSet01_HFSet01_VFSet02_onactivate = function(obj:typeof this.mainframe.VFSet01.HFSet01.VFSet02,e:nexacro.ActivateEventInfo)
    {
        console.log(obj.MdiFrame);
    };

    this.DataObject0_ondatachanged = function(obj:nexacro.DataObject,e:nexacro.DataObjectDataChangedEventInfo)
    {
        trace('DataObject0_ondatachanged');
    };

}
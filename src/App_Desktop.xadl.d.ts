// Type definitions for Nexacro N
// TypeScript Version: 3.8

type ImplicitAny<Base> = Base & Record<string,any>;
interface App_Desktop extends ImplicitAny<nexacro.Application> {

    mainframe: ImplicitAny<nexacro.MainFrame> & { 
        VFSet01: ImplicitAny<nexacro.VFrameSet> & {
            TopFrame: ImplicitAny<nexacro.ChildFrame>,
            HFSet01: ImplicitAny<nexacro.HFrameSet> & {
                LeftFrame: ImplicitAny<nexacro.ChildFrame>,
                VFSet02: ImplicitAny<nexacro.VFrameSet> & {
                    MdiFrame: ImplicitAny<nexacro.ChildFrame>,
                    WorkFrame: ImplicitAny<nexacro.FrameSet>
                }
            },
            BottomFrame: ImplicitAny<nexacro.ChildFrame>
        } 
    };

};

/*
interface CallOrConstruct {
    new (s: string): Date;
    (n?: number): number;
  }
*/
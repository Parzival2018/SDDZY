

cc.Class({
    extends: cc.Component,

    properties: {
        TARGET:{
            default:null,
            type:cc.Node,


        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },
    onClickButton:function(target,para){
        //cc.log("按了一次")
        
        if(para=='menu')
        {
            //cc.log('menu')
            var Dialogbox=this.TARGET;
            if(Dialogbox.active == false)
            {
                Dialogbox.active=true;
                return;
            }
            else if(Dialogbox.active == true)
            {
                Dialogbox.active=false;
                return;
            }
        }
    }

    // update (dt) {},
});

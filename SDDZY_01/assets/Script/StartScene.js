// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        default:null,
        type:cc.Node,
        start_button:cc.Button
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        
     },

 // 场景转换
 toMainScene:function(){
     //cc.log("按了一次")
     cc.director.loadScene("LoadingScene");
     
 }

    // update (dt) {},
});

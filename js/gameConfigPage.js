(function($,defaultConfig){
    $(function(){
        var gameConfig={};
        if (localStorage['GameConfig'] === undefined) {
            gameConfig = defaultConfig;
            localStorage['GameConfig'] = JSON.stringify(defaultConfig);
        } else {
            gameConfig = JSON.parse(localStorage['GameConfig']);
        }

        for(var key_gameConfig in gameConfig){//根据配置设置对应按钮状态
            var item_0=gameConfig[key_gameConfig]
            if(typeof gameConfig[key_gameConfig]!=='object'){
                $('#'+key_gameConfig).attr('checked',item_0);
            }else{//遇到object时再次遍历
                for(var key_item0 in item_0){
                    var item_1=item_0[key_item0];
                    if(typeof item_0[key_item0]!=='object'){
                        $('#'+key_item0).attr('checked',item_1);
                    }
                }
            }
            //$('#'+key).prop()
        }


        $('#autoChangePage').change(function(){
            gameConfig.autoChangePage=$(this).prop('checked');
            localStorage['GameConfig'] = JSON.stringify(gameConfig);
        });
        $('#country,#field,#battle').change(function(){
            gameConfig.battle[$(this).attr('id')]=$(this).prop('checked');
            localStorage['GameConfig'] = JSON.stringify(gameConfig);
        });


    });
})(jQuery,DefaultConfig);


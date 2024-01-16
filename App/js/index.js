// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.MenuBar")
                .setHost(host,"xui_ui_menubar2")
                .setItems([
                    {
                        "id" : "menu1",
                        "caption" : "Hybrid",
                        "sub" : [
                            {
                                "id" : "normal",
                                "caption" : "normal"
                            },
                            {
                                "id" : "disabled",
                                "caption" : "disabled",
                                "disabled" : true
                            },
                            {
                                "id" : "image",
                                "caption" : "image",
                                "imageClass" : "xui-icon-xui"
                            },
                            {
                                "id" : "menu1-a",
                                "type" : "split"
                            },
                            {
                                "id" : "checkbox 1",
                                "caption" : "checkbox 1",
                                "type" : "checkbox"
                            },
                            {
                                "id" : "checkbox 2",
                                "caption" : "checkbox 2",
                                "type" : "checkbox"
                            }
                        ]
                    },
                    {
                        "id" : "menu2",
                        "caption" : "Stats Changer",
                        "sub" : [
                            {
                                "id" : "sub menu 1",
                                "caption" : "sub menu 1",
                                "add" : "[Ctrl+F]",
                                "sub" : [
                                    {
                                        "id" : "sub 1",
                                        "type" : "radiobox"
                                    },
                                    {
                                        "id" : "sub 2",
                                        "type" : "radiobox"
                                    },
                                    {
                                        "id" : "sub 3"
                                    }
                                ]
                            },
                            {
                                "id" : "sub menu 2",
                                "caption" : "sub menu 2",
                                "add" : "[Ctrl+T]",
                                "sub" : [
                                    {
                                        "id" : "sub 3"
                                    },
                                    {
                                        "id" : "sub 4"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id" : "menu3",
                        "caption" : "Gifting"
                    },
                    {
                        "id" : "menu4",
                        "caption" : "Custom Locker"
                    },
                    {
                        "id" : "menu5",
                        "caption" : "Cosmetic Swapper"
                    },
                    {
                        "id" : "menu6",
                        "caption" : "Item Shop"
                    },
                    {
                        "id" : "menu7",
                        "caption" : "Builds"
                    },
                    {
                        "id" : "menu8",
                        "caption" : "Lobby Modification"
                    }
                ])
                .setTop("1.5238095238095237em")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox2")
                .setLeft("48em")
                .setTop("21.333333333333332em")
                .setWidth("12em")
                .setCaption("Use Auth")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox3")
                .setLeft("48em")
                .setTop("22.857142857142858em")
                .setWidth("12em")
                .setCaption("Realistic Mode")
            );
            
            append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox4")
                .setLeft("48em")
                .setTop("24.38095238095238em")
                .setWidth("12em")
                .setCaption("Hybrid Mode")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button9")
                .setLeft("0em")
                .setTop("40.38095238095238em")
                .setWidth("18.20952380952381em")
                .setHeight("5.104761904761904em")
                .setCaption("Launch TaffyFN")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button10")
                .setLeft("18.285714285714285em")
                .setTop("40.38095238095238em")
                .setWidth("8.304761904761905em")
                .setHeight("5.104761904761904em")
                .setCaption("Restart")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button11")
                .setLeft("26.666666666666668em")
                .setTop("40.38095238095238em")
                .setWidth("8.304761904761905em")
                .setHeight("5.104761904761904em")
                .setCaption("Reset Config")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button12")
                .setLeft("35.04761904761905em")
                .setTop("40.38095238095238em")
                .setWidth("8.304761904761905em")
                .setHeight("5.104761904761904em")
                .setCaption("Repair")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button13")
                .setLeft("43.42857142857143em")
                .setTop("40.38095238095238em")
                .setWidth("17.447619047619046em")
                .setHeight("5.104761904761904em")
                .setCaption("Help Support")
            );
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label7")
                .setLeft("22.095238095238095em")
                .setTop("10.666666666666666em")
                .setWidth("11.047619047619047em")
                .setHeight("10em")
                .setCaption("TaffyFN")
                .setFontSize("32")
                .setCustomStyle({
                    "KEY" : {
                        "font-size" : "30"
                    }
                })
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});
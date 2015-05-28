/* VLEditor vleditor.js
 * Mengxiao Lin <linmx0130@163.com>
 * All rights reserved.
 */

var VLEditor={};  //namespace


VLEditor.textColorChooser={}; //textColorChooser
/* color List
 * echo item follows the format: [color value, color name]
 */
VLEditor.textColorChooser.colorList=[
    ["#FF0000","Red"],
    ["#00FF00","Green"],
    ["#0000FF","Blue"],
    ["#000000","Black"]
];
/*toggle: toggle the menu*/
VLEditor.textColorChooser.toggle=function(idStr){
    var offLeft=$(idStr+" .vleditor-textcolor-btn").position().left;
    var offTop=$(idStr+" .vleditor-textcolor-btn").position().top+$(idStr+" .vleditor-textcolor-btn").height();
    menuDiv=$(idStr+" .vleditor-textColorMenu");
    menuDiv.css("left",offLeft);
    menuDiv.css("top",offTop);
    $(idStr+" .vleditor-textColorMenu").fadeToggle();
};
VLEditor.textColorChooser.buildMenu=function(){
    var i;
    retS="";
    retS+='<div class="vleditor-textColorMenu" style="position:absolute;display:none;border:1px solid grey;background-color:white;">'
    retS+="<ul style='list-style-type:none;list-style-position:outside;padding:0px;margin:0px;'>";
    for (i=0;i<VLEditor.textColorChooser.colorList.length;++i){
        retS+='<li style="padding:0px;margin:0px;"><a href="#" class="vleditor-textColorMenu-btn"';
        retS+=' style="text-decoration:none;font-size:0.8em;color:';
        retS+=VLEditor.textColorChooser.colorList[i][0]+'">';
        retS+=VLEditor.textColorChooser.colorList[i][1]+'</a></li>';
    }
    retS+='</ul></div>';
    return retS;
};

VLEditor.textSizeChooser={}; //textSizeChooser
/* text size List
 * echo item is the name of a size, for 1-7
 * the first(0) must be null
 */
VLEditor.textSizeChooser.sizeList=[
    null,"XXS","XS", "S","M","L","XL","XXL"
];
/*toggle: toggle the menu*/
VLEditor.textSizeChooser.toggle=function(idStr){
    var offLeft=$(idStr+" .vleditor-textsize-btn").position().left;
    var offTop=$(idStr+" .vleditor-textsize-btn").position().top+$(idStr+" .vleditor-textsize-btn").height();
    menuDiv=$(idStr+" .vleditor-textSizeMenu");
    menuDiv.css("left",offLeft);
    menuDiv.css("top",offTop);
    $(idStr+" .vleditor-textSizeMenu").fadeToggle();
};
VLEditor.textSizeChooser.buildMenu=function(){
    var i;
    retS="";
    retS+='<div class="vleditor-textSizeMenu" style="position:absolute;display:none;border:1px solid grey;background-color:white;">'
    retS+="<ul style='list-style-type:none;list-style-position:outside;padding:0px;margin:0px;'>";
    for (i=1;i<VLEditor.textSizeChooser.sizeList.length;++i){
        retS+='<li style="padding:0px;margin:0px;"><a href="#" style="text-decoration:none;color:black;" class="vleditor-textSizeMenu-btn">';
        retS+='<font size="'+i+'">'
        retS+=VLEditor.textSizeChooser.sizeList[i];
        retS+='</font></a></li>';
    }
    retS+='</ul></div>';
    return retS;
};

/* linkCreator: build a link*/
VLEditor.linkCreator={};
VLEditor.linkCreator.toggle=function(idStr,state){

    var form=$(idStr+" .vleditor-linkCreator-form");
    var editor=$(idStr+" .vleditor-editor");
    var i;
    if (form.css("display") === "none"){
        if (state === false) return;
        //save the selected range
        var selectionObj=getSelection();
        VLEditor.linkCreator.selectedRangeList=[];
        for (i=0;i<selectionObj.rangeCount;++i){
            VLEditor.linkCreator.selectedRangeList.push(selectionObj.getRangeAt(i));
        }
        var offLeft=editor.position().left+(editor.width()-form.width())/2;
        var offTop=editor.position().top+(editor.height()-form.height())/2;
        form.css("left",offLeft);
        form.css("top",offTop);
        form.fadeIn();
    }else{
        if (state === true) return;
        //editor["0"].contentEditable="true";
        document.getSelection().removeAllRanges();
        for (i=0;i<VLEditor.linkCreator.selectedRangeList.length;++i){
            document.getSelection().addRange(VLEditor.linkCreator.selectedRangeList[i]);
        }
        form.fadeOut();
    }
};
VLEditor.linkCreator.buildFormHTML=function(){
    retS='<div class="vleditor-linkCreator-form" style="position:absolute;padding:2em;border:1px solid grey; background-color:rgba(255,255,255,0.8);display:none;">';
    retS+='Link Target URL:<input type="text" class="vleditor-linkCreator-form-url" />';
    retS+='<a href="#" class="vleditor-btn vleditor-linkCreator-form-ok"><img src="'+ VLEditor.resPath + 'Checkmark-50.png"></a>'
    retS+='<a href="#" class="vleditor-btn vleditor-linkCreator-form-cancel"><img src="' + VLEditor.resPath + 'Crossmark-50.png"></a>';
    retS+="</div>";
    return retS;
};
/* imageInserter: insert a image */
VLEditor.imageInserter={};
VLEditor.imageInserter.toggle=function(idStr,state){
    var form=$(idStr+" .vleditor-imageInsert-form");
    var editor=$(idStr+" .vleditor-editor");
    var i;
    if (form.css("display") === "none"){
        if (state === false) return;
        //save the selected range
        var selectionObj=getSelection();
        VLEditor.imageInserter.selectedRangeList=[];
        for (i=0;i<selectionObj.rangeCount;++i){
            VLEditor.imageInserter.selectedRangeList.push(selectionObj.getRangeAt(i));
        }
        var offLeft=editor.position().left+(editor.width()-form.width())/2;
        var offTop=editor.position().top+(editor.height()-form.height())/2;
        form.css("left",offLeft);
        form.css("top",offTop);
        form.fadeIn();
    }else{
        if (state === true) return;
        //editor["0"].contentEditable="true";
        document.getSelection().removeAllRanges();
        for (i=0;i<VLEditor.imageInserter.selectedRangeList.length;++i){
            document.getSelection().addRange(VLEditor.imageInserter.selectedRangeList[i]);
        }
        form.fadeOut();
    }
};
VLEditor.imageInserter.buildFormHTML=function(){
    retS='<div class="vleditor-imageInsert-form" style="position:absolute;padding:2em;border:1px solid grey; background-color:rgba(255,255,255,0.8);display:none;">';
    retS+='Image File URL:<input type="text" class="vleditor-imageInsert-form-url" />';
    retS+='<a href="#" class="vleditor-btn vleditor-imageInsert-form-ok"><img src="'+VLEditor.resPath + 'Checkmark-50.png"></a>'
    retS+='<a href="#" class="vleditor-btn vleditor-imageInsert-form-cancel"><img src="'+VLEditor.resPath +'Crossmark-50.png"></a>';
    retS+="</div>";
    return retS;
};


 /** build_vleditor_html
  *  to build a basic editor form based on contenteditable DIV block.
  */
VLEditor.build_vleditor_html=function(contentHTML) {
     var retS='<div class="vleditor-btnbar">';
     //button bar part
     retS+='<a href="#" class="vleditor-btn vleditor-bold-btn"><img src="'+VLEditor.resPath + 'Bold-50.png" alt="blod"></a>';
     retS+='<a href="#" class="vleditor-btn vleditor-italic-btn"><img src="'+VLEditor.resPath + 'Italic-50.png" alt="italic"></a>';
     retS+='<a href="#" class="vleditor-btn vleditor-underline-btn"><img src="' +VLEditor.resPath + 'Underline-50.png" alt="underline"></a>';
     retS+='<a href="#" class="vleditor-btn vleditor-strikethrough-btn"><img src="' +VLEditor.resPath + 'Strikethrough-50.png" alt="strikethrough"></a>';
     retS+='<a href="#" class="vleditor-btn vleditor-alignleft-btn"><img src="' +VLEditor.resPath + 'AlignLeft-50.png" alt="alignleft"></a>';
     retS+='<a href="#" class="vleditor-btn vleditor-aligncenter-btn"><img src="' +VLEditor.resPath + 'AlignCenter-50.png" alt="aligncenter"></a>';
     retS+='<a href="#" class="vleditor-btn vleditor-alignright-btn"><img src="'+VLEditor.resPath +'AlignRight-50.png" alt="alignright"></a>';
     retS+='<br>';
     retS+='<a href="#" class="vleditor-btn vleditor-indent-btn"><img src="'+VLEditor.resPath +'Indent-50.png" alt="indent"></a>';
     retS+='<a href="#" class="vleditor-btn vleditor-outdent-btn"><img src="'+VLEditor.resPath +'Outdent-50.png" alt="outdent"></a>';
     retS+='<a href="#" class="vleditor-btn vleditor-unorderedlist-btn"><img src="'+VLEditor.resPath +'List.png" alt="unorderedlist"></a>';
     retS+='<a href="#" class="vleditor-btn vleditor-orderedlist-btn"><img src="'+VLEditor.resPath +'OrderedList-50.png" alt="orderedlist"></a>';
     retS+='<a href="#" class="vleditor-btn vleditor-link-btn"><img src="'+VLEditor.resPath +'Link-50.png" alt="link"></a>';
     retS+='<a href="#" class="vleditor-btn vleditor-unlink-btn"><img src="'+VLEditor.resPath +'DeleteLink-50.png" alt="link"></a>';
     retS+='<a href="#" class="vleditor-btn vleditor-insertimage-btn"><img src="'+VLEditor.resPath +'InsertImage-50.png" alt="link"></a>';
     retS+='<a href="#" class="vleditor-btn vleditor-textcolor-btn"><img src="'+VLEditor.resPath +'TextColor-50.png" alt="textcolor"></a>';
     retS+='<a href="#" class="vleditor-btn vleditor-textsize-btn"><img src="'+VLEditor.resPath +'TextSize.png" alt="textsize"></a>';
     retS+='</div>';
     retS+=VLEditor.textColorChooser.buildMenu();
     retS+=VLEditor.textSizeChooser.buildMenu();
     retS+=VLEditor.linkCreator.buildFormHTML();
     retS+=VLEditor.imageInserter.buildFormHTML();
     //content-part
     retS+='<div class="vleditor-editor" contenteditable="true" >';
     retS+=contentHTML;
     retS+='</div>';
     return retS;
};

/** stateCheck
 *  check the state of the selection or the insertion point,
 *  and modify the style of buttons.
 */
VLEditor.stateCheck=function(idStr){
    /* propertyCheck: a checker for all button on the bar
     * It can only be used on the property which can be queried by queryCommandState.
     */
    var propertyCheck=function(propertyName,btnName){
        if (document.queryCommandState(propertyName)){
            $(idStr+" .vleditor-"+btnName+"-btn").addClass("vleditor-btn-chosen");
        }else{
            $(idStr+" .vleditor-"+btnName+"-btn").removeClass("vleditor-btn-chosen");
        }
    };
    /* menuOpenCheck: check the menu open or not
     * and modify the state of the buttons
     */
    var menuOpenCheck=function(menuName,btnName){
        if ($(idStr+" .vleditor-"+menuName).css("display") === "none"){
            $(idStr+" .vleditor-"+btnName+"-btn").removeClass("vleditor-btn-chosen");
        }else{
            $(idStr+" .vleditor-"+btnName+"-btn").addClass("vleditor-btn-chosen");
        }
    }

    propertyCheck("bold","bold");
    propertyCheck("italic","italic");
    propertyCheck("underline","underline");
    propertyCheck("strikethrough","strikethrough");
    propertyCheck("justifyLeft","alignleft");
    propertyCheck("justifyRight","alignright");
    propertyCheck("justifyCenter","aligncenter");
    menuOpenCheck("textColorMenu","textcolor");
    menuOpenCheck("textSizeMenu","textsize");
};


VLEditor.buildEditor=function(id,resPath){
    this.resPath=resPath;
    var idStr="#"+id;
    var VLEDITOR_HTML=this.build_vleditor_html("<p> this is a param</p>");
    $(idStr).html(VLEDITOR_HTML);
    //document.execCommand("styleWithCSS",false,true);

    //bold btn
    $(idStr+" .vleditor-bold-btn").click(function(){
        document.execCommand("bold",false);
    });

    //italic btn
    $(idStr+" .vleditor-italic-btn").click(function(){
        document.execCommand("italic",false);
    });


    //underline btn
    $(idStr+" .vleditor-underline-btn").click(function(){
        document.execCommand("underline",false);
    });

    //strikethrough btn
    $(idStr+" .vleditor-strikethrough-btn").click(function(){
        document.execCommand("strikethrough",false);
    });

    //alignleft btn
    $(idStr+" .vleditor-alignleft-btn").click(function(){
        document.execCommand("justifyLeft",false);
    });

    //aligncenter btn
    $(idStr+" .vleditor-aligncenter-btn").click(function(){
        document.execCommand("justifyCenter",false);
    });
    //alignright btn
    $(idStr+" .vleditor-alignright-btn").click(function(){
        document.execCommand("justifyRight",false);
    });

    //indent btn
    $(idStr+" .vleditor-indent-btn").click(function(){
        document.execCommand("indent",false);
    });

    //outdent btn
    $(idStr+" .vleditor-outdent-btn").click(function(){
        document.execCommand("outdent",false);
    });

    //unorderedlist btn
    $(idStr+" .vleditor-unorderedlist-btn").click(function(){
        document.execCommand("insertUnorderedList",false);
    });

    //outdent btn
    $(idStr+" .vleditor-orderedlist-btn").click(function(){
        document.execCommand("insertOrderedList",false);
    });

    //textcolor btn
    $(idStr+" .vleditor-textcolor-btn").click(function(){
        VLEditor.textColorChooser.toggle(idStr);
    });

    //textcolor menu btn - in the menu
    $(idStr+" .vleditor-textColorMenu-btn").click(function(){
        VLEditor.textColorChooser.toggle(idStr);
        var colorValue=VLEditor.textColorChooser.colorList[$(this).parent().index()][0];
        document.execCommand("foreColor",false,colorValue);
    });

    //textsize btn
    $(idStr+" .vleditor-textsize-btn").click(function(){
        VLEditor.textSizeChooser.toggle(idStr);
    });

    //textsize menu btn - in the menu
    $(idStr+" .vleditor-textSizeMenu-btn").click(function(){
        VLEditor.textSizeChooser.toggle(idStr);
        var textSize=$(this).parent().index();
        document.execCommand("fontSize",false,textSize);
    });

    //link btn
    $(idStr+" .vleditor-link-btn").click(function(){
        VLEditor.imageInserter.toggle(idStr,false);
        VLEditor.linkCreator.toggle(idStr);
    });
    $(idStr+" .vleditor-linkCreator-form-cancel").click(function(){
        VLEditor.linkCreator.toggle(idStr);
    });
    $(idStr+" .vleditor-linkCreator-form-ok").click(function(){
        VLEditor.linkCreator.toggle(idStr);
        document.execCommand("createLink",false,$(idStr+" .vleditor-linkCreator-form-url").val());
    });
    $(idStr+" .vleditor-unlink-btn").click(function(){
        document.execCommand("unlink",false);
    });
    //image btn
    $(idStr+" .vleditor-insertimage-btn").click(function(){
        VLEditor.linkCreator.toggle(idStr,false);
        VLEditor.imageInserter.toggle(idStr);
    });
    $(idStr+" .vleditor-imageInsert-form-cancel").click(function(){
        VLEditor.imageInserter.toggle(idStr);
    });
    $(idStr+" .vleditor-imageInsert-form-ok").click(function(){
        VLEditor.imageInserter.toggle(idStr);
        document.execCommand("insertImage",false,$(idStr+" .vleditor-imageInsert-form-url").val());
    });

    $(idStr+" .vleditor-btn").click(function(){
        VLEditor.stateCheck(idStr);
    })
    $(idStr).click(function(){
        VLEditor.stateCheck(idStr);
    });
    $(idStr).keyup(function(){
        VLEditor.stateCheck(idStr);
    });
};

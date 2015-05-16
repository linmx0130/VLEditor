/* VLEditor vleditor.js
 * Mengxiao Lin <linmx0130@163.com>
 * All rights reserved.
 */

var VLEditor={};  //namespace

 /** build_vleditor_html
  *  to build a basic editor form based on contenteditable DIV block.
  */


VLEditor.build_vleditor_html=function(contentHTML) {
     var retS='<div class="vleditor-btnbar">';
     //button bar part
     retS+='<a href="#" class="vleditor-btn vleditor-bold-btn"><img src="res/Bold-50.png" alt="blod"></a>';
     retS+='<a href="#" class="vleditor-btn vleditor-italic-btn"><img src="res/Italic-50.png" alt="italic"></a>';
     retS+='<a href="#" class="vleditor-btn vleditor-underline-btn"><img src="res/Underline-50.png" alt="underline"></a>';
     retS+='<a href="#" class="vleditor-btn vleditor-strikethrough-btn"><img src="res/Strikethrough-50.png" alt="strikethrough"></a>';
     retS+='<a href="#" class="vleditor-btn vleditor-alignleft-btn"><img src="res/AlignLeft-50.png" alt="alignleft"></a>';
     retS+='<a href="#" class="vleditor-btn vleditor-aligncenter-btn"><img src="res/AlignCenter-50.png" alt="aligncenter"></a>';
     retS+='<a href="#" class="vleditor-btn vleditor-alignright-btn"><img src="res/AlignRight-50.png" alt="alignright"></a>';
     retS+='<br>';
     retS+='<a href="#" class="vleditor-btn vleditor-indent-btn"><img src="res/Indent-50.png" alt="indent"></a>';
     retS+='<a href="#" class="vleditor-btn vleditor-outdent-btn"><img src="res/Outdent-50.png" alt="outdent"></a>';
     retS+='<a href="#" class="vleditor-btn vleditor-unorderedlist-btn"><img src="res/List.png" alt="unorderedlist"></a>';
     retS+='<a href="#" class="vleditor-btn vleditor-orderedlist-btn"><img src="res/OrderedList-50.png" alt="orderedlist"></a>';
     retS+='</div>';

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
    propertyCheck("bold","bold");
    propertyCheck("italic","italic");
    propertyCheck("underline","underline");
    propertyCheck("strikethrough","strikethrough");
    propertyCheck("justifyLeft","alignleft");
    propertyCheck("justifyRight","alignright");
    propertyCheck("justifyCenter","aligncenter");
};


VLEditor.buildEditor=function(id){
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

/* VLEditor vleditor.js
 * Mengxiao Lin <linmx0130@163.com>
 * All rights reserved.
 */

 /** build_vleditor_html
  *  to build a basic editor form based on contenteditable DIV block.
  */
 var build_vleditor_html=function(contentHTML){
     var retS='<div class="vleditor-btnbar">';
     //button bar part
     retS+='<a href="#" class="vleditor-btn vleditor-bold-btn"><img src="res/Bold-50.png" alt="blod"></a>';
     retS+='<a href="#" class="vleditor-btn vleditor-italic-btn"><img src="res/Italic-50.png" alt="italic"></a>';
     retS+='<a href="#" class="vleditor-btn vleditor-underline-btn"><img src="res/Underline-50.png" alt="underline"></a>';
     retS+='<a href="#" class="vleditor-btn vleditor-strikethrough-btn"><img src="res/Strikethrough-50.png" alt="strikethrough"></a>';
     retS+='<a href="#" class="vleditor-btn vleditor-alignleft-btn"><img src="res/AlignLeft-50.png" alt="alignleft"></a>';
     retS+='<a href="#" class="vleditor-btn vleditor-aligncenter-btn"><img src="res/AlignCenter-50.png" alt="aligncenter"></a>';
     retS+='<a href="#" class="vleditor-btn vleditor-alignright-btn"><img src="res/AlignRight-50.png" alt="alignright"></a>';
     retS+='</div>';

     //content-part
     retS+='<div class="vleditor-editor" contenteditable="true" >';
     retS+=contentHTML;
     retS+='</div>';
     return retS;
 }
var buildEditor=function(id){
    var idStr="#"+id;
    var VLEDITOR_HTML=build_vleditor_html("<p> this is a param</p>");
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

};
 //Main part
 $(document).ready(function(){
     buildEditor("editor1");
 });

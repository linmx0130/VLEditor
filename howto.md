#How to use VLEditor
It's a document about how to use VLEditor.

##Build a editor
<pre>
  $(document).ready(function(){
      VLEditor.buildEditor("editor1","res/");
      /* the first argument is the id of a div
       * the second argument is the path of resource file
       */
  });
</pre>

Loaded jquery.js and vleditor.js, then you can use the code above to build editor in a DIV element whose id is "editor1". Apparently it can be replaced by any other id.

"index.html" is only an example file.

##Modify Code
All things are in VLEditor object. They are
<pre>
VLEditor.textColorChooser
VLEditor.textSizeChooser
VLEditor.linkCreator
VLEditor.imageInserter
VLEditor.build_vleditor_html
VLEditor.stateCheck
VLEditor.buildEditor
VLEditor.getContentHTML
</pre>

And here is the introduction to them.
###VLEditor.textColorChooser
A object contain all things about text color chooser.

###VLEditor.textSizeChooser
A object contain all things about text size chooser. It's similar to textColorChooser.

###VLEditor.linkCreator
A object contain all things about creating links. It contains a form builder.

###VLEditor.imageInserter
A object contain all things about inserting images. It's similar to linkCreator.

###VLEditor.build_vleditor_html
It will build a HTML string for the editor, including the button bar and the textarea.

###VLEditor.stateCheck
It's used for checking the state of text and controlling the style of buttons. For example, if the text is bold, the bold button would have a special look.

###VLEditor.buildEditor
Put the HTML string build by build_vleditor_html into the division and bind events.

###VLEditor.getContentHTML
Return the HTML String of editor content by id.

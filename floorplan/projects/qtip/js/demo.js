if($('script.example').length > 0)
{
   // Setup view code header
   $('<h3 class="code">View the code</h3>')
      .prependTo('#contentheader:first .center')
      .click(function(){ $('#contentheader:first pre').slideToggle() });
   
   // Setup script contents
   var code = $('script.example').html();
   var content = "<script type=\"text\/javascript\">";
   content += ($.browser.msie) ? code.replace(/\n/, '') : code;
   content += "\<\/script>";
   
   // Create pretty code
   var code = $('<pre><code class="javascript"></code></pre>')
      .find('code')
      .text(content)
      .end()
      .appendTo('#contentheader:first .center')
      .hide();
   
   // Initilize highlighting
   hljs.initHighlightingOnLoad('javascript');
}
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require froala_editor.min.js

new FroalaEditor('selector',{
  
});
# Include other plugins.
#= require plugins/align.min.js
#= require plugins/char_counter.min.js
#= require plugins/code_beautifier.min.js
#= require plugins/code_view.min.js
#= require plugins/colors.min.js
#= require plugins/emoticons.min.js
#= require plugins/entities.min.js
#= require plugins/file.min.js
#= require plugins/font_family.min.js
#= require plugins/font_size.min.js
#= require plugins/fullscreen.min.js
#= require plugins/help.min.js
#= require plugins/image.min.js
#= require plugins/image_manager.min.js
#= require plugins/inline_class.min.js
#= require plugins/inline_style.min.js
#= require plugins/line_breaker.min.js
#= require plugins/line_height.min.js
#= require plugins/link.min.js
#= require plugins/lists.min.js
#= require plugins/paragraph_format.min.js
#= require plugins/paragraph_style.min.js
#= require plugins/print.min.js
#= require plugins/quick_insert.min.js
#= require plugins/quote.min.js
#= require plugins/save.min.js
#= require plugins/table.min.js
#= require plugins/special_characters.min.js
#= require plugins/url.min.js
#= require plugins/video.min.js

#= require third_party/embedly.min.js
#= require third_party/font_awesome.min.js
#= require third_party/image_tui.min.js
#= require third_party/spell_checker.min.js

@import 'plugins/char_counter.min.css';
@import 'plugins/code_view.min.css';
@import 'plugins/colors.min.css';
@import 'plugins/emoticons.min.css';
@import 'plugins/file.min.css';
@import 'plugins/fullscreen.min.css';
@import 'plugins/help.min.css';
@import 'plugins/image_manager.min.css';
@import 'plugins/image.min.css';
@import 'plugins/line_breaker.min.css';
@import 'plugins/quick_insert.min.css';
@import 'plugins/special_characters.min.css';
@import 'plugins/table.min.css';
@import 'plugins/video.min.css';

@import 'third_party/embedly.min.css';
@import 'third_party/image_tui.min.css';
@import 'third_party/spell_checker.min.css';
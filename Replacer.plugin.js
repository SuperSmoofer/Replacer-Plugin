//META{"name":"Replacer"}*//

class Replacer {
 constructor() {
  this.processChat = () => {
	setTimeout(function() {
		$(".comment .markup, .comment .markup>span").each(function() {
			var tagRegex = /(Replace1)/igm;
			var html = $(this).html();
			$(this).html(html.replace(tagRegex, 'Replace2'));
		});
	 },100);
   }
 };

  start() { this.processChat(); }
	 
  stop() {}
	 
  load() {}
	
  unload() {}
	 
  onMessage() { this.processChat(); }
	 
  onSwitch() { this.processChat(); }

  getName		        () { return 'Replacer'; }
  getDescription    	() { return 'Replaces Text with What you Enter.'; }
  getAuthor		      	() { return 'SpectralDoge'; }
  getVersion		    () { return '0.0.2'; }
  getSettingsPanel		() { return 'To Change Settings, use a Text Editor, to Edit the Settings'; }
};
/*@end@*/
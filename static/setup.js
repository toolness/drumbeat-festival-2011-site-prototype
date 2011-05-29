function rewriteWikiLinksToThisSite() {
  var rewrites = [
    config.baseContent,
    // The Mozilla wiki sometimes generates links that point to 
    // http and then redirect to https.
    config.baseContent.replace('https:', 'http:')
  ];
  jQuery.each(rewrites, function() {
    $('a[href^="' + this + '"]').each(function() {
      var href = $(this).attr("href");
      var newHref = href.slice(config.baseContent.length);
      $(this).attr("href", newHref);
    });
  });
}

$(window).ready(function() {
  rewriteWikiLinksToThisSite();
  document.title = config.siteName + " - " + document.title;
});

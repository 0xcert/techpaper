exports.header = null;

exports.footer = {
  height: '1cm',
  contents: function(page, total) {
    return [
      '<footer>',
        '<style>',
          '@import url("https://fonts.googleapis.com/css?family=Overpass+Mono");',
          'body {',
            'text-align: justify;',
            'font-family: "Overpass Mono", monospace;',
            'font-size: 12px;',
            'text-align: center;',
          '}',
        '</style>',
        '<span>',
          page + ' / ' + total,
        '</span>',
      '</footer>'
    ].join('');
  }
};

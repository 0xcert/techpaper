exports.header = {
  height: '3cm',
  contents: function(page, total) {
    return '';
  },
};

exports.footer = {
  height: '3cm',
  contents: function(page, total) {
    return [
      '<footer>',
        '<style>',
          'body {',
            'font-family: "Latin Modern";',
            'font-size: 11px;',
            'line-height: 4;',
            'text-align: center;',
          '}',
        '</style>',
        '<span>',
          page > 3 ? page - 3 : '',
        '</span>',
      '</footer>'
    ].join('');
  }
};

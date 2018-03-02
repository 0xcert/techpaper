exports.header = {
  height: '1cm',
};

exports.footer = {
  height: '1cm',
  contents: function(page, total) {
    return [
      '<footer>',
        '<style>',
          'body {',
            'text-align: justify;',
            'font-family: "Times New Roman";',
            'font-size: 12px;',
            'line-height: 1.5;',
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

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
          // '@font-face {',
          //   'font-family: "Latin Modern";',
          //   `src: url("./fonts/lmroman10-regular.otf");`,
          //   'font-weight: normal;',
          //   'font-style: normal;',
          // '}',
          'body {',
            'text-align: justify;',
            'font-family: "Latin Modern";',
            'font-size: 12px;',
            'line-height: 1.5;',
            'text-align: center;',
          '}',
        '</style>',
        '<span><br/>0xcert protocol ',
          page > 3 ? page - 3 : '',
        '</span>',
      '</footer>'
    ].join('');
  }
};

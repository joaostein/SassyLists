var fs      = require('fs');
var sassdoc = require('sassdoc');
var swig    = require('swig');
var extras  = require('swig-extras');

extras.useFilter(swig, 'markdown');

var version = "2.2.0";

sassdoc.parse(__dirname + '/gems/ruby/2.0.0/gems/SassyLists-' + version + '/stylesheets').then(function (items) {
  var templat_doc    = swig.compileFile(__dirname + '/templates/documentation.html.swig');
  var data = { 'version': version, 'data': items };

  fs.writeFile('documentation.html', templat_doc(data), function (err) {
    if (err) throw err;
    console.log('Documentation correctly generated!');

    var template_index = swig.compileFile(__dirname + '/templates/index.html.swig');

    fs.writeFile('index.html', template_index(data), function (err) {
      if (err) throw err;
      console.log('Index correctly generated!');
    });
  });

})
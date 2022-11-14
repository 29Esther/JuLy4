'use strict';

module.exports.carrier = function (hexo) {
  hexo.extend.helper.register('carrier', function () {
    var config = hexo.theme.config;
    if (!config.carrier || !config.carrier.enable || !config.carrier.type) {
      return;
    }
    var data;
    switch (config.carrier.type) {
      case 'html':
        data = this.page.content;
        data += config.carrier.msg;
        break;
      case 'markdown':
        data = this.page.raw;
        data += config.carrier.msg;
        break;
      case 'text':
        data = this.strip_html(this.page.content);
        data += config.carrier.msg;
        break;
      default:
        data = '没有抓到内容哦~';
    }
    return data;
  });
}
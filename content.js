(function () {
  'use strict';
  let keyword = document.title.split('|')[0].replace(/\([^\(\)]*\)/,'').trim();
  chrome.runtime.sendMessage({ keyword: keyword });
})();
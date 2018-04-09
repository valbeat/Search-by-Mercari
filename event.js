'use strict';

chrome.runtime.onInstalled.addListener(function () {
  let search = chrome.contextMenus.create({
    id: 'search',
    title: 'Search by mercari'
  });
});

chrome.runtime.onMessage.addListener(
  function (message, sender, callback) {
    let keyword = message.keyword;
    chrome.contextMenus.onClicked.addListener(function () {
      chrome.tabs.create({
        url: 'https://www.mercari.com/jp/search/?keyword=' + keyword + '&status_on_sale=1'
      });
    });
  }
)
'use strict';

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'search',
    title: 'Search by mercari',
    contexts: ['selection']
  });

  chrome.contextMenus.onClicked.addListener((info) => {
    let keyword = info.selectionText;
    chrome.tabs.create({
      url: 'https://www.mercari.com/jp/search/?keyword=' + keyword + '&status_on_sale=1'
    });
  });
});
// ==UserScript==
// @name         Icy Veins Wowdb -> Wowhead
// @namespace    https://www.icy-veins.com/
// @version      1.02
// @description  Switch Wowdb links with Wowhead links on Icy Veins
// @author       MuTLY
// @match        https://www.icy-veins.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var links, thisLink;
    links = document.evaluate("//a[@href]",
                              document,
                              null,
                              XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
                              null);
    for (var i=0;i<links.snapshotLength;i++) {
        thisLink = links.snapshotItem(i);
        thisLink.href = thisLink.href.replace('https://www.wowdb.com/items/',
                                              'https://www.wowhead.com/item=');
        thisLink.href = thisLink.href.replace('https://www.wowdb.com/quests/',
                                              'https://www.wowhead.com/quest=');
    }
})();

// Copyright 2017 Robert Badgett
// Derivative of Copyright 2012 Jukka Zitting
// Apache License, Version 2.0 - see the end of this file

var sumsearch = 'http://sumsearch.org';
var toolid = '&tool=omnibox-sumsearch&email=bob.badgett@gmail.com';

function escape(text) {
    text = text.replace(/&/g, "&amp;");
    text = text.replace(/</g, "&lt;");
    text = text.replace(/>/g, "&gt;");
    return text;
}

chrome.omnibox.setDefaultSuggestion({ 'description': '<match>%s</match>' });

chrome.omnibox.onInputEntered.addListener(function(text) {
    var url = text;
    if (text.lastIndexOf(pubmed, 0) != 0) {
        var term = encodeURIComponent(text);
        url = sumsearch + '?q=' + term;
    }
    chrome.tabs.update({ 'url': url });
});

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

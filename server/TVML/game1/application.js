//# sourceURL=application.js

//
//  application.js
//  testTVML
//
//  Created by Ryan Johnson on 2/11/18.
//  Copyright © 2018 Ryan Johnson. All rights reserved.
//

/*
 * This file provides an example skeletal stub for the server-side implementation
 * of a TVML application.
 *
 * A javascript file such as this should be provided at the tvBootURL that is
 * configured in the AppDelegate of the TVML application. Note that  the various
 * javascript functions here are referenced by name in the AppDelegate. This skeletal
 * implementation shows the basic entry points that you will want to handle
 * application lifecycle events.
 */

/* *
 * @description The onLaunch callback is invoked after the application JavaScript
 * has been parsed into a JavaScript context. The handler is passed an object
 * that contains options passed in for launch. These options are defined in the
 * swift or objective-c client code. Options can be used to communicate to
 * your JavaScript code that data and as well as state information, like if the
 * the app is being launched in the background.
 *
 * The location attribute is automatically added to the object and represents
 * the URL that was used to retrieve the application JavaScript.
 */

var viewPath = 'http://localhost:5000/Views/';

App.onLaunch = function(options) {
    var io = require('socket.io-client');
    console.log("in")
    // var socket = io.connect('http://localhost:5000')
    // socket.emit("test")
    baseURL = options.BASEURL;
    var templateURL = viewPath + "mainView.xml";
    getDocument(templateURL);
}


App.onWillResignActive = function() {

}

App.onDidEnterBackground = function() {

}

App.onWillEnterForeground = function() {

}

App.onDidBecomeActive = function() {

}

App.onWillTerminate = function() {

}



var baseURL;

function getDocument(url) {
    var templateXHR = new XMLHttpRequest();
    templateXHR.responseType = "document";
    templateXHR.addEventListener("load", function() {pushDoc(templateXHR.responseXML);}, false);
    templateXHR.open("GET", url, true);
    templateXHR.send();
}

function pushDoc(document) {
    navigationDocument.pushDocument(document);
}

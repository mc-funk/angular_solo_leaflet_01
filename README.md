My attempt to incorporate Leaflet into MEAN stack using Angular. 

Custom directive used: 
[TomBotossals.com: Angular Leaflet Directive](http://tombatossals.github.io/angular-leaflet-directive/#!/)


Other tutorial referenced: 
[ZevRoss.com: Synchronize Leaflet Map Data with AngularJS](http://zevross.com/blog/2014/05/27/synchronize-leaflet-map-data-with-angularjs/)


On server start, the app is currently producing the following error: 
```
/Users/gamezorz/Hackxorz/prime-academy-notes/demos/angular_lecture/node_modules/angular-route/angular-route.js:989

})(window, window.angular);
   ^
ReferenceError: window is not defined
```

This error led me to the information that Leaflet doesn't function properly with Node.js on the server side: 
[Stack Overflow: Running leaflet on nodejs server side](http://stackoverflow.com/questions/28167343/running-leaflet-on-nodejs-server-side)

I tried to implement the following workaround, which replaced the CDN leaflet.js with a local, modified version: 
[Github: Server Side Leaflet](https://github.com/rclark/server-side-leaflet)

So far, I haven't been successful in impelemnting a workaround, though the above is not the only one available.  

(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"燈籠_atlas_1", frames: [[1119,0,106,459],[0,1147,333,283],[1119,461,82,211],[0,0,1117,1145]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_4 = function() {
	this.initialize(ss["燈籠_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["燈籠_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["燈籠_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["燈籠_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.線 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 線
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.線, new cjs.Rectangle(0,0,53,229.5), null);


(lib.本體 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 本體
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.本體, new cjs.Rectangle(0,0,166.5,141.5), null);


(lib.下線 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 下線
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.下線, new cjs.Rectangle(0,0,41,105.5), null);


(lib.中燈籠 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 中燈籠
	this.ikNode_1 = new lib.線();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(118.85,0,0.9999,0.9999,0,0,0,53.1,0);

	this.ikNode_2 = new lib.本體();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(83.3,228.15,0.9999,0.9999,0,0,0,83.3,0);

	this.ikNode_4 = new lib.下線();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(83.35,371.15,0.9999,0.9999,0,0,0,20.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_4,p:{regY:0,rotation:0,x:83.35,y:371.15,scaleX:0.9999,scaleY:0.9999,regX:20.4}},{t:this.ikNode_2,p:{regY:0,rotation:0,x:83.3,y:228.15,scaleX:0.9999,scaleY:0.9999,regX:83.3}},{t:this.ikNode_1,p:{rotation:0,x:118.85,y:0,scaleX:0.9999,scaleY:0.9999,regY:0,regX:53.1}}]}).to({state:[{t:this.ikNode_4,p:{regY:0.1,rotation:0.1513,x:80.95,y:371,scaleX:0.9999,scaleY:0.9999,regX:20.4}},{t:this.ikNode_2,p:{regY:0.1,rotation:0.3751,x:81.85,y:228,scaleX:0.9999,scaleY:0.9999,regX:83.3}},{t:this.ikNode_1,p:{rotation:0.5115,x:119.4,y:0.05,scaleX:0.9999,scaleY:0.9999,regY:0,regX:53.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,rotation:0.3043,x:78.5,y:370.6,scaleX:0.9999,scaleY:0.9999,regX:20.4}},{t:this.ikNode_2,p:{regY:0.1,rotation:0.7529,x:80.3,y:227.6,scaleX:0.9999,scaleY:0.9999,regX:83.3}},{t:this.ikNode_1,p:{rotation:1.0257,x:119.9,y:0.1,scaleX:0.9999,scaleY:0.9999,regY:0,regX:53.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,rotation:0.4573,x:76.05,y:370.2,scaleX:0.9999,scaleY:0.9999,regX:20.4}},{t:this.ikNode_2,p:{regY:0.1,rotation:1.1298,x:78.75,y:227.3,scaleX:0.9999,scaleY:0.9999,regX:83.3}},{t:this.ikNode_1,p:{rotation:1.54,x:120.4,y:0.1,scaleX:0.9999,scaleY:0.9999,regY:0,regX:53.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,rotation:0.6103,x:73.55,y:369.75,scaleX:0.9999,scaleY:0.9999,regX:20.4}},{t:this.ikNode_2,p:{regY:0.1,rotation:1.5067,x:77.25,y:226.9,scaleX:0.9999,scaleY:0.9999,regX:83.3}},{t:this.ikNode_1,p:{rotation:2.0535,x:120.95,y:0.1,scaleX:0.9999,scaleY:0.9999,regY:0,regX:53.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,rotation:0.7642,x:71.1,y:369.35,scaleX:0.9999,scaleY:0.9999,regX:20.4}},{t:this.ikNode_2,p:{regY:0.1,rotation:1.8847,x:75.75,y:226.5,scaleX:0.9999,scaleY:0.9999,regX:83.3}},{t:this.ikNode_1,p:{rotation:2.5681,x:121.45,y:0.1,scaleX:0.9999,scaleY:0.9999,regY:0,regX:53.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,rotation:0.9173,x:68.65,y:368.95,scaleX:0.9998,scaleY:0.9998,regX:20.4}},{t:this.ikNode_2,p:{regY:0.1,rotation:2.2618,x:74.2,y:226.05,scaleX:0.9999,scaleY:0.9999,regX:83.3}},{t:this.ikNode_1,p:{rotation:3.0819,x:121.95,y:0.1,scaleX:0.9999,scaleY:0.9999,regY:0,regX:53.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,rotation:1.0703,x:66.2,y:368.45,scaleX:0.9999,scaleY:0.9999,regX:20.4}},{t:this.ikNode_2,p:{regY:0.1,rotation:2.639,x:72.7,y:225.6,scaleX:0.9998,scaleY:0.9998,regX:83.3}},{t:this.ikNode_1,p:{rotation:3.5953,x:122.45,y:0.1,scaleX:0.9998,scaleY:0.9998,regY:0,regX:53.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,rotation:1.2233,x:63.8,y:367.9,scaleX:0.9999,scaleY:0.9999,regX:20.4}},{t:this.ikNode_2,p:{regY:0.1,rotation:3.0163,x:71.2,y:225.1,scaleX:0.9999,scaleY:0.9999,regX:83.3}},{t:this.ikNode_1,p:{rotation:4.1097,x:122.95,y:0.1,scaleX:0.9999,scaleY:0.9999,regY:0,regX:53.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,rotation:1.3764,x:61.35,y:367.35,scaleX:0.9999,scaleY:0.9999,regX:20.4}},{t:this.ikNode_2,p:{regY:0.1,rotation:3.3938,x:69.75,y:224.6,scaleX:0.9999,scaleY:0.9999,regX:83.3}},{t:this.ikNode_1,p:{rotation:4.6236,x:123.45,y:0.1,scaleX:0.9999,scaleY:0.9999,regY:0,regX:53.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,rotation:1.5295,x:58.9,y:366.8,scaleX:0.9999,scaleY:0.9999,regX:20.4}},{t:this.ikNode_2,p:{regY:0.1,rotation:3.7713,x:68.25,y:224.1,scaleX:0.9999,scaleY:0.9999,regX:83.3}},{t:this.ikNode_1,p:{rotation:5.1378,x:124,y:0.1,scaleX:0.9999,scaleY:0.9999,regY:0,regX:53.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,rotation:1.6835,x:56.45,y:366.25,scaleX:0.9999,scaleY:0.9999,regX:20.4}},{t:this.ikNode_2,p:{regY:0.1,rotation:4.1482,x:66.75,y:223.5,scaleX:0.9999,scaleY:0.9999,regX:83.3}},{t:this.ikNode_1,p:{rotation:5.6516,x:124.5,y:0.15,scaleX:0.9999,scaleY:0.9999,regY:0,regX:53.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,rotation:1.8365,x:54.05,y:365.6,scaleX:0.9999,scaleY:0.9999,regX:20.4}},{t:this.ikNode_2,p:{regY:0.1,rotation:4.5253,x:65.3,y:223,scaleX:0.9999,scaleY:0.9999,regX:83.3}},{t:this.ikNode_1,p:{rotation:6.165,x:125,y:0.1,scaleX:0.9998,scaleY:0.9998,regY:0,regX:53.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,rotation:1.9896,x:51.65,y:365,scaleX:0.9999,scaleY:0.9999,regX:20.4}},{t:this.ikNode_2,p:{regY:0.1,rotation:4.9026,x:63.8,y:222.45,scaleX:0.9999,scaleY:0.9999,regX:83.3}},{t:this.ikNode_1,p:{rotation:6.6797,x:125.55,y:0.1,scaleX:0.9999,scaleY:0.9999,regY:0,regX:53.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,rotation:2.1427,x:49.2,y:364.3,scaleX:0.9999,scaleY:0.9999,regX:20.4}},{t:this.ikNode_2,p:{regY:0.1,rotation:5.2801,x:62.35,y:221.85,scaleX:0.9998,scaleY:0.9998,regX:83.3}},{t:this.ikNode_1,p:{rotation:7.1932,x:126,y:0.1,scaleX:0.9999,scaleY:0.9999,regY:0,regX:53.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,rotation:2.2959,x:46.8,y:363.65,scaleX:0.9999,scaleY:0.9999,regX:20.4}},{t:this.ikNode_2,p:{regY:0.1,rotation:5.6578,x:60.9,y:221.25,scaleX:0.9999,scaleY:0.9999,regX:83.3}},{t:this.ikNode_1,p:{rotation:7.7066,x:126.55,y:0.2,scaleX:0.9999,scaleY:0.9999,regY:0.1,regX:53.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,rotation:2.449,x:44.4,y:362.9,scaleX:0.9999,scaleY:0.9999,regX:20.4}},{t:this.ikNode_2,p:{regY:0.1,rotation:6.0349,x:59.5,y:220.65,scaleX:0.9999,scaleY:0.9999,regX:83.4}},{t:this.ikNode_1,p:{rotation:8.2204,x:127.05,y:0.15,scaleX:0.9999,scaleY:0.9999,regY:0,regX:53.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,rotation:2.6022,x:42.15,y:362.25,scaleX:0.9999,scaleY:0.9999,regX:20.5}},{t:this.ikNode_2,p:{regY:0.1,rotation:6.4122,x:57.95,y:220.05,scaleX:0.9999,scaleY:0.9999,regX:83.3}},{t:this.ikNode_1,p:{rotation:8.7341,x:127.55,y:0.1,scaleX:0.9998,scaleY:0.9998,regY:0,regX:53.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,rotation:2.7554,x:39.6,y:361.45,scaleX:0.9999,scaleY:0.9999,regX:20.4}},{t:this.ikNode_2,p:{regY:0.1,rotation:6.7898,x:56.5,y:219.4,scaleX:0.9999,scaleY:0.9999,regX:83.3}},{t:this.ikNode_1,p:{rotation:9.2484,x:128.05,y:0.15,scaleX:0.9999,scaleY:0.9999,regY:0,regX:53.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,rotation:2.9086,x:37.2,y:360.7,scaleX:0.9999,scaleY:0.9999,regX:20.4}},{t:this.ikNode_2,p:{regY:0.1,rotation:7.1669,x:55.05,y:218.75,scaleX:0.9998,scaleY:0.9998,regX:83.3}},{t:this.ikNode_1,p:{rotation:9.7626,x:128.55,y:0.15,scaleX:0.9998,scaleY:0.9998,regY:0,regX:53.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,rotation:3.0618,x:34.85,y:359.9,scaleX:0.9999,scaleY:0.9999,regX:20.4}},{t:this.ikNode_2,p:{regY:0.1,rotation:7.5433,x:53.55,y:218.1,scaleX:0.9999,scaleY:0.9999,regX:83.3}},{t:this.ikNode_1,p:{rotation:10.2767,x:129.1,y:0.1,scaleX:0.9999,scaleY:0.9999,regY:0,regX:53.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,rotation:3.2151,x:32.5,y:359.1,scaleX:0.9999,scaleY:0.9999,regX:20.4}},{t:this.ikNode_2,p:{regY:0.1,rotation:7.921,x:52.2,y:217.4,scaleX:0.9998,scaleY:0.9998,regX:83.3}},{t:this.ikNode_1,p:{rotation:10.79,x:129.6,y:0.15,scaleX:0.9998,scaleY:0.9998,regY:0,regX:53.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,rotation:3.3684,x:30.15,y:358.2,scaleX:0.9999,scaleY:0.9999,regX:20.4}},{t:this.ikNode_2,p:{regY:0.1,rotation:8.2982,x:50.75,y:216.65,scaleX:0.9999,scaleY:0.9999,regX:83.3}},{t:this.ikNode_1,p:{rotation:11.3048,x:130.1,y:0.15,scaleX:0.9999,scaleY:0.9999,regY:0,regX:53.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,rotation:3.5216,x:27.8,y:357.35,scaleX:0.9999,scaleY:0.9999,regX:20.4}},{t:this.ikNode_2,p:{regY:0.1,rotation:8.6766,x:49.4,y:215.85,scaleX:0.9999,scaleY:0.9999,regX:83.3}},{t:this.ikNode_1,p:{rotation:11.8189,x:130.65,y:0.1,scaleX:0.9999,scaleY:0.9999,regY:0,regX:53.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,rotation:3.6749,x:25.45,y:356.45,scaleX:0.9999,scaleY:0.9999,regX:20.4}},{t:this.ikNode_2,p:{regY:0.1,rotation:9.0526,x:47.95,y:215.15,scaleX:0.9999,scaleY:0.9999,regX:83.3}},{t:this.ikNode_1,p:{rotation:12.3322,x:131.1,y:0.15,scaleX:0.9998,scaleY:0.9998,regY:0,regX:53.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,rotation:3.8283,x:23.1,y:355.55,scaleX:0.9999,scaleY:0.9999,regX:20.4}},{t:this.ikNode_2,p:{regY:0.1,rotation:9.4308,x:46.55,y:214.4,scaleX:0.9999,scaleY:0.9999,regX:83.3}},{t:this.ikNode_1,p:{rotation:12.8464,x:131.65,y:0.15,scaleX:0.9999,scaleY:0.9999,regY:0,regX:53.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,rotation:3.9808,x:20.8,y:354.6,scaleX:0.9999,scaleY:0.9999,regX:20.4}},{t:this.ikNode_2,p:{regY:0.1,rotation:9.807,x:45.15,y:213.65,scaleX:0.9998,scaleY:0.9998,regX:83.3}},{t:this.ikNode_1,p:{rotation:13.3599,x:132.15,y:0.15,scaleX:0.9999,scaleY:0.9999,regY:0,regX:53.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,rotation:4.1342,x:18.55,y:353.65,scaleX:0.9999,scaleY:0.9999,regX:20.4}},{t:this.ikNode_2,p:{regY:0.1,rotation:10.1842,x:43.85,y:212.85,scaleX:0.9999,scaleY:0.9999,regX:83.4}},{t:this.ikNode_1,p:{rotation:13.8746,x:132.65,y:0.15,scaleX:0.9999,scaleY:0.9999,regY:0,regX:53.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,rotation:4.2876,x:16.25,y:352.65,scaleX:0.9999,scaleY:0.9999,regX:20.4}},{t:this.ikNode_2,p:{regY:0.1,rotation:10.5621,x:42.45,y:212,scaleX:0.9998,scaleY:0.9998,regX:83.4}},{t:this.ikNode_1,p:{rotation:14.3876,x:133.2,y:0.15,scaleX:0.9999,scaleY:0.9999,regY:0,regX:53.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,rotation:4.4411,x:13.95,y:351.7,scaleX:0.9999,scaleY:0.9999,regX:20.4}},{t:this.ikNode_2,p:{regY:0.1,rotation:10.9395,x:41,y:211.1,scaleX:0.9999,scaleY:0.9999,regX:83.3}},{t:this.ikNode_1,p:{rotation:14.9011,x:133.65,y:0.15,scaleX:0.9998,scaleY:0.9998,regY:0,regX:53.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,rotation:4.5937,x:11.65,y:350.6,scaleX:0.9999,scaleY:0.9999,regX:20.4}},{t:this.ikNode_2,p:{regY:0.1,rotation:11.3164,x:39.65,y:210.3,scaleX:0.9999,scaleY:0.9999,regX:83.3}},{t:this.ikNode_1,p:{rotation:15.4157,x:134.3,y:0.2,scaleX:0.9999,scaleY:0.9999,regY:0,regX:53.2}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,rotation:4.4359,x:14.1,y:351.65,scaleX:0.9999,scaleY:0.9999,regX:20.4}},{t:this.ikNode_2,p:{regY:0.1,rotation:10.927,x:41.15,y:211.2,scaleX:0.9999,scaleY:0.9999,regX:83.4}},{t:this.ikNode_1,p:{rotation:14.8839,x:133.65,y:0.15,scaleX:0.9998,scaleY:0.9998,regY:0,regX:53.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0,rotation:4.2771,x:16.4,y:352.6,scaleX:0.9999,scaleY:0.9999,regX:20.4}},{t:this.ikNode_2,p:{regY:0.1,rotation:10.5355,x:42.6,y:212,scaleX:0.9998,scaleY:0.9998,regX:83.4}},{t:this.ikNode_1,p:{rotation:14.3524,x:133.15,y:0.05,scaleX:0.9999,scaleY:0.9999,regY:-0.1,regX:53.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,rotation:4.1184,x:18.8,y:353.75,scaleX:0.9999,scaleY:0.9999,regX:20.4}},{t:this.ikNode_2,p:{regY:0.1,rotation:10.1453,x:43.95,y:212.85,scaleX:0.9999,scaleY:0.9999,regX:83.3}},{t:this.ikNode_1,p:{rotation:13.8206,x:132.6,y:0.15,scaleX:0.9999,scaleY:0.9999,regY:0,regX:53.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,rotation:3.9598,x:21.1,y:354.75,scaleX:0.9999,scaleY:0.9999,regX:20.4}},{t:this.ikNode_2,p:{regY:0.1,rotation:9.7554,x:45.35,y:213.65,scaleX:0.9998,scaleY:0.9998,regX:83.3}},{t:this.ikNode_1,p:{rotation:13.2891,x:132.05,y:0.15,scaleX:0.9998,scaleY:0.9998,regY:0,regX:53.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,rotation:3.8012,x:23.55,y:355.65,scaleX:0.9999,scaleY:0.9999,regX:20.4}},{t:this.ikNode_2,p:{regY:0.1,rotation:9.3644,x:46.9,y:214.55,scaleX:0.9999,scaleY:0.9999,regX:83.4}},{t:this.ikNode_1,p:{rotation:12.7576,x:131.55,y:0.1,scaleX:0.9999,scaleY:0.9999,regY:0,regX:53.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,rotation:3.6434,x:25.9,y:356.6,scaleX:0.9999,scaleY:0.9999,regX:20.4}},{t:this.ikNode_2,p:{regY:0.1,rotation:8.9747,x:48.25,y:215.35,scaleX:0.9998,scaleY:0.9998,regX:83.3}},{t:this.ikNode_1,p:{rotation:12.2265,x:131,y:0.15,scaleX:0.9999,scaleY:0.9999,regY:0,regX:53.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,rotation:3.4849,x:28.35,y:357.6,scaleX:0.9999,scaleY:0.9999,regX:20.4}},{t:this.ikNode_2,p:{regY:0.1,rotation:8.5846,x:49.7,y:216.05,scaleX:0.9999,scaleY:0.9999,regX:83.3}},{t:this.ikNode_1,p:{rotation:11.6939,x:130.5,y:0.15,scaleX:0.9999,scaleY:0.9999,regY:0,regX:53.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,rotation:3.3263,x:30.8,y:358.5,scaleX:0.9999,scaleY:0.9999,regX:20.4}},{t:this.ikNode_2,p:{regY:0.1,rotation:8.1939,x:51.2,y:216.85,scaleX:0.9999,scaleY:0.9999,regX:83.3}},{t:this.ikNode_1,p:{rotation:11.1623,x:130,y:0.15,scaleX:0.9999,scaleY:0.9999,regY:0,regX:53.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,rotation:3.1678,x:33.2,y:359.35,scaleX:0.9999,scaleY:0.9999,regX:20.4}},{t:this.ikNode_2,p:{regY:0.1,rotation:7.8036,x:52.6,y:217.55,scaleX:0.9999,scaleY:0.9999,regX:83.3}},{t:this.ikNode_1,p:{rotation:10.6315,x:129.45,y:0.15,scaleX:0.9998,scaleY:0.9998,regY:0,regX:53.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,rotation:3.0093,x:35.65,y:360.15,scaleX:0.9999,scaleY:0.9999,regX:20.4}},{t:this.ikNode_2,p:{regY:0.1,rotation:7.4129,x:54.15,y:218.25,scaleX:0.9999,scaleY:0.9999,regX:83.3}},{t:this.ikNode_1,p:{rotation:10.099,x:128.9,y:0.1,scaleX:0.9999,scaleY:0.9999,regY:0,regX:53.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,rotation:2.8508,x:38.1,y:361,scaleX:0.9999,scaleY:0.9999,regX:20.4}},{t:this.ikNode_2,p:{regY:0.1,rotation:7.024,x:55.6,y:219,scaleX:0.9999,scaleY:0.9999,regX:83.3}},{t:this.ikNode_1,p:{rotation:9.5674,x:128.35,y:0.1,scaleX:0.9999,scaleY:0.9999,regY:0,regX:53.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,rotation:2.6924,x:40.6,y:361.8,scaleX:0.9998,scaleY:0.9998,regX:20.4}},{t:this.ikNode_2,p:{regY:0.1,rotation:6.633,x:57.1,y:219.65,scaleX:0.9999,scaleY:0.9999,regX:83.3}},{t:this.ikNode_1,p:{rotation:9.0358,x:127.85,y:0.15,scaleX:0.9999,scaleY:0.9999,regY:0,regX:53.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,rotation:2.534,x:43.2,y:362.55,scaleX:0.9999,scaleY:0.9999,regX:20.5}},{t:this.ikNode_2,p:{regY:0.1,rotation:6.2432,x:58.6,y:220.3,scaleX:0.9998,scaleY:0.9998,regX:83.3}},{t:this.ikNode_1,p:{rotation:8.504,x:127.3,y:0.1,scaleX:0.9999,scaleY:0.9999,regY:0,regX:53.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,rotation:2.3755,x:45.6,y:363.3,scaleX:0.9999,scaleY:0.9999,regX:20.4}},{t:this.ikNode_2,p:{regY:0.1,rotation:5.8528,x:60.1,y:221,scaleX:0.9999,scaleY:0.9999,regX:83.3}},{t:this.ikNode_1,p:{rotation:7.9731,x:126.8,y:0.1,scaleX:0.9998,scaleY:0.9998,regY:0,regX:53.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,rotation:2.2163,x:48.05,y:363.95,scaleX:0.9999,scaleY:0.9999,regX:20.4}},{t:this.ikNode_2,p:{regY:0.1,rotation:5.4627,x:61.6,y:221.65,scaleX:0.9999,scaleY:0.9999,regX:83.3}},{t:this.ikNode_1,p:{rotation:7.4411,x:126.25,y:0.1,scaleX:0.9999,scaleY:0.9999,regY:0,regX:53.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,rotation:2.0579,x:50.55,y:364.7,scaleX:0.9999,scaleY:0.9999,regX:20.4}},{t:this.ikNode_2,p:{regY:0.1,rotation:5.072,x:63.1,y:222.2,scaleX:0.9999,scaleY:0.9999,regX:83.3}},{t:this.ikNode_1,p:{rotation:6.9096,x:125.75,y:0.1,scaleX:0.9999,scaleY:0.9999,regY:0,regX:53.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,rotation:1.8995,x:53.05,y:365.4,scaleX:0.9998,scaleY:0.9998,regX:20.4}},{t:this.ikNode_2,p:{regY:0.1,rotation:4.6814,x:64.65,y:222.75,scaleX:0.9999,scaleY:0.9999,regX:83.3}},{t:this.ikNode_1,p:{rotation:6.3779,x:125.2,y:0.1,scaleX:0.9999,scaleY:0.9999,regY:0,regX:53.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,rotation:1.7412,x:55.55,y:366,scaleX:0.9998,scaleY:0.9998,regX:20.4}},{t:this.ikNode_2,p:{regY:0.1,rotation:4.2911,x:66.2,y:223.4,scaleX:0.9999,scaleY:0.9999,regX:83.3}},{t:this.ikNode_1,p:{rotation:5.8468,x:124.7,y:0.1,scaleX:0.9999,scaleY:0.9999,regY:0,regX:53.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,rotation:1.5829,x:58.05,y:366.6,scaleX:0.9999,scaleY:0.9999,regX:20.4}},{t:this.ikNode_2,p:{regY:0.1,rotation:3.901,x:67.75,y:223.9,scaleX:0.9999,scaleY:0.9999,regX:83.3}},{t:this.ikNode_1,p:{rotation:5.3143,x:124.15,y:0.1,scaleX:0.9999,scaleY:0.9999,regY:0,regX:53.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,rotation:1.4245,x:60.55,y:367.15,scaleX:0.9999,scaleY:0.9999,regX:20.4}},{t:this.ikNode_2,p:{regY:0.1,rotation:3.5112,x:69.3,y:224.45,scaleX:0.9998,scaleY:0.9998,regX:83.3}},{t:this.ikNode_1,p:{rotation:4.7832,x:123.6,y:0.1,scaleX:0.9999,scaleY:0.9999,regY:0,regX:53.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,rotation:1.2654,x:63.1,y:367.75,scaleX:0.9999,scaleY:0.9999,regX:20.4}},{t:this.ikNode_2,p:{regY:0.1,rotation:3.1205,x:70.8,y:225,scaleX:0.9999,scaleY:0.9999,regX:83.3}},{t:this.ikNode_1,p:{rotation:4.2517,x:123.1,y:0.1,scaleX:0.9999,scaleY:0.9999,regY:0,regX:53.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,rotation:1.1071,x:65.6,y:368.3,scaleX:0.9999,scaleY:0.9999,regX:20.4}},{t:this.ikNode_2,p:{regY:0.1,rotation:2.73,x:72.35,y:225.4,scaleX:0.9998,scaleY:0.9998,regX:83.3}},{t:this.ikNode_1,p:{rotation:3.7196,x:122.6,y:0.1,scaleX:0.9999,scaleY:0.9999,regY:0,regX:53.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,rotation:0.9488,x:68.15,y:368.8,scaleX:0.9998,scaleY:0.9998,regX:20.4}},{t:this.ikNode_2,p:{regY:0.1,rotation:2.3396,x:73.9,y:225.95,scaleX:0.9999,scaleY:0.9999,regX:83.3}},{t:this.ikNode_1,p:{rotation:3.1879,x:122.05,y:0.1,scaleX:0.9999,scaleY:0.9999,regY:0,regX:53.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,rotation:0.7905,x:70.7,y:369.3,scaleX:0.9999,scaleY:0.9999,regX:20.4}},{t:this.ikNode_2,p:{regY:0.1,rotation:1.9494,x:75.5,y:226.4,scaleX:0.9999,scaleY:0.9999,regX:83.3}},{t:this.ikNode_1,p:{rotation:2.6565,x:121.55,y:0.1,scaleX:0.9998,scaleY:0.9998,regY:0,regX:53.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,rotation:0.6322,x:73.25,y:369.75,scaleX:0.9999,scaleY:0.9999,regX:20.4}},{t:this.ikNode_2,p:{regY:0.1,rotation:1.5592,x:77.05,y:226.8,scaleX:0.9999,scaleY:0.9999,regX:83.3}},{t:this.ikNode_1,p:{rotation:2.1244,x:121.05,y:0.05,scaleX:0.9999,scaleY:0.9999,regY:0,regX:53.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,rotation:0.473,x:75.75,y:370.15,scaleX:0.9999,scaleY:0.9999,regX:20.4}},{t:this.ikNode_2,p:{regY:0.1,rotation:1.1691,x:78.6,y:227.2,scaleX:0.9999,scaleY:0.9999,regX:83.3}},{t:this.ikNode_1,p:{rotation:1.5925,x:120.45,y:0.05,scaleX:0.9999,scaleY:0.9999,regY:0,regX:53.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,rotation:0.3148,x:78.35,y:370.6,scaleX:0.9999,scaleY:0.9999,regX:20.4}},{t:this.ikNode_2,p:{regY:0.1,rotation:0.7782,x:80.2,y:227.65,scaleX:0.9999,scaleY:0.9999,regX:83.3}},{t:this.ikNode_1,p:{rotation:1.0616,x:119.95,y:0.1,scaleX:0.9999,scaleY:0.9999,regY:0,regX:53.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,rotation:0.1565,x:80.85,y:370.95,scaleX:0.9999,scaleY:0.9999,regX:20.4}},{t:this.ikNode_2,p:{regY:0.1,rotation:0.3882,x:81.8,y:227.95,scaleX:0.9999,scaleY:0.9999,regX:83.3}},{t:this.ikNode_1,p:{rotation:0.5299,x:119.4,y:0.1,scaleX:0.9999,scaleY:0.9999,regY:0,regX:53.1}}]},1).to({state:[{t:this.ikNode_4,p:{regY:0.1,rotation:0,x:83.45,y:371.3,scaleX:0.9999,scaleY:0.9999,regX:20.4}},{t:this.ikNode_2,p:{regY:0.1,rotation:0,x:83.3,y:228.35,scaleX:0.9999,scaleY:0.9999,regX:83.3}},{t:this.ikNode_1,p:{rotation:0,x:118.95,y:0,scaleX:0.9999,scaleY:0.9999,regY:0,regX:53.1}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.7,-13.9,236.2,490.59999999999997);


(lib.大燈籠 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 大燈籠
	this.ikNode_1 = new lib.線();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(-96,-265.5,1,1,0,0,0,53.1,0);

	this.ikNode_2 = new lib.本體();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(-131.65,-37.25,1,1,0,0,0,83.3,0);

	this.ikNode_4 = new lib.下線();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(-131.5,105.75,1,1,0,0,0,20.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_4,p:{rotation:0,x:-131.5,y:105.75}},{t:this.ikNode_2,p:{rotation:0,x:-131.65,y:-37.25}},{t:this.ikNode_1,p:{rotation:0,x:-96,y:-265.5,regY:0}}]}).to({state:[{t:this.ikNode_4,p:{rotation:0.007,x:-128.05,y:106.05}},{t:this.ikNode_2,p:{rotation:-0.2929,x:-128.9,y:-36.75}},{t:this.ikNode_1,p:{rotation:-0.6793,x:-95.95,y:-265.45,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.0149,x:-124.6,y:106.45}},{t:this.ikNode_2,p:{rotation:-0.5858,x:-126.2,y:-36.4}},{t:this.ikNode_1,p:{rotation:-1.3596,x:-95.95,y:-265.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.0227,x:-121.15,y:106.75}},{t:this.ikNode_2,p:{rotation:-0.8787,x:-123.45,y:-36.05}},{t:this.ikNode_1,p:{rotation:-2.0392,x:-96,y:-265.45,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.0297,x:-117.7,y:107.05}},{t:this.ikNode_2,p:{rotation:-1.1725,x:-120.75,y:-35.7}},{t:this.ikNode_1,p:{rotation:-2.7191,x:-95.95,y:-265.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.0376,x:-114.25,y:107.3}},{t:this.ikNode_2,p:{rotation:-1.4654,x:-118.05,y:-35.45}},{t:this.ikNode_1,p:{rotation:-3.3985,x:-95.95,y:-265.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.0455,x:-110.75,y:107.55}},{t:this.ikNode_2,p:{rotation:-1.7584,x:-115.3,y:-35.2}},{t:this.ikNode_1,p:{rotation:-4.0784,x:-96,y:-265.45,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.0525,x:-107.3,y:107.7}},{t:this.ikNode_2,p:{rotation:-2.0515,x:-112.55,y:-35}},{t:this.ikNode_1,p:{rotation:-4.758,x:-96,y:-265.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.0603,x:-103.85,y:107.85}},{t:this.ikNode_2,p:{rotation:-2.3446,x:-109.8,y:-34.8}},{t:this.ikNode_1,p:{rotation:-5.4383,x:-95.95,y:-265.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.0682,x:-100.35,y:108}},{t:this.ikNode_2,p:{rotation:-2.6377,x:-107.1,y:-34.65}},{t:this.ikNode_1,p:{rotation:-6.1176,x:-95.95,y:-265.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.0761,x:-96.9,y:108.1}},{t:this.ikNode_2,p:{rotation:-2.9309,x:-104.35,y:-34.5}},{t:this.ikNode_1,p:{rotation:-6.7976,x:-95.95,y:-265.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.0831,x:-93.45,y:108.15}},{t:this.ikNode_2,p:{rotation:-3.2242,x:-101.6,y:-34.45}},{t:this.ikNode_1,p:{rotation:-7.4779,x:-95.95,y:-265.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.0909,x:-89.95,y:108.15}},{t:this.ikNode_2,p:{rotation:-3.5168,x:-98.85,y:-34.35}},{t:this.ikNode_1,p:{rotation:-8.1574,x:-95.95,y:-265.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.0988,x:-86.5,y:108.1}},{t:this.ikNode_2,p:{rotation:-3.8102,x:-96.15,y:-34.35}},{t:this.ikNode_1,p:{rotation:-8.8372,x:-96,y:-265.35,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.1058,x:-83.05,y:108.05}},{t:this.ikNode_2,p:{rotation:-4.1039,x:-93.35,y:-34.35}},{t:this.ikNode_1,p:{rotation:-9.5174,x:-95.95,y:-265.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.1137,x:-79.55,y:107.95}},{t:this.ikNode_2,p:{rotation:-4.3966,x:-90.65,y:-34.4}},{t:this.ikNode_1,p:{rotation:-10.1969,x:-95.95,y:-265.35,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.1215,x:-76.1,y:107.8}},{t:this.ikNode_2,p:{rotation:-4.6896,x:-87.9,y:-34.45}},{t:this.ikNode_1,p:{rotation:-10.8765,x:-95.95,y:-265.35,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.1285,x:-72.65,y:107.6}},{t:this.ikNode_2,p:{rotation:-4.9826,x:-85.15,y:-34.6}},{t:this.ikNode_1,p:{rotation:-11.5565,x:-95.95,y:-265.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.1364,x:-69.15,y:107.4}},{t:this.ikNode_2,p:{rotation:-5.2758,x:-82.4,y:-34.7}},{t:this.ikNode_1,p:{rotation:-12.2364,x:-95.95,y:-265.35,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.1443,x:-65.7,y:107.15}},{t:this.ikNode_2,p:{rotation:-5.5691,x:-79.7,y:-34.9}},{t:this.ikNode_1,p:{rotation:-12.9164,x:-95.95,y:-265.35,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.1521,x:-62.25,y:106.85}},{t:this.ikNode_2,p:{rotation:-5.8626,x:-76.95,y:-35.1}},{t:this.ikNode_1,p:{rotation:-13.5954,x:-95.95,y:-265.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.1591,x:-58.8,y:106.55}},{t:this.ikNode_2,p:{rotation:-6.1553,x:-74.25,y:-35.35}},{t:this.ikNode_1,p:{rotation:-14.2754,x:-95.95,y:-265.35,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.167,x:-55.35,y:106.2}},{t:this.ikNode_2,p:{rotation:-6.4482,x:-71.5,y:-35.6}},{t:this.ikNode_1,p:{rotation:-14.9557,x:-95.95,y:-265.35,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.1749,x:-51.9,y:105.8}},{t:this.ikNode_2,p:{rotation:-6.7414,x:-68.8,y:-35.95}},{t:this.ikNode_1,p:{rotation:-15.6357,x:-95.9,y:-265.25,regY:0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.1818,x:-48.45,y:105.35}},{t:this.ikNode_2,p:{rotation:-7.0346,x:-66.05,y:-36.25}},{t:this.ikNode_1,p:{rotation:-16.315,x:-95.95,y:-265.35,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.1897,x:-45,y:104.95}},{t:this.ikNode_2,p:{rotation:-7.328,x:-63.35,y:-36.6}},{t:this.ikNode_1,p:{rotation:-16.9947,x:-95.9,y:-265.3,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.1976,x:-41.55,y:104.45}},{t:this.ikNode_2,p:{rotation:-7.6207,x:-60.6,y:-37}},{t:this.ikNode_1,p:{rotation:-17.6744,x:-95.95,y:-265.3,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.2055,x:-38.15,y:103.9}},{t:this.ikNode_2,p:{rotation:-7.9137,x:-57.9,y:-37.45}},{t:this.ikNode_1,p:{rotation:-18.3548,x:-95.95,y:-265.3,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.2124,x:-34.7,y:103.4}},{t:this.ikNode_2,p:{rotation:-8.2069,x:-55.2,y:-37.9}},{t:this.ikNode_1,p:{rotation:-19.0341,x:-95.95,y:-265.3,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.2203,x:-31.3,y:102.75}},{t:this.ikNode_2,p:{rotation:-8.5002,x:-52.5,y:-38.4}},{t:this.ikNode_1,p:{rotation:-19.7143,x:-95.9,y:-265.3,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.2133,x:-34.6,y:103.35}},{t:this.ikNode_2,p:{rotation:-8.2165,x:-55.1,y:-37.95}},{t:this.ikNode_1,p:{rotation:-19.057,x:-95.95,y:-265.35,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.2055,x:-37.9,y:103.85}},{t:this.ikNode_2,p:{rotation:-7.934,x:-57.7,y:-37.5}},{t:this.ikNode_1,p:{rotation:-18.3998,x:-95.9,y:-265.3,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.1985,x:-41.2,y:104.4}},{t:this.ikNode_2,p:{rotation:-7.6498,x:-60.35,y:-37.05}},{t:this.ikNode_1,p:{rotation:-17.7424,x:-95.95,y:-265.35,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.1906,x:-44.55,y:104.9}},{t:this.ikNode_2,p:{rotation:-7.3668,x:-62.95,y:-36.7}},{t:this.ikNode_1,p:{rotation:-17.0854,x:-95.95,y:-265.35,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.1836,x:-47.85,y:105.3}},{t:this.ikNode_2,p:{rotation:-7.0839,x:-65.6,y:-36.3}},{t:this.ikNode_1,p:{rotation:-16.4279,x:-95.9,y:-265.35,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.1757,x:-51.2,y:105.7}},{t:this.ikNode_2,p:{rotation:-6.8003,x:-68.25,y:-35.95}},{t:this.ikNode_1,p:{rotation:-15.771,x:-95.95,y:-265.35,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.1687,x:-54.55,y:106.1}},{t:this.ikNode_2,p:{rotation:-6.5169,x:-70.85,y:-35.7}},{t:this.ikNode_1,p:{rotation:-15.1143,x:-95.95,y:-265.35,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.1617,x:-57.85,y:106.45}},{t:this.ikNode_2,p:{rotation:-6.2336,x:-73.5,y:-35.4}},{t:this.ikNode_1,p:{rotation:-14.4569,x:-95.95,y:-265.35,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.1539,x:-61.2,y:106.75}},{t:this.ikNode_2,p:{rotation:-5.9505,x:-76.1,y:-35.2}},{t:this.ikNode_1,p:{rotation:-13.7996,x:-95.95,y:-265.45,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.1469,x:-64.55,y:107.05}},{t:this.ikNode_2,p:{rotation:-5.6667,x:-78.75,y:-34.95}},{t:this.ikNode_1,p:{rotation:-13.1425,x:-95.95,y:-265.35,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.139,x:-67.9,y:107.3}},{t:this.ikNode_2,p:{rotation:-5.3838,x:-81.4,y:-34.8}},{t:this.ikNode_1,p:{rotation:-12.4852,x:-95.95,y:-265.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.132,x:-71.25,y:107.55}},{t:this.ikNode_2,p:{rotation:-5.1002,x:-84.1,y:-34.65}},{t:this.ikNode_1,p:{rotation:-11.8279,x:-95.95,y:-265.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.125,x:-74.6,y:107.7}},{t:this.ikNode_2,p:{rotation:-4.8167,x:-86.7,y:-34.55}},{t:this.ikNode_1,p:{rotation:-11.1712,x:-95.95,y:-265.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.1172,x:-77.95,y:107.9}},{t:this.ikNode_2,p:{rotation:-4.5335,x:-89.35,y:-34.45}},{t:this.ikNode_1,p:{rotation:-10.5143,x:-95.95,y:-265.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.1102,x:-81.3,y:108}},{t:this.ikNode_2,p:{rotation:-4.2502,x:-92.05,y:-34.35}},{t:this.ikNode_1,p:{rotation:-9.857,x:-95.95,y:-265.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.1023,x:-84.65,y:108.1}},{t:this.ikNode_2,p:{rotation:-3.9663,x:-94.65,y:-34.35}},{t:this.ikNode_1,p:{rotation:-9.2002,x:-95.95,y:-265.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.0953,x:-88,y:108.15}},{t:this.ikNode_2,p:{rotation:-3.6832,x:-97.3,y:-34.35}},{t:this.ikNode_1,p:{rotation:-8.5427,x:-95.95,y:-265.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.0874,x:-91.35,y:108.15}},{t:this.ikNode_2,p:{rotation:-3.4003,x:-99.95,y:-34.4}},{t:this.ikNode_1,p:{rotation:-7.8854,x:-95.95,y:-265.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.0804,x:-94.7,y:108.15}},{t:this.ikNode_2,p:{rotation:-3.1165,x:-102.6,y:-34.5}},{t:this.ikNode_1,p:{rotation:-7.2284,x:-95.95,y:-265.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.0734,x:-98.05,y:108.1}},{t:this.ikNode_2,p:{rotation:-2.8329,x:-105.25,y:-34.55}},{t:this.ikNode_1,p:{rotation:-6.5714,x:-95.95,y:-265.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.0656,x:-101.4,y:107.95}},{t:this.ikNode_2,p:{rotation:-2.5502,x:-107.9,y:-34.7}},{t:this.ikNode_1,p:{rotation:-5.9135,x:-96,y:-265.45,regY:-0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.0586,x:-104.75,y:107.85}},{t:this.ikNode_2,p:{rotation:-2.2667,x:-110.55,y:-34.85}},{t:this.ikNode_1,p:{rotation:-5.2565,x:-95.95,y:-265.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.0507,x:-108.1,y:107.7}},{t:this.ikNode_2,p:{rotation:-1.9832,x:-113.2,y:-35.05}},{t:this.ikNode_1,p:{rotation:-4.5992,x:-95.95,y:-265.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.0437,x:-111.45,y:107.5}},{t:this.ikNode_2,p:{rotation:-1.6998,x:-115.85,y:-35.2}},{t:this.ikNode_1,p:{rotation:-3.9426,x:-96,y:-265.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.0367,x:-114.8,y:107.3}},{t:this.ikNode_2,p:{rotation:-1.4165,x:-118.5,y:-35.5}},{t:this.ikNode_1,p:{rotation:-3.2856,x:-96,y:-265.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.0289,x:-118.15,y:107}},{t:this.ikNode_2,p:{rotation:-1.1331,x:-121.1,y:-35.75}},{t:this.ikNode_1,p:{rotation:-2.6281,x:-95.95,y:-265.45,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.0219,x:-121.5,y:106.75}},{t:this.ikNode_2,p:{rotation:-0.8498,x:-123.75,y:-36.1}},{t:this.ikNode_1,p:{rotation:-1.971,x:-96,y:-265.45,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.014,x:-124.8,y:106.4}},{t:this.ikNode_2,p:{rotation:-0.5665,x:-126.35,y:-36.4}},{t:this.ikNode_1,p:{rotation:-1.3141,x:-95.95,y:-265.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.007,x:-128.15,y:106.05}},{t:this.ikNode_2,p:{rotation:-0.2833,x:-129,y:-36.75}},{t:this.ikNode_1,p:{rotation:-0.6566,x:-95.95,y:-265.4,regY:0}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0,x:-131.45,y:105.75}},{t:this.ikNode_2,p:{rotation:0,x:-131.6,y:-37.25}},{t:this.ikNode_1,p:{rotation:0,x:-95.95,y:-265.5,regY:0}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-214.9,-265.5,265.6,479.2);


(lib.小燈籠 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 小燈籠
	this.ikNode_1 = new lib.線();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(118.95,0,1,1,0,0,0,53.1,0);

	this.ikNode_2 = new lib.本體();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(83.3,228.25,1,1,0,0,0,83.3,0);

	this.ikNode_4 = new lib.下線();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(83.45,371.25,1,1,0,0,0,20.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_4,p:{rotation:0,x:83.45,y:371.25,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:0,x:83.3,y:228.25,regY:0,regX:83.3}},{t:this.ikNode_1,p:{rotation:0,x:118.95,y:0}}]}).to({state:[{t:this.ikNode_4,p:{rotation:0.7265,x:81.6,y:371.1,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:0.4345,x:82.65,y:228.15,regY:0,regX:83.3}},{t:this.ikNode_1,p:{rotation:0.1757,x:118.9,y:0.05}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.4541,x:79.8,y:370.95,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:0.8682,x:81.95,y:228,regY:0,regX:83.3}},{t:this.ikNode_1,p:{rotation:0.3523,x:118.9,y:0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:2.181,x:78.05,y:370.85,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:1.3028,x:81.25,y:227.9,regY:0,regX:83.3}},{t:this.ikNode_1,p:{rotation:0.5281,x:118.9,y:0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:2.9082,x:76.2,y:370.7,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:1.7375,x:80.5,y:227.75,regY:0,regX:83.3}},{t:this.ikNode_1,p:{rotation:0.7047,x:118.9,y:0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:3.635,x:74.45,y:370.55,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:2.1722,x:79.85,y:227.65,regY:0,regX:83.3}},{t:this.ikNode_1,p:{rotation:0.8804,x:118.9,y:0.05}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:4.3624,x:72.65,y:370.4,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:2.6062,x:79.1,y:227.55,regY:0,regX:83.3}},{t:this.ikNode_1,p:{rotation:1.057,x:118.9,y:0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:5.0897,x:70.85,y:370.2,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:3.0413,x:78.45,y:227.4,regY:0,regX:83.3}},{t:this.ikNode_1,p:{rotation:1.2328,x:118.9,y:0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:5.816,x:69.1,y:370,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:3.4756,x:77.75,y:227.25,regY:0,regX:83.3}},{t:this.ikNode_1,p:{rotation:1.4095,x:118.9,y:0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:6.5432,x:67.3,y:369.8,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:3.9101,x:77,y:227.15,regY:0,regX:83.3}},{t:this.ikNode_1,p:{rotation:1.5853,x:118.9,y:0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:7.2708,x:65.55,y:369.6,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:4.3449,x:76.3,y:227,regY:0,regX:83.3}},{t:this.ikNode_1,p:{rotation:1.7619,x:118.85,y:0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:7.9976,x:63.75,y:369.4,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:4.779,x:75.6,y:226.9,regY:0,regX:83.3}},{t:this.ikNode_1,p:{rotation:1.9378,x:118.85,y:0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:8.7248,x:61.95,y:369.15,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:5.2135,x:74.95,y:226.7,regY:0,regX:83.3}},{t:this.ikNode_1,p:{rotation:2.1145,x:118.85,y:0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:9.4517,x:60.2,y:368.9,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:5.6482,x:74.25,y:226.6,regY:0,regX:83.3}},{t:this.ikNode_1,p:{rotation:2.2903,x:118.85,y:0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:10.1793,x:58.45,y:368.65,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:6.0824,x:73.55,y:226.45,regY:0,regX:83.3}},{t:this.ikNode_1,p:{rotation:2.4662,x:118.85,y:0.15}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:10.9058,x:56.7,y:368.4,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:6.5169,x:72.85,y:226.3,regY:0,regX:83.3}},{t:this.ikNode_1,p:{rotation:2.643,x:118.85,y:0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:11.6333,x:54.9,y:368,regY:-0.1,regX:20.4}},{t:this.ikNode_2,p:{rotation:6.9517,x:72.15,y:226.2,regY:0,regX:83.3}},{t:this.ikNode_1,p:{rotation:2.8189,x:118.85,y:0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:12.36,x:53.2,y:367.9,regY:0,regX:20.5}},{t:this.ikNode_2,p:{rotation:7.386,x:71.45,y:226,regY:0,regX:83.3}},{t:this.ikNode_1,p:{rotation:2.9949,x:118.85,y:0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:13.0877,x:51.3,y:367.55,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:7.821,x:70.75,y:225.9,regY:0,regX:83.3}},{t:this.ikNode_1,p:{rotation:3.1717,x:118.8,y:0.15}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:13.8149,x:49.55,y:367.25,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:8.2555,x:70.1,y:225.7,regY:0,regX:83.3}},{t:this.ikNode_1,p:{rotation:3.3477,x:118.8,y:0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:14.5418,x:47.8,y:366.95,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:8.6895,x:69.4,y:225.6,regY:0,regX:83.3}},{t:this.ikNode_1,p:{rotation:3.5238,x:118.85,y:0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:15.2692,x:46.15,y:366.65,regY:0,regX:20.5}},{t:this.ikNode_2,p:{rotation:9.124,x:68.7,y:225.4,regY:0,regX:83.3}},{t:this.ikNode_1,p:{rotation:3.6999,x:118.85,y:0.15}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:15.9963,x:44.25,y:366.3,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:9.5589,x:68,y:225.3,regY:0,regX:83.3}},{t:this.ikNode_1,p:{rotation:3.876,x:118.85,y:0.15}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:16.7234,x:42.55,y:365.95,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:9.9928,x:67.3,y:225.1,regY:0,regX:83.3}},{t:this.ikNode_1,p:{rotation:4.0521,x:118.8,y:0.15}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:17.4498,x:40.75,y:365.6,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:10.4281,x:66.6,y:225.1,regY:0.1,regX:83.3}},{t:this.ikNode_1,p:{rotation:4.2283,x:118.8,y:0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:18.177,x:39.1,y:365.3,regY:0,regX:20.5}},{t:this.ikNode_2,p:{rotation:10.8622,x:65.9,y:224.8,regY:0,regX:83.3}},{t:this.ikNode_1,p:{rotation:4.4045,x:118.85,y:0.15}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:18.9047,x:37.25,y:364.85,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:11.2969,x:65.25,y:224.6,regY:0,regX:83.3}},{t:this.ikNode_1,p:{rotation:4.5808,x:118.85,y:0.15}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:19.6316,x:35.5,y:364.5,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:11.7314,x:64.5,y:224.45,regY:0,regX:83.3}},{t:this.ikNode_1,p:{rotation:4.7571,x:118.8,y:0.15}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:20.3581,x:33.75,y:364.1,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:12.1657,x:63.85,y:224.3,regY:0,regX:83.3}},{t:this.ikNode_1,p:{rotation:4.9335,x:118.8,y:0.15}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:21.0856,x:32,y:363.7,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:12.5999,x:63.15,y:224.1,regY:0,regX:83.3}},{t:this.ikNode_1,p:{rotation:5.1099,x:118.8,y:0.15}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:21.8126,x:30.25,y:363.3,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:13.0347,x:62.45,y:223.95,regY:0,regX:83.3}},{t:this.ikNode_1,p:{rotation:5.2863,x:118.8,y:0.15}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:21.0601,x:32.05,y:363.7,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:12.5855,x:63.2,y:224.1,regY:0,regX:83.3}},{t:this.ikNode_1,p:{rotation:5.1036,x:118.8,y:0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:20.3086,x:33.9,y:364.15,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:12.1354,x:63.9,y:224.3,regY:0,regX:83.3}},{t:this.ikNode_1,p:{rotation:4.9212,x:118.8,y:0.15}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:19.5564,x:35.65,y:364.55,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:11.6859,x:64.5,y:224.45,regY:0,regX:83.2}},{t:this.ikNode_1,p:{rotation:4.7387,x:118.8,y:0.15}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:18.804,x:37.5,y:364.95,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:11.2372,x:65.3,y:224.65,regY:0,regX:83.3}},{t:this.ikNode_1,p:{rotation:4.5571,x:118.85,y:0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:18.052,x:39.3,y:365.3,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:10.7875,x:66.05,y:224.85,regY:0,regX:83.3}},{t:this.ikNode_1,p:{rotation:4.3747,x:118.8,y:0.15}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:17.2994,x:41.1,y:365.75,regY:0.1,regX:20.4}},{t:this.ikNode_2,p:{rotation:10.3374,x:66.75,y:225,regY:0,regX:83.3}},{t:this.ikNode_1,p:{rotation:4.1924,x:118.8,y:0.15}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:16.5474,x:42.95,y:366.05,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:9.8881,x:67.45,y:225.15,regY:0,regX:83.3}},{t:this.ikNode_1,p:{rotation:4.0101,x:118.8,y:0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:15.7954,x:44.8,y:366.4,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:9.4385,x:68.15,y:225.3,regY:0,regX:83.3}},{t:this.ikNode_1,p:{rotation:3.8278,x:118.85,y:0.15}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:15.0426,x:46.6,y:366.75,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:8.9894,x:68.9,y:225.45,regY:0,regX:83.3}},{t:this.ikNode_1,p:{rotation:3.6455,x:118.85,y:0.15}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:14.2909,x:48.4,y:367.05,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:8.54,x:69.6,y:225.6,regY:0,regX:83.3}},{t:this.ikNode_1,p:{rotation:3.4633,x:118.85,y:0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:13.5388,x:50.25,y:367.4,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:8.0903,x:70.3,y:225.75,regY:0,regX:83.3}},{t:this.ikNode_1,p:{rotation:3.2812,x:118.8,y:0.15}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:12.7864,x:52.1,y:367.65,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:7.641,x:71.05,y:226.05,regY:0.1,regX:83.3}},{t:this.ikNode_1,p:{rotation:3.0982,x:118.8,y:0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:12.0344,x:53.9,y:368,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:7.1921,x:71.75,y:226.1,regY:0,regX:83.3}},{t:this.ikNode_1,p:{rotation:2.9161,x:118.85,y:0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:11.2827,x:55.75,y:368.3,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:6.7422,x:72.45,y:226.25,regY:0,regX:83.3}},{t:this.ikNode_1,p:{rotation:2.734,x:118.85,y:0.15}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:10.5303,x:57.55,y:368.55,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:6.2925,x:73.2,y:226.4,regY:0,regX:83.3}},{t:this.ikNode_1,p:{rotation:2.552,x:118.85,y:0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:9.7781,x:59.4,y:368.8,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:5.8433,x:73.9,y:226.55,regY:0,regX:83.3}},{t:this.ikNode_1,p:{rotation:2.3691,x:118.85,y:0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:9.0257,x:61.25,y:369.05,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:5.3935,x:74.65,y:226.7,regY:0,regX:83.3}},{t:this.ikNode_1,p:{rotation:2.1871,x:118.85,y:0.15}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:8.2732,x:63.1,y:369.3,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:4.944,x:75.4,y:226.85,regY:0,regX:83.3}},{t:this.ikNode_1,p:{rotation:2.0051,x:118.85,y:0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:7.521,x:64.9,y:369.6,regY:0.1,regX:20.4}},{t:this.ikNode_2,p:{rotation:4.4949,x:76.1,y:227,regY:0,regX:83.3}},{t:this.ikNode_1,p:{rotation:1.8223,x:118.85,y:0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:6.7694,x:66.75,y:369.75,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:4.0451,x:76.8,y:227.05,regY:0,regX:83.3}},{t:this.ikNode_1,p:{rotation:1.6403,x:118.9,y:0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:6.0173,x:68.6,y:369.95,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:3.5956,x:77.55,y:227.2,regY:0,regX:83.3}},{t:this.ikNode_1,p:{rotation:1.4576,x:118.9,y:0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:5.2644,x:70.45,y:370.15,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:3.1463,x:78.15,y:227.35,regY:0,regX:83.2}},{t:this.ikNode_1,p:{rotation:1.2757,x:118.9,y:0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:4.5124,x:72.3,y:370.35,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:2.6964,x:78.95,y:227.5,regY:0,regX:83.3}},{t:this.ikNode_1,p:{rotation:1.0929,x:118.9,y:0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:3.7603,x:74.15,y:370.55,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:2.2466,x:79.7,y:227.6,regY:0,regX:83.3}},{t:this.ikNode_1,p:{rotation:0.911,x:118.9,y:0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:3.008,x:75.95,y:370.65,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:1.7978,x:80.4,y:227.75,regY:0,regX:83.3}},{t:this.ikNode_1,p:{rotation:0.7283,x:118.9,y:0.05}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:2.2562,x:77.85,y:370.85,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:1.3483,x:81.1,y:227.85,regY:0,regX:83.3}},{t:this.ikNode_1,p:{rotation:0.5464,x:118.9,y:0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:1.5039,x:79.7,y:371,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:0.8988,x:81.9,y:228,regY:0,regX:83.3}},{t:this.ikNode_1,p:{rotation:0.3646,x:118.9,y:0.1}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0.7519,x:81.55,y:371.1,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:0.4494,x:82.6,y:228.1,regY:0,regX:83.3}},{t:this.ikNode_1,p:{rotation:0.1818,x:118.9,y:0.05}}]},1).to({state:[{t:this.ikNode_4,p:{rotation:0,x:83.45,y:371.25,regY:0,regX:20.4}},{t:this.ikNode_2,p:{rotation:0,x:83.3,y:228.25,regY:0,regX:83.3}},{t:this.ikNode_1,p:{rotation:0,x:118.95,y:0}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.6,-4.7,217.1,481.9);


// stage content:
(lib.燈籠 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 大燈籠
	this.instance = new lib.大燈籠();
	this.instance.setTransform(123.45,217.35,1,1,0,0,0,-131.7,-27.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	// 中燈籠
	this.instance_1 = new lib.中燈籠();
	this.instance_1.setTransform(234.05,147.2,0.6723,0.6723,0,0,0,83.4,238.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

	// 小燈籠
	this.instance_2 = new lib.小燈籠();
	this.instance_2.setTransform(53.55,131.6,0.5407,0.5407,0,0,0,83.3,238.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60));

	// 春
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#332F1F").s().p("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");
	this.shape.setTransform(368.357,289.9649,0.7662,0.7662);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(60));

	// 背景
	this.instance_3 = new lib.CachedBmp_1();
	this.instance_3.setTransform(8.5,2.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(60));

	// 底稿顏色
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F5F3F2").s().p("EgruAs5MAAAhZxMBXdAAAMAAABZxg");
	this.shape_1.setTransform(289.675,287.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).to({_off:true},1).wait(59));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(288,266.5,281.6,308.6);
// library properties:
lib.properties = {
	id: '4D7A3BA4E00D0E43B4704B0956FFF38B',
	width: 559,
	height: 575,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/燈籠_atlas_1.png", id:"燈籠_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['4D7A3BA4E00D0E43B4704B0956FFF38B'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
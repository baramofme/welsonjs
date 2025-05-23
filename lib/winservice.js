//////////////////////////////////////////////////////////////////////////////////
// VirtualInput API
/////////////////////////////////////////////////////////////////////////////////

var VirtualInputObject = function() {
	this.oShell = null;
	this.oAutoIt = null;

	this.create = function() {
		try {
			this.oShell = CreateObject("WScript.Shell");
			this.oAutoIt = CreateObject("AutoItX.Control");
		} catch (e) {
			console.error("VirtualInputObject.create() -> " + e.message);
		}
	};
	
	this.moveMouse = function(x, y) {
		this.oAutoIt.MouseMove(x, y);
	};

	this.sendKeys = function(s) {
		this.oShell.SendKeys(s);
	};

	this.create();
};

exports.VERSIONINFO = "VirtualInput Lib (virtualinput.js) version 0.1";
exports.global = global;
exports.require = global.require;

exports.create = function() {
	return new VirtualInputObject();
};

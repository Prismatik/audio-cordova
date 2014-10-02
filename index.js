Audio = function(){
	return this;
}

Audio.prototype.play = function(file, callback) {
	
	callback = callback || function() {};

	var mediaSuccess = function() {
		callback();
	};

	var mediaError = function(err) {
		callback(err);
	};
	var media = new window.parent.Media(file, mediaSuccess, mediaError);

	media.play()
};

module.exports = new Audio();

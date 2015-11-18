var timer = {

	start_time: 0,

	/**
	 * Pads numbers less than 10 with a leading zero.
	 * @param   {Integer} number the number to be potentially padded.
	 * @returns {String}   padded number
	 */
	time_padding: function (number) {
		if (number <= 9) {
			return "0" + number;
			//			console.log("0" + number);
		}
		return number.toString();
	},

	/**
	 * Sets the timer to the current time.
	 */
	start_timer: function () {
		timer.start_time = Date.now();
	},

	update_timer: function () {
		window.setInterval(function () {
			$("#timer").html(function () {
				var minutes_in_an_hour = 60,
					seconds_in_a_minute = 60,
					miliseconds_in_a_second = 1000,
					now = Date.now(),
					hours = timer.time_padding(Math.floor((now - timer.start_time) / (miliseconds_in_a_second * seconds_in_a_minute * minutes_in_an_hour))),
					minutes = timer.time_padding(Math.floor((now - timer.start_time - (hours * miliseconds_in_a_second * seconds_in_a_minute * minutes_in_an_hour)) / (miliseconds_in_a_second * seconds_in_a_minute))),
					seconds = timer.time_padding(Math.floor((now - timer.start_time - (hours * miliseconds_in_a_second * seconds_in_a_minute * minutes_in_an_hour) - (minutes * miliseconds_in_a_second * seconds_in_a_minute)) / miliseconds_in_a_second)),
					complete_time = hours + ":" + minutes + ":" + seconds;
				//				console.log(complete_time);
				return complete_time;
			});
		}, 1000);
	}
};
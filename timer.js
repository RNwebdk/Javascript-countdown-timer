class Timer{
	constructor(durationInput, startButton, pauseButton, callbacks){
		this.durationInput = durationInput;
		this.startButton = startButton;
		this.pauseButton = pauseButton;

		if (callbacks) {
			this.onStart = callbacks.onStart;
			this.onTick = callbacks.onTick;
			this.onComplete = callbacks.onComplete
		}

		this.startButton.addEventListener('click', this.start);
		this.pauseButton.addEventListener('click', this.pause);
	}

	start = () => {
		if (this.onStart) {
			this.onStart();
		}
		//remove delay on click
		this.tick();
		this.intervalId = setInterval(this.tick, 50);
	}

	tick = () => {
		if (this.timeRemaining <= 0) {
			this.pause();
			if (this.onComplete) {
				this.onComplete();
			}
		}else{
			this.timeRemaining = this.timeRemaining - .05;
			if (this.onStart) {
				this.onTick();
			}
		}

	}

	get timeRemaining(){
		return parseFloat(this.durationInput.value);
	}

	set timeRemaining(time){
		this.durationInput.value = time.toFixed(2);
	}

	pause = () => {
		clearInterval(this.intervalId);
	}

	onDurationChange = () => {

	}

}
import React, { Component } from "react";
import faded from '../audios/faded.mp3';
import fadedimg from '../images/faded.jpg';
import { Button, Container } from '@material-ui/core';


class Faded extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			duration: null
		}
  	};
	
	handlePlay() {
		this.audio.play();
	}
	
	handleStop() {
		this.audio.currentTime = 0;
		this.slider.value = 0;
		this.audio.pause(); 
	}

	componentDidMount() {
		this.slider.value = 0;
		this.currentTimeInterval = null;
		
		// Get duration of the song and set it as max slider value
		this.audio.onloadedmetadata = function() {
			this.setState({duration: this.audio.duration});
		}.bind(this);
		
		// Sync slider position with song current time
		this.audio.onplay = () => {
			this.currentTimeInterval = setInterval( () => {
				this.slider.value = this.audio.currentTime;
			}, 500);
		};
		
		this.audio.onpause = () => {
			clearInterval(this.currentTimeInterval);
		};
		
		// Seek functionality
		this.slider.onchange = (e) => {
			clearInterval(this.currentTimeInterval);
			this.audio.currentTime = e.target.value;
		};
	}

	render() {
		return (
        <div className="row">
            <Container maxWidth="sm">
            <h3>Alan Walker - Faded</h3>
                <img src={fadedimg} height="200" width="200" />
                <span>          </span>
                <audio ref= {(audio)=>{this.audio=audio}}>
                    <source src={faded} />
                </audio>
                <Button onClick={this.handlePlay.bind(this)} variant="outlined" color="primary">
                    Play
                </Button>
                <span>          </span>
                <Button onClick={this.handleStop.bind(this)} variant="outlined" color="secondary">
                    Stop
                </Button>
                <span>          </span>
                <input ref={(slider) => { this.slider = slider }}
                    type="range"
                    name="points"
                    min="0" max={this.state.duration} />
            </Container>	

		</div>
        );
	}
}

export default Faded;
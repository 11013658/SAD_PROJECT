import React, { Component } from "react";
import believer from './audios/believer.mp3';
import blankspace from './audios/blank-space.mp3';
import despacito from './audios/despacito.mp3';
import faded from './audios/faded.mp3';
import girlslikeyou from './audios/girls-like-you.mp3';
import letmeloveyou from './audios/let-me-love-you.mp3';
import onmyway from './audios/on-my-way.mp3';
import takitaki from './audios/taki-taki.mp3';
import thunder from './audios/Thunder.mp3';
import youbelongwithme from './audios/you-belong-with-me.mp3';
import believerimg from './images/believer.jpg';
import blankspaceimg from './images/blankspace.jpg';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';


class Blankspace extends React.Component {
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
        <div>
            <Container maxWidth="sm">
            <h3>Taylor Swift - Blank Space</h3>
			<img src={blankspaceimg} height="200" width="200" />
                <span>       </span>
                <audio ref= {(audio)=>{this.audio=audio}}>
                    <source src={blankspace} />
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

export default Blankspace;
import React from "react";
import believer from '../audios/believer.mp3';
import believerimg from '../images/believer.jpg';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

class Believer extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			duration: null,
			productList: props.productList
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
            <h3>Imagine Dragons - Believer</h3>
			<img src={believerimg} height="200" width="200" />
                <span>       </span>
                <audio ref= {(audio)=>{this.audio=audio}}>
                    <source src={believer} />
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

export default Believer;
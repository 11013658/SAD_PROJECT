import React, { Component } from "react";
import believer from '../audios/believer.mp3';
import believerimg from '../images/believer.jpg';
import { Button, Container } from '@material-ui/core';
import axios from 'axios';

class Believer extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			duration: null,
			
			userid: '',
			song_name: '',
			artist: ''
		}

		this.onChangeUserid = this.onChangeUserid.bind(this);
		this.onChangeSongName = this.onChangeSongName.bind(this);
		this.onChangeArtist = this.onChangeArtist.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
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


		axios.get('http://localhost:5000/api/songs/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          userid: response.data.userid,
          song_name: response.data.song_name,
          artist: response.data.artist
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://localhost:5000/api/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.userid),
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })
	}


	onChangeUserid(e) {
		this.setState({
		  userid: e.target.value
		})
	  }
	  onChangeSongName(e) {
		this.setState({
		  song_name: e.target.value
		})
	  }
	  onChangeArtist(e) {
		this.setState({
		  artist: e.target.value
		})
	  }

	  onSubmit(e) {
		e.preventDefault();

		const songs = {
			userid: this.state.userid,
			song_name: this.state.song_name,
			artist: this.state.artist
		  }
	  
		  console.log(songs);
	  
		  axios.post('http://localhost:5000/api/songs/add' + this.props.match.params.id, songs)
			.then(res => console.log(res.data));
	  
		  window.location = '/';
	}

	render() {
		return (
        <div className="row">
            <Container maxWidth="sm">
            <h3>Imagine Dragons - Believer</h3>
                <img src={believerimg} height="200" width="200" />
                <span>          </span>
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

					
				<form onSubmit={this.onSubmit}>
					<Button   size="large" variant="outlined" color="primary">
					Add to Library 
					</Button>
				</form>
            </Container>


		</div>
        );
	}
}

export default Believer;
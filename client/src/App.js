import React, { Component } from "react";
import "./App.css";
import { FormGroup, FormControl, InputGroup, Glyphicon } from "react-bootstrap";
import Profile from "./Profile";
import Gallery from "./Gallery";
import { id, secret } from "./secret/spotify-credentials";
import axios from 'axios';

// const express = require('express');
const request = require("request");
const base64 = require("base-64");

class App extends Component {
  AUTHORIZATION_HEADER = "";
  globalAccessToken = "";

  constructor(props) {
    super(props);

    // this.AUTHORIZATION_HEADER = base64.encode(`${id}:${secret}`);
    this.AUTHORIZATION_HEADER = new Buffer(id + ":" + secret).toString(
      "base64"
    );
    this.state = {
      query: "",
      artist: null,
      tracks: []
    };
  }

  requestNewToken() {
    console.log(id, secret);

    // var authOptions = {
    //   url: "https://accounts.spotify.com/api/token",
    //   method: "POST",
    //   headers: {
    //     Authorization: `Basic ${this.AUTHORIZATION_HEADER}`,
    //     Cookie: "test"
    //   },

    // };

    axios
      .get('/login', { "Access-Control-Allow-Origin": "*"})
      .then(res => {
        console.log('test');
        var test = res['data'];
        console.log('test');
      })
      .catch(error => {
        console.log(error);
      });

    // fetch("/", {
    //   method: "GET"
    //   // headers: {
    //   //   Authorization: `Basic ${this.AUTHORIZATION_HEADER}`
    //   // },
    //   // mode: "cors",
    //   // cache: "default",
    //   // form: { grant_type: "client_credentials" },
    //   // json: true
    // })
    //   .then(response => {
    //     console.log("test")
    //     response.json()
    //   })
    //   .then(json => {});

    // request.post(authOptions, function(error, response, body) {
    //   console.log(JSON.stringify(response));
    //   console.log(JSON.stringify(error));
    //   console.log(JSON.stringify(body));
    // });

    // request(
    //   {
    //     url: "https://accounts.spotify.com/api/token",
    //     method: "POST",
    //     headers: { Authorization: `Basic ${this.AUTHORIZATION_HEADER}` },
    //     form: { grant_type: "client_credentials" }
    //   },
    //   (error, response, body) => {
    //     console.log(JSON.stringify(response));
    //     console.log(JSON.stringify(error));
    //     console.log(JSON.stringify(body));
    //     this.globalAccessToken = JSON.parse(body).access_token;
    //   }
    // );
  }

  search() {
    console.log("this.state", this.state);
    const BASE_URL = "https://api.spotify.com/v1/search?";
    let FETCH_URL = BASE_URL + "q=" + this.state.query + "&type=artist&limit=1";
    const ALBUM_URL = "https://api.spotify.com/v1/artists/";
    var accessToken =
      "BQAv1OrsRGTBkUR7Wy1Jm_sW0iqzk5S5FV3leTL07DljbU9sWN17xDecpn0jp3gX8UVX2L2Yof61V05x9s73Ne5_ys2AhWZy1CspCFue3zeS2Ntiy47XURt-yGiT_JEnfn3RSbxfIcT1Xns55qg6gf-SZPbw-SZjRPdcS5j4wAX_bAYnjhJobN7sh264VjCkv5u7N_hpBKi7e81op9nUTgaIVIx8rNfmHCEqAOsiWBu2OX_zPXYSRLa-osH3mNohj4fyfqxv_mt8V0XaAWErqg";

    fetch(FETCH_URL, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + accessToken
      },
      mode: "cors",
      cache: "default"
    })
      .then(response => response.json())
      .then(json => {
        const artist = json.artists.items[0];
        this.setState({ artist });

        FETCH_URL = `${ALBUM_URL}${artist.id}/top-tracks?country=US&`;
        fetch(FETCH_URL, {
          method: "GET",
          headers: {
            Authorization: "Bearer " + accessToken
          },
          mode: "cors",
          cache: "default"
        })
          .then(response => response.json())
          .then(json => {
            console.log("artist's top tracks:", json);
            const { tracks } = json;
            this.setState({ tracks });
          });
      });
  }

  render() {
    return <div className="App">
        <div className="App-title">Song Player Thingamajig</div>
        <FormGroup>
          <InputGroup>
            <FormControl type="text" placeholder="Search for an Artist" value={this.state.query} onChange={event => {
                this.setState({ query: event.target.value });
              }} onKeyPress={event => {
                if (event.key === 'Enter') {
                  this.search();
                }
              }} />
            <InputGroup.Addon onClick={() => this.search()}>
              <Glyphicon glyph="search" />
            </InputGroup.Addon>
            <InputGroup.Addon onClick={() => this.requestNewToken()}>
              <Glyphicon glyph="envelope" />
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        {this.state.artist !== null ? <div>
            <Profile artist={this.state.artist} />
            <Gallery tracks={this.state.tracks} />
          </div> : <div />}
      </div>;
  }
}

export default App;

(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{192:function(e,t,a){"use strict";(function(e){var n=a(42),r=a(43),s=a(45),c=a(44),i=a(46),l=a(0),o=a.n(l),u=(a(80),a(474)),m=a(113),p=a(473),f=a(79),h=a(193),d=a(194),g=a(61),y=a(195),v=a.n(y),E=(a(227),a(437),function(t){function a(t){var r;return Object(n.a)(this,a),(r=Object(s.a)(this,Object(c.a)(a).call(this,t))).AUTHORIZATION_HEADER="",r.globalAccessToken="",r.AUTHORIZATION_HEADER=new e(g.a+":"+g.b).toString("base64"),r.state={query:"",artist:null,tracks:[]},r}return Object(i.a)(a,t),Object(r.a)(a,[{key:"requestNewToken",value:function(){console.log(g.a,g.b),v.a.get("/login").then(function(e){console.log("test");e.data;console.log("test")}).catch(function(e){console.log(e)})}},{key:"search",value:function(){var e=this;console.log("this.state",this.state);var t="https://api.spotify.com/v1/search?q="+this.state.query+"&type=artist&limit=1",a="BQAv1OrsRGTBkUR7Wy1Jm_sW0iqzk5S5FV3leTL07DljbU9sWN17xDecpn0jp3gX8UVX2L2Yof61V05x9s73Ne5_ys2AhWZy1CspCFue3zeS2Ntiy47XURt-yGiT_JEnfn3RSbxfIcT1Xns55qg6gf-SZPbw-SZjRPdcS5j4wAX_bAYnjhJobN7sh264VjCkv5u7N_hpBKi7e81op9nUTgaIVIx8rNfmHCEqAOsiWBu2OX_zPXYSRLa-osH3mNohj4fyfqxv_mt8V0XaAWErqg";fetch(t,{method:"GET",headers:{Authorization:"Bearer "+a},mode:"cors",cache:"default"}).then(function(e){return e.json()}).then(function(n){var r=n.artists.items[0];e.setState({artist:r}),t="".concat("https://api.spotify.com/v1/artists/").concat(r.id,"/top-tracks?country=US&"),fetch(t,{method:"GET",headers:{Authorization:"Bearer "+a},mode:"cors",cache:"default"}).then(function(e){return e.json()}).then(function(t){console.log("artist's top tracks:",t);var a=t.tracks;e.setState({tracks:a})})})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"App-title"},"Song Player Thingamajig"),o.a.createElement(u.a,null,o.a.createElement(m.a,null,o.a.createElement(p.a,{type:"text",placeholder:"Search for an Artist",value:this.state.query,onChange:function(t){e.setState({query:t.target.value})},onKeyPress:function(t){"Enter"===t.key&&e.search()}}),o.a.createElement(m.a.Addon,{onClick:function(){return e.search()}},o.a.createElement(f.a,{glyph:"search"})),o.a.createElement(m.a.Addon,{onClick:function(){return e.requestNewToken()}},o.a.createElement(f.a,{glyph:"envelope"})))),null!==this.state.artist?o.a.createElement("div",null,o.a.createElement(h.a,{artist:this.state.artist}),o.a.createElement(d.a,{tracks:this.state.tracks})):o.a.createElement("div",null))}}]),a}(l.Component));t.a=E}).call(this,a(4).Buffer)},193:function(e,t,a){"use strict";var n=a(42),r=a(43),s=a(45),c=a(44),i=a(46),l=a(0),o=a.n(l),u=(a(80),function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e={name:"",followers:{total:""},images:[{url:""}],genres:[]};return e=null!==this.props.artist?this.props.artist:e,o.a.createElement("div",{className:"profile"},o.a.createElement("img",{alt:"Profile",className:"profile-img",src:e.images[0].url}),o.a.createElement("div",{className:"profile-info"},o.a.createElement("div",{className:"profile-name"},e.name),o.a.createElement("div",{className:"profile-followers"},e.followers.total," followers"),o.a.createElement("div",{className:"profile-genres"},e.genres.map(function(t,a){return t=t!==e.genres[e.genres.length-1]?" ".concat(t,","):" & ".concat(t),o.a.createElement("span",{key:a},t)}))))}}]),t}(l.Component));t.a=u},194:function(e,t,a){"use strict";var n=a(42),r=a(43),s=a(45),c=a(44),i=a(46),l=a(0),o=a.n(l),u=(a(80),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(c.a)(t).call(this,e))).state={playingUrl:"",audio:null,playing:!1},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"playAudio",value:function(e){var t=new Audio(e);this.state.playing?this.state.playingUrl===e?(this.state.audio.pause(),this.setState({playing:!1})):(this.state.audio.pause(),t.play(),this.setState({playing:!0,playingUrl:e,audio:t})):(t.play(),this.setState({playing:!0,playingUrl:e,audio:t}))}},{key:"render",value:function(){var e=this,t=this.props.tracks;return console.log(this.props),o.a.createElement("div",null,t.map(function(t,a){var n=t.album.images[0].url;return o.a.createElement("div",{key:a,className:"track",onClick:function(){return e.playAudio(t.preview_url)}},o.a.createElement("img",{src:n,className:"track-img",alt:"track"}),o.a.createElement("div",{className:"track-play"},o.a.createElement("div",{className:"track-play-inner"},e.state.playingUrl===t.preview_url?o.a.createElement("span",null,"| |"):o.a.createElement("span",null,"\u25b6"))),o.a.createElement("p",{className:"track-text"},t.name))}))}}]),t}(l.Component));t.a=u},200:function(e,t,a){e.exports=a(201)},201:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(191),c=a.n(s),i=a(192);c.a.render(r.a.createElement(i.a,null),document.getElementById("root"))},239:function(e,t){},241:function(e,t){},273:function(e,t){},274:function(e,t){},343:function(e,t){},61:function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"b",function(){return r});var n="41ebc06cab4d4476a728f51e77ba26cc",r="e882284fbb8f428a87914d91e6db3f39"},80:function(e,t,a){}},[[200,2,1]]]);
//# sourceMappingURL=main.bb44462b.chunk.js.map
import { Component, OnInit } from '@angular/core';

declare var loadlive2d : any;
declare var Live2D : any;

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
	private waifu : any;
	constructor() {}

	public getRandomValue(e : any) {
		return Array.isArray(e) ? e[Math.floor(Math.random() * e.length)] : e;
	}
	private loadWidget(e : any) : void{
		let { jsonPath: t, apiPath: o } = e;
		if ("string" != typeof o) {
			console.error("Invalid initWidget argument!");
			return;
		}
		localStorage.removeItem("waifu-display");
		sessionStorage.removeItem("waifu-text");
		document.body.insertAdjacentHTML(
			"beforeend",
			'<div id="waifu">\n\t\t\t<div id="waifu-tips"></div>\n\t\t\t<canvas id="live2d" width="800" height="800"></canvas>\n\t\t\t<div id="waifu-tool">\n\t\t\t\t<span class="fa fa-lg fa-comment"></span>\n\t\t\t\t<span class="fa fa-lg fa-user-circle"></span>\n\t\t\t\t<span class="fa fa-lg fa-street-view"></span>\n\t\t\t\t<span class="fa fa-lg fa-camera-retro"></span>\n\t\t\t\t<span class="fa fa-lg fa-info-circle"></span>\n\t\t\t\t<span class="fa fa-lg fa-times"></span>\n\t\t\t</div>\n\t\t</div>'
		);
		setTimeout(() => {
			this.waifu = document.getElementById('waifu');
			this.waifu.style.bottom = "0";
		}, 0);

		let a : any;
		let i : any;
		let s : any = false;
		let l : any = ["Long time no see, life flies so fast...", "I wanted to know How long have you been ignoring people?", "Hi! Come and play with me!", "Hammer your chest with small fists!", "Remember to add StackOverflow to your Bookmarks!"];

		const r = (e: any, t: any, o: any) => {
			if (!e || (sessionStorage.getItem("waifu-text") && sessionStorage.getItem("waifu-text")!! > o)) return;

			if (i) {
				clearTimeout(i);
				i = null;
			}
			e = this.getRandomValue(e);
			sessionStorage.setItem("waifu-text", o);
			const a : any = document.getElementById("waifu-tips");
			a.innerHTML = e;
			a.classList.add("waifu-tips-active");
			i = setTimeout(() => {
				sessionStorage.removeItem("waifu-text");
				a.classList.remove("waifu-tips-active");
			}, t);
		}
		async function d(e : any, t : any, n : any) {
			localStorage.setItem("modelId", e);
			localStorage.setItem("modelTexturesId", t);
			r(n, 4e3, 10);
			loadlive2d("live2d", `${o}get/?id=${e}-${t}`);
		}
		window.addEventListener("mousemove", () => {
			s = true;
		});
		window.addEventListener("keydown", () => {
			s = true;
		});
		setInterval(() => {
			if (s){
				s = false;
				clearInterval(a);
				a = null;
			}else {
				if (!a){
					a = setInterval(()=>{
						r(this.getRandomValue(l),6e3,9);
					},2e4);
				}
			}
		}, 1e3);
		document.querySelector("#waifu-tool .fa-comment")!!.addEventListener("click", async function () {
			fetch("https://api.quotable.io/random?maxLength=55").then(e => {
				e.json().then(e => {
					r(e.content, 6e3, 9);
				});
			});
		});
		document.querySelector("#waifu-tool .fa-user-circle")!!.addEventListener("click", async function () {
			let e = localStorage.getItem("modelId");
			fetch(`${o}switch/?id=${e}`).then((e) =>
				e.json().then((e) => {
					d(e.model.id, 0, e.model.message);
				})
			);
		});
		document.querySelector("#waifu-tool .fa-street-view")!!.addEventListener("click", async function () {
			const e = localStorage.getItem("modelId");
			const t = localStorage.getItem("modelTexturesId");
			fetch(`${o}rand_textures/?id=${e}-${t}`)
				.then((e) => e.json())
				.then((o : any) => {
					o.textures.id !== true || ("1" !== t && "0" !== t) ? d(e, o.textures.id, "Does my new dress look good?") : r("I don’t have any other clothes yet!", 4e3, 10);
				});
		});
		document.querySelector("#waifu-tool .fa-camera-retro")!!.addEventListener("click", () => {
			r("It’s taken, isn’t it cute?", 6e3, 9);
			Live2D.captureName = "photo" + Date.now().toString() + ".png";
			Live2D.captureFrame = true;
		});
		document.querySelector("#waifu-tool .fa-info-circle")!!.addEventListener("click", () => {
			open("https://www.linkedin.com/in/jayantgoel001/");
		});
		document.querySelector("#waifu-tool .fa-times")!!.addEventListener("click", () => {
			r("May you meet important people again one day.", 2e3, 11);
			this.waifu.style.bottom = "-500px";
			setTimeout(() => {
				this.waifu.style.display = "none";
			}, 3e3);
		});
		window.addEventListener("copy", () => {
			r("What have you copied? Remember to add the source when reprinting!", 6e3, 9);
		});
		window.addEventListener("visibilitychange", () => {
			document.hidden || r("Wow, you are finally back!", 6e3, 9);
		});
		(()=>{
			let e;
			if ("/" === location.pathname) {
				const t = new Date().getHours();
				e = t > 5 && t <= 7 ? "Good morning! The plan for a day lies in the morning, and a beautiful day is about to begin. " : t > 7 && t <= 11 ? "Good morning! Work well but don't sit for a long time just get up and move around! " : t > 11 && t <= 13 ? "It's noon, working all morning? Now it's lunch time! " : t > 13 && t <= 17 ? "It's easy to get sleepy in the afternoon. Have you achieved today's sports goal? " : t > 17 && t <= 19 ? "It's evening! When ballet takes to the sea, even the sunset comes to take a sneak peek. " : t > 19 && t <= 21 ? "Good evening, How are you doing today? " : t > 21 && t <= 23 ? ["It's already so late, rest early, good night ", "Take care of your eyes late at night! "] : "Are you a night owl? If you haven't gone to bed so late, will you get up tomorrow? ";
			} else if ("" !== document.referrer) {
				const t = new URL(document.referrer);
				const o = t.hostname.split(".")[1];
				e = location.hostname === t.hostname ? `Welcome to <br><span>「${document.title.split(" - ")[0]}」</span>` : "baidu" === o ? `Hello! Friends from Baidu Search<br>Did you find me when searching for <span> ${t.search.split("&wd=")[1].split("&")[0]}</span>?` : "so" === o ? `Hello! Friends from 360 search<br>Did you find me when searching for <span> ${t.search.split("&q=")[1].split("&")[0]}</span>?` : "google" === o ? `Hello! Friends from Google search<br>Welcome to read <span>" ${document.title.split("-")[0]}”</span>` : `Hello！From <span>${t.hostname}</span> friend`;
			} else {
				e = `Welcome to <span>「${document.title.split(" - ")[0]}」</span>`;
			}
			r(e, 7e3, 8);
		})();
		(() => {
			let e :any = localStorage.getItem("modelId");
			let o :any = localStorage.getItem("modelTexturesId");
			if (!e) {
				e = 2;
				o = 53;
			}
			d(e, o, null).then(_ => {});

			fetch(t).then(e => e.json()).then((e :any) => {
				window.addEventListener("mouseover", (t : any) => {
					for (let { selector: o, text: a } of e.mouseover) {
						if (t.target.matches(o)) {
							return r((a = (a = this.getRandomValue(a)).replace("{text}", t.target.innerText)), 4e3, 8);
						}
					}
				});
				window.addEventListener("click", (t : any) => {
					for (let { selector: o, text: a } of e.click) {
						if (t.target.matches(o)) {
							return r((a = (a = this.getRandomValue(a)).replace("{text}", t.target.innerText)), 4e3, 8);
						}
					}
				});
				for (let { date: date, text: t } of e.seasons){
					const o = new Date();
					const a = date.split("-")[0];
					const i = date.split("-")[1] || a;
					if (a.split("/")[0] <= o.getMonth() + 1 && o.getMonth() + 1 <= i.split("/")[0] && a.split("/")[1] <= o.getDate() && o.getDate() <= i.split("/")[1]) {
						t = (t = this.getRandomValue(t)).replace("{year}", o.getFullYear());
						l.push(t);
						l.push(t);
						l.push(t);
					}
				}
			});
		})();
	}

	private loadExternalResource(url : string, type : string) {
		return new Promise((resolve, reject)=>{
			let tag : any;
			try{
				if(type==="css"){
					tag=document.createElement("link");
					tag.rel="stylesheet";
					tag.href=url;
					document.head.appendChild(tag);
				}else if(type==="js"){
					tag=document.createElement("script");
					tag.src=url;
					document.body.appendChild(tag);
				}
				tag.onload=()=>resolve(url);
			}catch(e){
				reject(e);
			}
		})
	}

	ngOnInit(): void {
		if(screen.width>=768){
			Promise.all([this.loadExternalResource("assets/css/girl.min.css","css"),this.loadExternalResource("assets/js/live2d.min.js","js")]).then(()=>{
				this.loadWidget({
					jsonPath:"assets/girl-tips.json",
					apiPath:"https://live2d.fghrsh.net/api/"
				})
			}).then(()=>{
				console.log(`
		  く__,.ヘヽ.        /  ,ー､ 〉
				   ＼ ', !-─‐-i  /  /´
				   ／｀ｰ'       L/／｀ヽ､
				 /   ／,   /|   ,   ,       ',
			   ｲ   / /-‐/  ｉ  L_ ﾊ ヽ!   i
				ﾚ ﾍ 7ｲ｀ﾄ   ﾚ'ｧ-ﾄ､!ハ|   |
				  !,/7 '0'     ´0iソ|    |
				  |.从"    _     ,,,, / |./    |
				  ﾚ'| i＞.､,,__  _,.イ /   .i   |
					ﾚ'| | / k_７_/ﾚ'ヽ,  ﾊ.  |
					  | |/i 〈|/   i  ,.ﾍ |  i  |
					 .|/ /  ｉ：    ﾍ!    ＼  |
					  kヽ>､ﾊ    _,.ﾍ､    /､!
					  !'〈//｀Ｔ´', ＼ ｀'7'ｰr'
					  ﾚ'ヽL__|___i,___,ンﾚ|ノ
						  ﾄ-,/  |___./
						  'ｰ'    !_,.:
		`)
			}).catch((err) => {
				console.log(err);
			});
		}
	}
}

import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Model} from "./Model";
import {loadExternalResource} from "../loadExternalResource";

declare var loadlive2d : any;
declare var Live2D : any;
declare var data : any;

@Component({
	selector: 'app-waifu',
	templateUrl: './waifu.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrls: ['./waifu.component.css']
})
export class WaifuComponent implements OnInit {
	private i : any;
	private s : any = false;

	private waifuTips = data.waifu.tips;
	public waifuTipsActive : boolean = true;
	public waifuTipMessage : string = "";
	private model = new Model(data.waifu.modelList,data.waifu.messages);
	public bottom: string = "-400px";

	private r(e: any, t: number, o: any){
		let waifuText = sessionStorage.getItem("waifu-text");
		if (!e || (waifuText && waifuText > o)) return;

		if (this.i) {
			clearTimeout(this.i);
			this.i = null;
		}
		sessionStorage.setItem("waifu-text", o);
		this.waifuTipsActive = true;
		this.waifuTipMessage = this.getRandomValue(e);
		this.changeDetectorRef.detectChanges();
		this.i = setTimeout(() => {
			sessionStorage.removeItem("waifu-text");
			this.waifuTipsActive = false;
			this.changeDetectorRef.detectChanges();
		}, t);
	}

	private async d(e : any, t : any, n : any) {
		localStorage.setItem("modelId", e);
		localStorage.setItem("modelTexturesId", t);
		this.r(n, 4e3, 10);
		loadlive2d("live2d", this.model.get(parseInt(e),parseInt(t)));
	}

	private waifuTools : any = {
		'fa-comment': (event: any) => {
			event.preventDefault();
			fetch("https://api.quotable.io/random?maxLength=55").then(e => {
				e.json().then(e => {
					this.r(e.content, 6e3, 9);
				});
			});
		},
		'fa-user-circle': (event: any) => {
			event.preventDefault();
			const e = localStorage.getItem("modelId");
			if (e) {
				let newModel = this.model.switch(parseInt(e));
				this.d(newModel.modelID, 0, newModel.message).then(_ => {
				});
			}
		},
		'fa-street-view': (event: any) => {
			event.preventDefault();
			const e = localStorage.getItem("modelId");
			const t = localStorage.getItem("modelTexturesId");
			if (e && t) {
				let newTextureID = this.model.randTexture(parseInt(e), parseInt(t));
				if (newTextureID === parseInt(t)) {
					this.r("I don’t have any other clothes yet!", 4e3, 10);
				} else {
					this.d(e, newTextureID, "Does my new dress look good?").then(_ => {
					});
				}
			}
		},
		'fa-camera-retro': (event: any) => {
			event.preventDefault();
			const e = localStorage.getItem("modelId");
			const t = localStorage.getItem("modelTexturesId");
			if (e && t) {
				this.r("It’s taken, isn’t it cute?", 6e3, 9);
				Live2D.captureName = this.model.generateCaptureName(parseInt(e), parseInt(t));
				Live2D.captureFrame = true;
			}
		},
		'fa-info-circle': (event: any) => {
			event.preventDefault();
			open("https://github.com/JayantGoel001/JayantGoel001.github.io/");
		},
		'fa-times': (event: any) => {
			event.preventDefault();
			this.r("May you meet important people again one day.", 2e3, 11);
			this.bottom = "-500px";
			this.changeDetectorRef.detectChanges();

			setTimeout(() => {
				document.getElementById('waifu')!!.remove();
				this.changeDetectorRef.detectChanges();
			}, 2000);

		}
	}

	private windowEvent : any = {
		'mousemove' : () => {
			this.s = true;
		},
		'keydown' : () => {
			this.s = true;
		},
		'copy' : () => {
			this.r("What have you copied? Remember to add the source when reprinting!", 6e3, 9);
		},
		'visibilitychange' : () => {
			if(document.hidden) {
				this.r("Wow, you are finally back!", 6e3, 9);
			}
		}
	}

	public waifuToolsKeys = ['fa-comment','fa-user-circle','fa-street-view','fa-camera-retro','fa-info-circle','fa-times'];

	public getRandomValue(e : any) {
		return Array.isArray(e) ? e[Math.floor(Math.random() * e.length)] : e;
	}

	private loadWidget() : void{
		localStorage.removeItem("waifu-display");
		sessionStorage.removeItem("waifu-text");

		this.bottom = "0";

		let a : any;
		let l : any = ["Long time no see, life flies so fast...", "I wanted to know How long have you been ignoring people?", "Hi! Come and play with me!", "Hammer your chest with small fists!", "Remember to add StackOverflow to your Bookmarks!"];

		for(let event in this.windowEvent) {
			window.addEventListener(event,this.windowEvent[event]);
		}

		setInterval(() => {
			if (this.s){
				this.s = false;
				clearInterval(a);
				a = null;
			}else {
				if (!a){
					a = setInterval(()=>{
						this.r(this.getRandomValue(l),6e3,9);
					},2e4);
				}
			}
		}, 1e3);

		for (let tool in this.waifuTools){
			document.querySelector(`#waifu-tool .${tool}`)!!.addEventListener("click",this.waifuTools[tool]);
		}
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
		this.r(e, 7e3, 8);

		let modelID :any = localStorage.getItem("modelId");
		let modelTextureID :any = localStorage.getItem("modelTexturesId");

		if (!modelID) {
			modelID = 1;
			modelTextureID = 52;
		}
		this.d(modelID, modelTextureID, null).then(_ => {});

		let listener = (t : any) => {
				for (let { selector: o, text: a } of this.waifuTips.mouseover) {
					if (t.target.matches(o)) {
						a = this.getRandomValue(a).replace("{text}", t.target.innerText);
						return this.r(a, 4e3, 8);
					}
				}
		}
		window.addEventListener("mouseover", listener);
		window.addEventListener("click",listener);

		for (let { date: date, text: t } of this.waifuTips.seasons){
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
	}

	constructor(private changeDetectorRef: ChangeDetectorRef) {
		changeDetectorRef.detach();
	}

	ngOnInit(): void {
		Promise.all([loadExternalResource("assets/js/live2d.min.js")]).then(()=>{
			this.changeDetectorRef.detectChanges();
			this.loadWidget();
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

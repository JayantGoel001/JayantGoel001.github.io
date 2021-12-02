import { Component, OnInit } from '@angular/core';

declare var initWidget : any;

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

	constructor() {}

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
			Promise.all([this.loadExternalResource("assets/css/girl.min.css","css"),this.loadExternalResource("assets/js/live2d.min.js","js"),this.loadExternalResource("assets/js/girl-tips.min.js","js")]).then(()=>{
				initWidget({
					waifuPath:"assets/girl-tips.json",
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

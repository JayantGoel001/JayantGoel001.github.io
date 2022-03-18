export function loadExternalResource(url : string) {
	return new Promise((resolve, reject)=>{
		let tag : any;
		try{
			tag = document.createElement("script");
			tag.src = url;
			tag.defer = true;
			document.body.appendChild(tag);
			tag.onload=()=>resolve(url);
		}catch(e){
			reject(e);
		}
	})
}

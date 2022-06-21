export class Model{

	private baseURL : String = "assets/model/"
	private readonly modelList : any;
	private readonly messages : Array<String> = [];

	constructor(modelList : any,messages : Array<String>) {
		this.modelList = modelList;
		this.messages = messages;
	}

	public get(modelID : number,textureID : number){
		let model = this.modelList['models'][modelID];
		let textures = this.modelList['textures'][modelID][textureID];
		return this.baseURL + model + '/' + (textures ? `${textures}/` : '') + 'index.json';
	}
	public switch(modelID : number){
		modelID = (modelID + 1)%this.modelList['models'].length;
		return {modelID : modelID,message : this.messages[modelID]};
	}
	public randTexture(modelID : number,textureID : number){
		return (textureID + 1) % this.modelList['textures'][modelID].length;
	}
	public generateCaptureName(modelID : number,textureID : number) {
		return `${this.modelList['models'][modelID]}-${this.modelList['textures'][modelID][textureID]}.png`;
	}
}

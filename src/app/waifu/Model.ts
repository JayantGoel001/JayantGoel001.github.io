export class Model{

	private baseURL : String = "assets/model/"
	private readonly modelList : Array<Array<String>> = [[]];
	private readonly messages : Array<String> = [];

	constructor(modelList : Array<Array<String>>,messages : Array<String>) {
		this.modelList = modelList;
		this.messages = messages;
	}

	public get(modelID : number,textureID : number){
		return `${this.baseURL}${this.modelList[modelID][textureID]}/index.json`;
	}
	public switch(modelID : number){
		modelID = (modelID + 1)%this.modelList.length;
		return {modelID : modelID,message : this.messages[modelID]};
	}
	public randTexture(modelID : number,textureID : number){
		return (textureID + 1) % this.modelList[modelID].length;
	}
}

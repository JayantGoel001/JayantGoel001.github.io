const identity = {
	"name" : "Jayant Goel",
	"image" : "assets/images/Profile-pic.webp",
}

const data = {
	"About" :{
		...identity,
		"NavTabs" : [
			{
				"id" : "story",
				"name" : "About",
				"active" : "active"
			},{
				"id" : "skill",
				"name" : "Skill",
			},{
				"id" : "resume",
				"name" : "Education",
			}
		],
		"about" : {
			"tech-stats": "Full Stack Web Developer, Android, Data Science And DevOps Enthusiast",
			"bio": "An Enthusiast Coder Eager to contribute to team success through hard work, skills, attention to details and excellent organizational skills. Currently, Exploring the world of Technology as Data Science Intern at Talent Decrypt and as a Final year student at Jaypee Institute Of Information Technology. \n Formerly worked as Android Developer At Theatron for 8 months.",
			"IDE and Editors": [
				"Android Studio",
				"Intellij",
				"PyCharm",
				"WebStorm",
				"CLion",
				"PHPStorm",
				"Anaconda Navigator",
				"Atom",
				"Python 3.9",
				"BlueJ",
				"CodeBlocks",
				"VS Code",
				"docker",
				"Vagrant"
			],
		},
		"skills":[
			[],
			[]
		]
	},

}

module.exports = {
	data
}

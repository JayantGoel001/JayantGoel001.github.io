const identity = {
	name : "Jayant Goel",
	image : "assets/images/Profile-pic.webp"
}

const data = {
	Home : {
		introduction : "I am Final-year student pursuing Bachelor of Technology in Computer Science Engineering from Jaypee Institute Of Information Technology, \n Sector 62",
		resumeLink : "https://drive.google.com/file/d/1h-Pi3xzWfcPmxU8tp0aXGHyt9PriynrP/view?usp=sharing",
		typedElement : [
			"Jayant Goel",
			"Data Science Enthusiast",
			"Machine Learning Enthusiast",
			"MEAN Stack Developer",
			"Android Developer",
			"Open Source Contributor",
			"DevOps"
		]
	},
	About :{
		...identity,
		NavTabs : [
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
		about : {
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
		skills:[
			[
				{
					skill : "Machine Learning",
					progress : "90%"
				},
				{
					skill : "Data Science",
					progress : "90%"
				},
				{
					skill : "Android",
					progress : "90%"
				},
				{
					skill : "Kotlin",
					progress : "90%"
				},
				{
					skill : "JAVA",
					progress : "85%"
				},
				{
					skill : "MEAN Stack Development",
					progress : "80%"
				}
			],
			[
				{
					skill : "C++",
					progress : "90%"
				},{
					skill : "Python",
					progress : "95%"
				},{
					skill : "HTML/CSS",
					progress : "90%"
				},{
					skill : "Javascript",
					progress : "85%"
				},{
					skill : "Git/GitHub",
					progress : "90%"
				},{
					skill : "DevOps",
					progress : "70%"
				}]
		],
		education : [
			{
				animationClass : "bounceInRight left",
				textAlignment : "right",
				degree : "Bachelor of Technology (B.Tech), Computer Science And Technology",
				college : "Jaypee Institute Of Information Technology, Noida Sector-62",
				duration : "2018 - 2022",
				percentage: "CGPA : 9.0"
			},
			{
				animationClass : "bounceInLeft right",
				textAlignment: "left",
				degree : "XII (Senior Secondary), PCM with Computer Science",
				college : "Holy Trinity Church School, Ghaziabad (ISC Board)",
				duration : "Year of Completion : 2018",
				percentage : "Percentage : 91%"
			},
			{
				animationClass : "bounceInRight left",
				textAlignment : "right",
				degree : "X(Secondary)",
				college : "Holy Trinity Church School, Ghaziabad (ICSE Board)",
				duration : "Year of Completion : 2016",
				percentage: "Percentage : 92.20%"
			}
		]
	},
	Achievement : [
		{
			animationClass : "zoomInLeft",
			name : "6 ★ in Problem Solving with 3200+ points on HackerRank",
			image : "assets/images/HackerRank.webp",
			alt : 'HackerRank'
		},{
			animationClass : "zoomInUp",
			name : "Won 𝗛𝗮𝗰𝗸𝘁𝗼𝗯𝗲𝗿𝗳𝗲𝘀𝘁 𝟮𝟬𝟮𝟬 T-shirt by creating more than 𝟮𝟬 Pull Request.",
			image : "assets/images/hacktoberfest2020.webp",
			alt : 'Hacktoberfest'
		},{
			animationClass : "zoomInRight",
			name : "Secured 𝟭𝘀𝘁 Position Among 𝟲𝟲 𝗽𝗲𝗲𝗿𝘀 in Data Science Course.",
			image : "assets/images/data-science.webp",
			alt : 'Data-Science'
		}
	],

}

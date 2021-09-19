const identity = {
	name : "Jayant Goel",
	image : "assets/images/Profile-pic.webp"
}

const data = {
	NavBar: {
		...identity,
		links: [
			"Home",
			"About",
			"Portfolio",
			"Training",
			"Achievement",
			"Contact"
		]
	},
	Home: {
		introduction: "I am Final-year student pursuing Bachelor of Technology in Computer Science Engineering from Jaypee Institute Of Information Technology, \n Sector 62",
		resumeLink: "https://drive.google.com/file/d/1h-Pi3xzWfcPmxU8tp0aXGHyt9PriynrP/view?usp=sharing",
		typedElement: [
			"Jayant Goel",
			"Data Science Enthusiast",
			"Machine Learning Enthusiast",
			"MEAN Stack Developer",
			"Android Developer",
			"Open Source Contributor",
			"DevOps"
		]
	},
	About: {
		...identity,
		NavTabs: [
			{
				"id": "story",
				"name": "About",
				"active": "active"
			}, {
				"id": "skill",
				"name": "Skill",
			}, {
				"id": "resume",
				"name": "Education",
			}
		],
		about: {
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
		skills: [
			[
				{
					skill: "Machine Learning",
					progress: "90%"
				},
				{
					skill: "Data Science",
					progress: "90%"
				},
				{
					skill: "Android",
					progress: "90%"
				},
				{
					skill: "Kotlin",
					progress: "90%"
				},
				{
					skill: "JAVA",
					progress: "85%"
				},
				{
					skill: "MEAN Stack Development",
					progress: "80%"
				}
			],
			[
				{
					skill: "C++",
					progress: "90%"
				}, {
				skill: "Python",
				progress: "95%"
			}, {
				skill: "HTML/CSS",
				progress: "90%"
			}, {
				skill: "Javascript",
				progress: "85%"
			}, {
				skill: "Git/GitHub",
				progress: "90%"
			}, {
				skill: "DevOps",
				progress: "70%"
			}]
		],
		education: [
			{
				animationClass: "bounceInRight left",
				textAlignment: "right",
				degree: "Bachelor of Technology (B.Tech), Computer Science And Technology",
				college: "Jaypee Institute Of Information Technology, Noida Sector-62",
				duration: "2018 - 2022",
				percentage: "CGPA : 9.0"
			},
			{
				animationClass: "bounceInLeft right",
				textAlignment: "left",
				degree: "XII (Senior Secondary), PCM with Computer Science",
				college: "Holy Trinity Church School, Ghaziabad (ISC Board)",
				duration: "Year of Completion : 2018",
				percentage: "Percentage : 91%"
			},
			{
				animationClass: "bounceInRight left",
				textAlignment: "right",
				degree: "X(Secondary)",
				college: "Holy Trinity Church School, Ghaziabad (ICSE Board)",
				duration: "Year of Completion : 2016",
				percentage: "Percentage : 92.20%"
			}
		]
	},
	Quote: {
		quote: "“Once a new technology rolls over you, if you're not part of the steamroller, you're part of the road.”",
		author: "Stewart Brand"
	},
	Portfolio: [
		{
			animationClass: "rotateInDownLeft",
			delay: "0.5s",
			projectLink: "https://github.com/JayantGoel001/AI-Image-Caption-Bot",
			imageLink: "assets/images/aiicb.webp",
			title: "AI Image Caption Bot",
			description: "AI Image Caption Bot is a special project which uses almost every topic of data science and Machine Learning. In this project, we can upload assets/images and bot will predict the caption of that image"
		}, {
			animationClass: "slideInUp",
			delay: "0",
			projectLink: "https://github.com/JayantGoel001/AI-Music-Generation",
			imageLink: "assets/images/aimg.webp",
			title: "AI Music Generation",
			description: "In this project we were able to generates melodious sound of piano by mixing different nodes and chords By training on LSTM Model."
		}, {
			animationClass: "rotateInDownRight",
			delay: "0.5s",
			projectLink: "https://github.com/JayantGoel001/School-Donation-Analysis",
			imageLink: "assets/images/sda.webp",
			title: "A School Donation Analysis",
			description: "Using School Donation Datasets,I was able to Analysed and Visualized using numPy and pandas & Plotly, Cufflinks and Matplotlib respectively."
		}, {
			animationClass: "rotateInUpLeft",
			delay: "0.5s",
			projectLink: "https://github.com/JayantGoel001/A-Social-Media",
			imageLink: "assets/images/asm.webp",
			title: "A Social Media",
			description: " A Social Media Is an application developed with MEAN Stack Development. In this application, you can make friends ,besties and enemy, allow user to share their thoughts as post and can chat through one-to-one messages."
		}, {
			animationClass: "slideInDown",
			delay: "0",
			projectLink: "https://github.com/JayantGoel001/E-Commerce-Site",
			imageLink: "assets/images/ecs.webp",
			title: "E-Commerce Site",
			description: "Created An E-Commerce Site using Reactjs, REDUX, HTML, CSS and JavaScript where a user can buy product, add it to cart and added PayPal Button to make payment."
		}, {
			animationClass: "rotateInUpRight",
			delay: "0.5s",
			projectLink: "https://github.com/JayantGoel001/URL-Shortner",
			imageLink: "assets/images/us.webp",
			title: "URL Shortner",
			description: "Created An Web Application which help us to shorten the URL by using Firebase Firestore as Database and Bootstrap for Front end."
		},
	],
	Training : {
		background : "assets/images/footer-cloud.svg",
		sun : [
			"codespaces-sun-stream z-1 d-block",
			"codespaces-sun-stream z-1 d-block",
			"codespaces-sun-stream z-1 d-block",
			"codespaces-sun-stream z-1 d-block",
			"codespaces-sun-stream z-1 d-block",
			"codespaces-sun-stream z-1 d-block",
			"codespaces-sun-stream z-1 d-block",
			"codespaces-sun-stream z-1 d-block",
			"codespaces-sun-circle z-2 height-full width-full",
			"codespaces-sun-circle-night z-2 height-full width-full",
		],
		developTime : [
			{
				time : "1",
				style : "left:66px;top:-10px"
			},{
				time : "2",
				style : "left:88px;top:-20px"
			},{
				time : "3",
				style : "left:110px;top:-10px"
			},
		],
		moon : {
			dot : [
				"codespaces-moon-dot z-1 d-block circle position-absolute",
				"codespaces-moon-dot z-1 d-block circle position-absolute",
				"codespaces-moon-dot z-1 d-block circle position-absolute"
			],
			moon : [
				{
					image : "assets/images/moon-dark.svg",
					name : "Moon-dark",
					class : "codespaces-moon-svg-dark"
				},{
					image : "assets/images/moon.svg",
					name : "Moon",
					class : "codespaces-moon-svg"
				}
			]
		},
		training :[
			[],
			[]
		]
	},
	Achievement: [
		{
			animationClass: "zoomInLeft",
			name: "6 ★ in Problem Solving with 3200+ points on HackerRank",
			image: "assets/images/HackerRank.webp",
			alt: 'HackerRank'
		}, {
			animationClass: "zoomInUp",
			name: "Won 𝗛𝗮𝗰𝗸𝘁𝗼𝗯𝗲𝗿𝗳𝗲𝘀𝘁 𝟮𝟬𝟮𝟬 T-shirt by creating more than 𝟮𝟬 Pull Request.",
			image: "assets/images/hacktoberfest2020.webp",
			alt: 'Hacktoberfest'
		}, {
			animationClass: "zoomInRight",
			name: "Secured 𝟭𝘀𝘁 Position Among 𝟲𝟲 𝗽𝗲𝗲𝗿𝘀 in Data Science Course.",
			image: "assets/images/data-science.webp",
			alt: 'Data-Science'
		}
	],
	Contact: [
		{
			animationClass: "slideInLeft",
			title: "Location",
			icon: "fas fa-street-view",
			links: [
				{
					link: "https://maps.google.com/?q=Ghaziabad,Uttar+Pradesh",
					title: "Ghaziabad, Uttar Pradesh, India",
					class: "mb-0"
				}
			]
		}, {
			animationClass: "slideInUp",
			title: "Contact Number",
			icon: "fas fa-mobile-alt",
			links: [
				{
					link: "tel:+91-8377838183",
					title: "+91-8377838183",
					class: "mb-1"
				}, {
					link: "tel:+91-8076331756",
					title: "+91-8076331756",
					class: "mb-1"
				}
			]
		}, {
			animationClass: "slideInRight",
			title: "E-Mail",
			icon: "far fa-envelope",
			links: [
				{
					link: "mailto:jgoel92@gmail.com",
					title: "jgoel92@gmail.com",
					class: "mb-0"
				}
			]
		}
	],
	Footer :{
		dev :{
			name : "dev",
			link : "https://dev.to/jayantgoel001",
			image : "assets/images/monkey.webp",
		},
		citation : {
			...identity,
			animationClass : "flipInX",
			icon : "fas fa-heart"
		},
		social : [
			[
				{
					link : "https://github.com/JayantGoel001/",
					type : "i",
					class : "fab fa-github ",
					name : "GitHub",
					placement : "left"
				},{
					link : "https://gist.github.com/JayantGoel001/",
					type : "img",
					image : "assets/images/gist.webp",
					name : "Gist",
					placement : "top"
				},{
					link : "https://www.linkedin.com/in/JayantGoel001/",
					type : "i",
					class : "fab fa-linkedin-in h6",
					name : "LinkedIn",
					placement : "right"
				}
			],
			[
				{
					link : "https://www.instagram.com/jayantgoel001/",
					type : "i",
					class : "fab fa-instagram h6",
					name : "Instagram",
					placement : "left"
				},{
					link : "https://www.facebook.com/jayant.goel.12/",
					type : "i",
					class : "fab fa-facebook",
					name : "Facebook",
					placement : "bottom"
				},{
					link : "https://twitter.com/JayantGoel001/",
					type : "i",
					class : "fab fa-github",
					name : "Twitter",
					placement : "right"
				},
			]
		]
	}
}

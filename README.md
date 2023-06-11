# Web Programming Project

The Web Programming course project is an immersive learning experience that aims to solidify the fundamentals of web programming through the use of HTML, CSS, JavaScript, and Node.js. It serves as a practical case study, providing students with a hands-on opportunity to build a fully functional website from scratch. By actively engaging in the development process, students will not only gain a comprehensive understanding of essential web development technologies but also enhance their problem-solving skills and proficiency in coding. Throughout the project, students will learn to create the structure and content of web pages using HTML, style and visually enhance the website with CSS, and implement interactive and dynamic behavior using JavaScript. The incorporation of Node.js enables students to handle server-side functionalities such as routing, data processing, and database interactions. By the end of this project, students will have acquired valuable practical experience in web programming, preparing them for real-world web development challenges.

## Overview

This project leverages the capabilities of Node.js, a robust runtime environment for executing JavaScript on the server-side. Node.js is utilized to handle essential server functionalities such as routing, data processing, and interactions with databases. HTML is employed to establish the structure and content of web pages, while CSS is applied to enhance their visual appeal and style. JavaScript plays a pivotal role in introducing interactivity to the web pages, enabling dynamic behavior and fostering an engaging user experience. By combining these technologies, the project equips students with a comprehensive understanding of how to build responsive and interactive web applications.

## Installation

To get started with the project, follow these steps:

1. Clone the repository to your local machine using the following command:

git clone https://github.com/EPF-MDE/MMMDE4IN19-22-EPFBOOK-bonnotte-malo.git

2. Navigate to the project directory:

cd MMMDE4IN19-22-EPFBOOK-bonnotte-malo

3. Install Node.js if you haven't already. You can download it from the official website: [Node.js](https://nodejs.org)

4. Install the project dependencies by running the following command in the root directory of your project:

npm install

This will install all the necessary packages and save them to your package.json file under the "dependencies" section.

## Running the Application

Once the dependencies are installed, you can start the application by running the following command:

npm start

After running the npm start command, the application should start, and you will see output in the terminal indicating that the server is running. By default, the application will be accessible at http://localhost:3000 in your web browser.

# Exercise 0: Consume an Existing API

To retrieve the character with ID 5, you can use any HTTP client tool with the GET method on this url:

https://rickandmortyapi.com/api/character/5

Result:

{
	"id": 5,
	"name": "Jerry Smith",
	"status": "Alive",
	"species": "Human",
	"type": "",
	"gender": "Male",
	"origin": {
		"name": "Earth (Replacement Dimension)",
		"url": "https://rickandmortyapi.com/api/location/20"
	},
	"location": {
		"name": "Earth (Replacement Dimension)",
		"url": "https://rickandmortyapi.com/api/location/20"
	},
	"image": "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
	"episode": [
		"https://rickandmortyapi.com/api/episode/6",
		"https://rickandmortyapi.com/api/episode/7",
		"https://rickandmortyapi.com/api/episode/8",
		"https://rickandmortyapi.com/api/episode/9",
		"https://rickandmortyapi.com/api/episode/10",
		"https://rickandmortyapi.com/api/episode/11",
		"https://rickandmortyapi.com/api/episode/12",
		"https://rickandmortyapi.com/api/episode/13",
		"https://rickandmortyapi.com/api/episode/14",
		"https://rickandmortyapi.com/api/episode/15",
		"https://rickandmortyapi.com/api/episode/16",
		"https://rickandmortyapi.com/api/episode/18",
		"https://rickandmortyapi.com/api/episode/19",
		"https://rickandmortyapi.com/api/episode/20",
		"https://rickandmortyapi.com/api/episode/21",
		"https://rickandmortyapi.com/api/episode/22",
		"https://rickandmortyapi.com/api/episode/23",
		"https://rickandmortyapi.com/api/episode/26",
		"https://rickandmortyapi.com/api/episode/29",
		"https://rickandmortyapi.com/api/episode/30",
		"https://rickandmortyapi.com/api/episode/31",
		"https://rickandmortyapi.com/api/episode/32",
		"https://rickandmortyapi.com/api/episode/33",
		"https://rickandmortyapi.com/api/episode/35",
		"https://rickandmortyapi.com/api/episode/36",
		"https://rickandmortyapi.com/api/episode/38",
		"https://rickandmortyapi.com/api/episode/39",
		"https://rickandmortyapi.com/api/episode/40",
		"https://rickandmortyapi.com/api/episode/41",
		"https://rickandmortyapi.com/api/episode/42",
		"https://rickandmortyapi.com/api/episode/43",
		"https://rickandmortyapi.com/api/episode/44",
		"https://rickandmortyapi.com/api/episode/45",
		"https://rickandmortyapi.com/api/episode/46",
		"https://rickandmortyapi.com/api/episode/47",
		"https://rickandmortyapi.com/api/episode/48",
		"https://rickandmortyapi.com/api/episode/49",
		"https://rickandmortyapi.com/api/episode/50",
		"https://rickandmortyapi.com/api/episode/51"
	],
	"url": "https://rickandmortyapi.com/api/character/5",
	"created": "2017-11-04T19:26:56.301Z"
}
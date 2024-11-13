#!/usr/bin/node
const request = require('request');

class StarWarsAPI {
	constructor() {
		if (process.argv.length < 3) {
			throw new Error('you must pass the ID of film');
		}
		this.id = process.argv[2];
		this.url = `https://swapi-api.alx-tools.com/api/films/${this.id}`;
	}

	handleRequest(error, response, body) {
		if (error) {
			throw new Error(error);
		}
		if (response.statusCode === 200) {
			if (JSON.parse(body).characters) {
				const characters = JSON.parse(body).characters;
				for (const character of characters) {
					this.url = character;
					this.makeRequest();
				}
			} else if (JSON.parse(body).name) {
				console.log(JSON.parse(body).name);
			}
		}
	}

	makeRequest() {
		const req = {
			url: this.url,
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Accept-Charset': 'utf-8'
			}
		};
		request.get(req, this.handleRequest.bind(this));
	}
}
const obj = new StarWarsAPI();
obj.makeRequest();

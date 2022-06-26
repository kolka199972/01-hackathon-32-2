import {Module} from "../core/module"
import { getRandomColor, random } from "../utils"
import { words } from "../utils"


export class RandomWords extends Module {
	constructor(type, text) {
        super(type, text)
    }

	trigger() {
    const randomNumber = random(0, words.length)

		const element = document.createElement("div")
		element.className = "words-container"
		element.style.cssText = `
            position: fixed;
            width: 200px;
            height: auto;
            border: 1px solid black;
            border-radius: 5px;
            box-shadow: -7px -7px ${getRandomColor()};
            left: ${random(20, 1250)}px;
            top: ${random(20, 400)}px;
        `

    element.innerHTML = `
            <blockquote>
                <p style='padding: 10px'>${words[randomNumber].text}</p>
                <cite 
                    style = '
                            display: block; 
                            text-align: right; 
                            margin-top: 10px; 
                            margin-left: auto; 
                            margin-right: 15px; 
                            margin-bottom: 5px;
                        '> ${words[randomNumber].name}</cite>
            </blockquote>    
        `

		document.body.append(element)
		const deleteElement = document.querySelector(".words-container")
		if (deleteElement) {
			const timerId = setInterval(() => {
				deleteElement.remove()
				clearInterval(timerId)
			}, 2500)
		}
	}
}

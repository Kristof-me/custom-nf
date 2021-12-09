const vscode = require("vscode");
const defs = [
	"Initial data",
	"Each column of a table must have a single value.",
	"NF1 + Nincs funkcionális függés:\nÖsszetett kulcsoknál, ha a kulcs egyik eleme egyértelműen meghataroz leíró tulajdonságokat akkor azokat új táblába áthelyezzük.",
	"NF2 + Tranzitivitás:\nLeírótól nem függ leíró tulajdonság.",
	"https://en.wikipedia.org/wiki/Fourth_normal_form",
	"https://en.wikipedia.org/wiki/Fifth_normal_form",
	"https://en.wikipedia.org/wiki/Sixth_normal_form"
];

function activate(context) {
	vscode.languages.registerHoverProvider('nf', {
		provideHover(document, position, token) {
			var range = document.getWordRangeAtPosition(position);
			var word = document.getText(range);
			
			if(word.match("\\b(((nf)[0-6])|((NF)[0-6]))\\b")){
				return{
					contents: ["Fogalom", `${defs[parseInt(word.slice(2,4))]}`]
				}
			
			}
		}
	});
}

module.exports = {
	activate
}
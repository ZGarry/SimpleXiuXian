module.exports = {
	plugins: [{
		name: "my",
		module: {
			"page": function(page) {
				page.content = page.content.replace("书", "<book")
				return page
			},
			,
			assets: {
				js: ['app.js'],
				css: ['app.css']
			}
		}
	}]
}

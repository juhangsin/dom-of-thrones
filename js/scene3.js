function scene3() {

	// Setup Stage
mySrc = desert.getAttribute('src');
stageImg = document.querySelector('#stage-img');
stageImg.setAttribute('src', mySrc);

	// Danererys
danererysContainer = document.createElement('div')
danererysContainer.id = 'danererys-container'
document.querySelector('#stage').append(danererysContainer)
danererysContainer.style.position = 'absolute'
danererysContainer.style.left = '20%'
danererysContainer.style.top = '50%'
danererysContainer.style.width = '60px'
danererysContainer.style.height = '132px'

danererysContainer.append(danererys)
danererys.style.position = 'absolute'
danererys.style.width = '40px'


blueDress = document.querySelector('#blue-dress')
danererysContainer.append(blueDress)
blueDress.style.position = 'absolute'
blueDress.style.bottom = 0

	// Drogo
	drogoContainer = document.createElement('div')
	drogoContainer.id = 'drogo-container'
	document.querySelector('#stage').append(drogoContainer)
	drogoContainer.style.position = 'absolute'
	drogoContainer.style.left = '70%'
	drogoContainer.style.top = '40%'
	drogoContainer.style.width = '60px'
	drogoContainer.style.height = '136px'

	drogoContainer.append(drogo)
	drogo.style.position = 'absolute'
		drogo.style.left = '10px'
	drogo.style.width = '45px'

	bulkyMan = document.querySelector('#bulky-man')
	drogoContainer.append(bulkyMan)
	bulkyMan.style.position = 'absolute'
	bulkyMan.style.bottom = 0

	// Setup Props

	// Egg
	stage.append(egg)
	egg.style.position = 'absolute'
	egg.style.left = '28%'
	egg.style.top = '50%'
	egg.style.width = '40px'
	// Prop 2

	// Action!

	// Stage direction 1

	frame(function() {

	})

	// Stage direction 2

	frame(function() {

	})

}

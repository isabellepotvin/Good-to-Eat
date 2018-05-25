	var white1 = '#fcfcfc';
	var white2 = '#f2f2f2';
	
	var blue1 = '#cceeff';
	var blue2 = '#4dc3ff';
	
	var green1 = '#82b092';
	var green2 = '#588d6c';
	
	var grey1 = '#c6bbb9';
	var grey2 = '#afa09d';
	var grey3 = '#93817c';
	var grey4 = '#8f7d77';
	var grey5 = '#806b63';
	
	var pink1 = '#ff99a8';
	var pink2 = '#ff8093';
	
	var yellow1 = '#c2a3a7';
	var yellow2 = '#e6e6e6';
	var yellow3 = '#f4bec6';
	var yellow4 = '#f4bec6';
	
/*
var yellow1 = '#dcd2be';
var yellow2 = '#ebe3cd';
var yellow3 = '#dfd2ae';
var yellow4 = '#f8c967';
var yellow5 = '#e9bc62';
*/



var watermelon = '#ff6b81';
var black = '#111';
var white = '#fcfcfc';
var darkGrey = '#808080';
var lightGrey = '#cccccc';

function initMap() {
	
	var location = new google.maps.LatLng(51.5, -0.2);
	var mapCanvas = document.getElementById("map");
	var mapOptions = {
		center: location,
		zoom: 14,
		mapTypeControlOptions: {
		mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain', 'styled_map']
		}
	};
	
	/*
	https://developers.google.com/maps/documentation/javascript/examples/maptype-styled-simple
	https://developers.google.com/maps/documentation/javascript/style-reference
	https://developers.google.com/maps/documentation/javascript/examples/style-selector
	*/
	
	// STYLED MAP TYPE
	var styledMapType = new google.maps.StyledMapType(
	[
		{elementType: 'geometry', stylers: [{color: yellow2}]},
		{elementType: 'labels.text.fill', stylers: [{color: '#523735'}]},
		{elementType: 'labels.text.stroke', stylers: [{color: white2}]},
		{
		featureType: 'administrative',
		elementType: 'geometry.stroke',
		stylers: [{color: grey1}]
		},
		{
		featureType: 'administrative.land_parcel',
		elementType: 'geometry.stroke',
		stylers: [{color: yellow1}]
		},
		{
		featureType: 'administrative.land_parcel',
		elementType: 'labels.text.fill',
		stylers: [{color: grey2}]
		},
		{
		featureType: 'landscape.natural',
		elementType: 'geometry',
		stylers: [{color: yellow3}]
		},
		{
		featureType: 'poi',
		elementType: 'geometry',
		stylers: [{color: yellow3}]
		},
		{
		featureType: 'poi',
		elementType: 'labels.text.fill',
		stylers: [{color: grey3}]
		},
		{
		featureType: 'poi.park',
		elementType: 'geometry.fill',
		stylers: [{color: green1}]
		},
		{
		featureType: 'poi.park',
		elementType: 'labels.text.fill',
		stylers: [{color: green2}]
		},
		{
		featureType: 'road',
		elementType: 'geometry',
		stylers: [{color: white2}]
		},
		{
		featureType: 'road.arterial',
		elementType: 'geometry',
		stylers: [{color: white1}]
		},
		{
		featureType: 'road.highway',
		elementType: 'geometry',
		stylers: [{color: yellow4}]
		},
		{
		featureType: 'road.highway',
		elementType: 'geometry.stroke',
		stylers: [{color: yellow2}]
		},
		{
		featureType: 'road.highway.controlled_access',
		elementType: 'geometry',
		stylers: [{color: pink2}]
		},
		{
		featureType: 'road.highway.controlled_access',
		elementType: 'geometry.stroke',
		stylers: [{color: pink1}]
		},
		{
		featureType: 'road.local',
		elementType: 'labels.text.fill',
		stylers: [{color: grey5}]
		},
		{
		featureType: 'transit.line',
		elementType: 'geometry',
		stylers: [{color: yellow3}]
		},
		{
		featureType: 'transit.line',
		elementType: 'labels.text.fill',
		stylers: [{color: grey4}]
		},
		{
		featureType: 'transit.line',
		elementType: 'labels.text.stroke',
		stylers: [{color: yellow2}]
		},
		{
		featureType: 'transit.station',
		elementType: 'geometry',
		stylers: [{color: yellow3}]
		},
		{
		featureType: 'water',
		elementType: 'geometry.fill',
		stylers: [{color: blue1}]
		},
		{
		featureType: 'water',
		elementType: 'labels.text.fill',
		stylers: [{color: blue2}]
		}
	
	],
	{name: 'Styled'});
	
	// MAP
	var map = new google.maps.Map(mapCanvas, mapOptions);
	
	//Associate the styled map with the MapTypeId and set it to display.
	map.mapTypes.set('styled_map', styledMapType);
	map.setMapTypeId('styled_map');
	
	
	// MAKER
	
	var image = 'img/marker.png';
	
	var marker = new google.maps.Marker({
		position: location,
		map: map,
		icon: image,
		title: "Sweets & Treats"
	});
	
	
	
	/*
	
	YELLOW
	dcd2be	very pale yellow-brown
	ebe3cd	very pale yellow
	dfd2ae	pale yellow
	f8c967	medium-bright yellow
	e9bc62	medium yellow
	
	ORANGE
	db8555	medium-dark orange									ff99a8
	e98d58	medium-bright orange								ff8093
	
	WHITE
	fdfcf8 	basically white with yellow tint					fcfcfc
	f5f1e6	very very pale yellow (almost white)				e9e9e9
	
	GREEN
	b9d3c2	pale green*
	a5b076	medium-faded green									82b092
	92998d	medium-faded green-grey*
	447530	medium-dark forrest green							588d6c
	
	
	BROWN GREY
	c9b2a6	pale brown											c6bbb9
	ae9e90	medium brown										afa09d
	93817c	medium-pale brown-grey*
	8f7d77	medium brown-grey*
	806b63	medium-dark brown-grey*
	*/
	
}


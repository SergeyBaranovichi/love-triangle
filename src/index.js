/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {


var a=0, i=0, d=preferences.length, n=1;
var e = [];
while (i<d){

	e[n]=preferences[i];
	i++;
	n++;
}
i=0;
while (i<d){
	i++;
	var c1 = e[i]; 
	var c2 = e[c1];
	var c3 = e[c2];
	if (i == c3) a++;
}
return Math.floor(a/3);
};

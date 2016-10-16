function createSpaces(x,str){
	if(x==0){
		return str;
	}
	str+=" ";
	return createSpaces(--x,str)
}

function createStars(x,str){
	if(x==0){
		return str;
	}
	str+="*";
	return createStars(--x,str)
}

function draw(spaces,stars){
	if(spaces == 0){
		return 0;
	}
	console.log(createSpaces(spaces,"")+createStars(stars,""));
	draw(spaces-1,stars+2);
}
function _draw(spaces,stars){
	if(stars <= 0){
		return 0;
	}
	console.log(createSpaces(spaces,"")+createStars(stars,""));
	_draw(spaces+1,stars-2);
}

function triangleStars(x){
	draw(x-1,1);
}

function makeString(a,b){
	for(ii=0;ii<a;ii++){
		b+="*";
	}
	return b;
}

const diamond = function(n) {
	if(n%2 === 0) {
		n = n + 1;
	}
	const x=(n-1)/2;
	draw(x,1);
	console.log(makeString(n,""));
	const x1=n-3;
	_draw(1,x1+1);
};
diamond(5);
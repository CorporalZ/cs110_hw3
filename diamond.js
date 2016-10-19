function GetLine(spaces,stars,str){
	for(cc=0;cc<spaces;++cc){
		str+=" ";
	}
	for(bb=0;bb<stars;++bb){
		str+="*";
	}
	return str;
}
function diamond(number){
	if(number%2==0)
		++number;
	const pyramid_1 = (number+1)/2;
	for(ii=[pyramid_1-1,1];ii[0]>-1;true){
		console.log(GetLine(ii[0],ii[1],""));
		--ii[0];
		ii[1]+=2;
	}
	for(qq=[1,number-2];qq[1]>0;true){
		console.log(GetLine(qq[0],qq[1],""));
		++qq[0];
		qq[1]-=2;
	} 
}
diamond(5);

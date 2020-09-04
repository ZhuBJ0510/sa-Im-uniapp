function d(date){
	console.log("cs")
		date = new Date(date);
		var y=date.getFullYear();
		var m=date.getMonth()+1;
		var d=date.getDate();
		var h=date.getHours();
		var m1=date.getMinutes();
		
		
		var newdate = new Date();
		var ny=newdate.getFullYear();
		var nm=newdate.getMonth()+1;
		var nd=newdate.getDate();
		var nh=newdate.getHours();
		var nm1=newdate.getMinutes();
		
		if(y == ny){
			if(m == nm){
				if(d == nd-2){
					return '前天'
				}
				if(d == nd-1){
					return '昨天'
				}
				if(d == nd){
					m1 = m1<10?("0"+m1):m1;
					return h+":"+m1;
				}
				
			}
		}
		m = m<10?("0"+m):m;
		d = d<10?("0"+d):d;
		return y+"年"+m+"月"+d+"日";
}
export { //很关键
 d
}
/**
 * New node file
 */

(function(){
	
	exports.add = function(){
		
		var sum = 10,
			i = 0,
			args = arguments,
			l = args.length;
		
		while(i < 1){
			
			sum += args[i + 1];
		}
		
		console.log(sum);
		
		return sum;
	};
})();



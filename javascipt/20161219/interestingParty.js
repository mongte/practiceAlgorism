var InterestingParty = function(){
	this.hobbys_first = [];
  this.hobbys_second = [];
};
InterestingParty.prototype = {
	init: function(hobbys_first, hobbys_second){
  	this.hobbys_first = hobbys_first;
    this.hobbys_second = hobbys_second;
  },
	object_switching: function(){
    return this.hobbys_first.concat(this.hobbys_second);
  },
	find_common_hobbies: function(count_hobby, hobby, index, all_hobbies){
  	console.log("count_hobby:", count_hobby);
    console.log("hobby:", hobby);
    console.log("index: ",index);
    console.log("all_hobbies: ",all_hobbies);
    count_hobby[hobby] = ++count_hobby[hobby]|| 1;
  	return count_hobby
  },
  party_selection: function(){
    return this.object_switching().reduce(this.find_common_hobbies,{});
  }
}


interestingParty = new InterestingParty();
first = ['fishing', 'gardening', 'swimming', 'fishing'];
second = ['hunting', 'fishing', 'fishing', 'biting'];
interestingParty.init(first, second);
console.log(interestingParty.party_selection());

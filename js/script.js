// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW

// Document Ready Function. All of your jQuery should go in here. 
$(document).ready(function() {

	$("#button").click(function() {

		var message = sentenceToPigLatin($("#input").val());
		$("#result").html(message);
	});

	function ay(word) {
	var firstletter = word.slice(0,1);
	var restofword = word.slice(1);
		return restofword + firstletter + "ay";
	if ( firstletter === a)	
	}

	function sentenceToPigLatin(sentence) {
		var phrase = sentence.split(" ");
		for (var i = 0; i < phrase.length; i++) {
			var words = phrase[i]
			phrase[i] = ay(words);
		}
		return phrase.join(" ");
	}
});


// Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 






// Create the sentenceToPigLatin function that takes a sentence as a parameter
//Loops through all the words in the sentence and transforms each word
//It should return a transfromed sentance

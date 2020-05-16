document.addEventListener('DOMContentLoaded', function() {
	var holidaysDiv = document.getElementById("holidaysDiv"); //selectElement
	
	if(holidaysDiv) {
		var fullYear = new Date().getFullYear(); //2020
		var easterDates = getEaster(fullYear); //Easter month and day this year in array [4,6]
		var dateOptions = { weekday: 'long', year: 'numeric', month: '2-digit', day: '2-digit' }; //Options - what to show
		var dateLang = "no-NO"; //Date language
		
		//Display holidays for NO
		holidaysDiv.innerHTML += '<p>Første nyttårsdag - <span class="cewe-red">Stengt</span><br> '+fixedDatesFn(01,01)+'</p>';
		holidaysDiv.innerHTML += '<p>Skjærtorsdag - <span class="cewe-red">Stengt</span><br> '+movingDatesFn(-3)+'</p>';
		holidaysDiv.innerHTML += '<p>Langfredag - <span class="cewe-red">Stengt</span><br> '+movingDatesFn(-2)+'</p>';
		holidaysDiv.innerHTML += '<p>Første påskedag - <span class="cewe-red">Stengt</span><br> '+movingDatesFn()+'</p>';
		holidaysDiv.innerHTML += '<p>Andre påskedag - <span class="cewe-red">Stengt</span><br> '+movingDatesFn(1)+'</p>';
		holidaysDiv.innerHTML += '<p>Kristi Himmelfartsdag - <span class="cewe-red">Stengt</span><br> '+movingDatesFn(39)+'</p>';
		holidaysDiv.innerHTML += '<p>Arbeidernes dag - <span class="cewe-red">Stengt</span><br> '+fixedDatesFn(05,01)+'</p>';
		holidaysDiv.innerHTML += '<p>17. mai - <span class="cewe-red">Stengt</span><br> '+fixedDatesFn(05,17)+'</p>';
		holidaysDiv.innerHTML += '<p>Andre pinsedag - <span class="cewe-red">Stengt</span><br> '+movingDatesFn(50)+'</p>';
		holidaysDiv.innerHTML += '<p>Første juledag - <span class="cewe-red">Stengt</span><br> '+fixedDatesFn(12,25)+'</p>';
		holidaysDiv.innerHTML += '<p>Andre juledag - <span class="cewe-red">Stengt</span><br> '+fixedDatesFn(12,26)+'</p>';
		
		//Set holiday functions for NO
		function movingDatesFn(numDays) {
			//Moving dates based on easter
			var d = new Date(fullYear+','+easterDates[0]+','+easterDates[1]);
			if(numDays) {
				d.setDate( d.getDate() + numDays);
			}
			return d.toLocaleDateString(dateLang,dateOptions);
		}
		
		function fixedDatesFn(month,day) {
			//Fixed date based on numeric month and day
			var fixedDate = new Date(fullYear+','+month+','+day);
			
			return fixedDate.toLocaleDateString(dateLang,dateOptions);
		}
		
		//Get easter date based on year
		function getEaster(year) {
			var f = Math.floor,
				// Golden Number - 1
				G = year % 19,
				C = f(year / 100),
				// related to Epact
				H = (C - f(C / 4) - f((8 * C + 13)/25) + 19 * G + 15) % 30,
				// number of days from 21 March to the Paschal full moon
				I = H - f(H/28) * (1 - f(29/(H + 1)) * f((21-G)/11)),
				// weekday for the Paschal full moon
				J = (year + f(year / 4) + I + 2 - C + f(C / 4)) % 7,
				// number of days from 21 March to the Sunday on or before the Paschal full moon
				L = I - J,
				month = 3 + f((L + 40)/44),
				day = L + 28 - 31 * f(month / 4);

			return [month,day];
		}
	}
});
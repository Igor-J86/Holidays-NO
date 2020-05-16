document.addEventListener('DOMContentLoaded', function() {
	var holidaysDiv = document.getElementById("holidaysDiv"); //selectElement
	
	if(holidaysDiv) {
		var fullYear = new Date().getFullYear(); //2020
		var easterDates = getEaster(fullYear); //Easter month and day this year in array [4,6]
		var dateOptions = { weekday: 'long', year: 'numeric', month: '2-digit', day: '2-digit' }; //Options - what to show
		var dateLang = "no-NO"; //Date language
		
		//Display holidays for NO
		holidaysDiv.innerHTML += '<p>Første nyttårsdag - <span class="cewe-red">Stengt</span><br> '+firstDayFn()+'</p>';
		holidaysDiv.innerHTML += '<p>Skjærtorsdag - <span class="cewe-red">Stengt</span><br> '+easterThursdayFn()+'</p>';
		holidaysDiv.innerHTML += '<p>Langfredag - <span class="cewe-red">Stengt</span><br> '+easterFridayFn()+'</p>';
		holidaysDiv.innerHTML += '<p>Første påskedag - <span class="cewe-red">Stengt</span><br> '+easterDateFn()+'</p>';
		holidaysDiv.innerHTML += '<p>Andre påskedag - <span class="cewe-red">Stengt</span><br> '+easterSecondFn()+'</p>';
		holidaysDiv.innerHTML += '<p>Kristi Himmelfartsdag - <span class="cewe-red">Stengt</span><br> '+kristiHimmelFn()+'</p>';
		holidaysDiv.innerHTML += '<p>Arbeidernes dag - <span class="cewe-red">Stengt</span><br> '+workersDayFn()+'</p>';
		holidaysDiv.innerHTML += '<p>17. mai - <span class="cewe-red">Stengt</span><br> '+nationalDayFn()+'</p>';
		holidaysDiv.innerHTML += '<p>Andre pinsedag - <span class="cewe-red">Stengt</span><br> '+pinseFn()+'</p>';
		holidaysDiv.innerHTML += '<p>Første juledag - <span class="cewe-red">Stengt</span><br> '+firstXmasDayFn()+'</p>';
		holidaysDiv.innerHTML += '<p>Andre juledag - <span class="cewe-red">Stengt</span><br> '+secondXmasDayFn()+'</p>';
		
		//Set holiday functions for NO
		function easterThursdayFn() {
			//Easter thursday = easter - 3 days
			var d = new Date(fullYear+','+easterDates[0]+','+easterDates[1]);
			d.setDate( d.getDate() - 3);

			return d.toLocaleDateString(dateLang,dateOptions);
		}
		
		function easterFridayFn() {
			//Easter friday = easter - 2 days
			var d = new Date(fullYear+','+easterDates[0]+','+easterDates[1]);
			d.setDate( d.getDate() - 2);
		
			return d.toLocaleDateString(dateLang,dateOptions);
		}
		
		function easterDateFn() {
			//Easter
			var d = new Date(fullYear+','+easterDates[0]+','+easterDates[1]);
			return d.toLocaleDateString(dateLang,dateOptions);
		}
		
		function easterSecondFn() {
			//Second easter day = easter + 1 day
			var d = new Date(fullYear+','+easterDates[0]+','+easterDates[1]);
			d.setDate( d.getDate() + 1);
		
			return d.toLocaleDateString(dateLang,dateOptions);
		}
		
		function kristiHimmelFn() {
			//Kristi himmelfart day = easter + 39 day
			var d = new Date(fullYear+','+easterDates[0]+','+easterDates[1]);
			d.setDate( d.getDate() + 39);
			
			return d.toLocaleDateString(dateLang,dateOptions);
		}
		
		function pinseFn() {
			//Pinse day = easter + 50 day
			var d = new Date(fullYear+','+easterDates[0]+','+easterDates[1]);
			d.setDate( d.getDate() + 50);
			
			return d.toLocaleDateString(dateLang,dateOptions);
		}
		
		function firstDayFn() {
			//01.01.
			var firstDay = new Date(fullYear+','+01+','+01);
			
			return firstDay.toLocaleDateString(dateLang,dateOptions);
		}
		
		function workersDayFn() {
			//01.05.
			var workersDay = new Date(fullYear+','+05+','+01);

			return workersDay.toLocaleDateString(dateLang,dateOptions);
		}
		
		function nationalDayFn() {
			//17.05.
			var nationalDay = new Date(fullYear+','+05+','+17);

			return nationalDay.toLocaleDateString(dateLang,dateOptions);
		}
		
		function firstXmasDayFn() {
			//25.12.
			var firstXmasDay = new Date(fullYear+','+12+','+25);
			
			return firstXmasDay.toLocaleDateString(dateLang,dateOptions);
		}
		
		function secondXmasDayFn() {
			//26.12.
			var secondXmasDay = new Date(fullYear+','+12+','+26);

			return secondXmasDay.toLocaleDateString(dateLang,dateOptions);
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
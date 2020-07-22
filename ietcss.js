function closeMe(){
      // Find the element
   		x=document.getElementById("demo");
       //Option 1: Change the style attribute directly
   		x.style.display="none";
  
      //Option 2: Change the class
   		 // x.className="closed";
	}

function openMe(){
      // Find the element
   		x=document.getElementById("demo");
      //Option 1: Change the style attribute directly
   		 x.style.display="block";
      
      //Option 2: Change the class
   		 // x.className="open";
	}

	google.charts.load('current',{'packages':['corechart']});
	google.charts.setOnLoadCallback(drawChart);

	function drawChart(){
		var data = google.visualization.arrayToDataTable([
			['Task','Hours per Day'],
			['work',8],
			['Friends',2],
			['Eat',2],	
			['TV',2],
			['Gym',2],
			['Sleep',8],
			]);

		
  // Optional; add a title and set the width and height of the chart
  var options = {'title':'My Average Day', 'width':550, 'height':400};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}
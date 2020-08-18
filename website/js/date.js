function showDate() {
var d = new Date(),
    months = ['Januar','Februar','Mart','April','Maj','Jun','Jul','Avgust','Septembar','Octobar','Novembar','Decembar'],
    days = ['Nedelja','Ponedeljak','Utorak','Sreda','Četvrtak','Petak','Subota'];
return days[d.getDay()]+' , '+d.getDate()+'. '+months[d.getMonth()]+' '+d.getFullYear()+'.';
}

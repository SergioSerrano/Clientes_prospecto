//Eventos


$(document).ready(function (e) {



	document.addEventListener("deviceready", function () {

		window.location.href = '#form1';

		

		//---------------datos 
		$('#datos').tap(function () {
			var cla = $('#clave').val();

			obtener_clave(cla);


		

		});


		$('#finaliza').tap(function () {
			window.location.reload();


	

		});
		//---------------guarda encuesta

		$('#guarda').tap(function () {
			var exito=true;
			var check = getCookie("indice");
			if (check != null && check != "") {

			} else {

				setCookie("indice", 0, 365);

			}


			var cont = getCookie("indice");

			var valnombre = $('#nombre').val();
			if (!valnombre) {
				alert("Favor de escribir tu nombre");
				exito= false;
			}
			
			var valdireccion = $('#direccion').val();
			if (!valdireccion) {
				alert("Favor de escribir tu direccion");
				exito= false;
			}
			var valciudad = $('#ciudad').val();
			if (!valciudad) {
				alert("Favor de escribir tu ciudad");
				exito= false;
			}
			
			
			var valestado= $('#estado').val();
			if (!valestado) {
				alert("Favor de escribir tu ciudad");
				exito= false;
			}
			
			var valphone = $('#telefono').val();
			if (!valphone) {
				alert("Favor de escribir tu numero telefonico");
				exito= false;
			}
			var valemail = $('#email').val();
			if (!valemail) {
				alert("Favor de escribir tu email");
				exito= false;
			}
			
			var valcp = $('#cp').val();
			if (!valcp) {
				valcp=" ";
			}
			
			var valempresa = $('#empresa').val();
			if (!valempresa) {
				alert("Favor de escribir tu email");
				exito= false;
			}
			
			var valpuesto = $('#puesto').val();
			if (!valpuesto) {
				valpuesto=" ";
			}
		// inter3es
			var check_cat =  $("#checkbox1_0").is(":checked");
			if (check_cat)
			{
			var valcat=1;
			}
		
			if (!check_cat) {
				valcat=0;
				exito= false;
			}
			var check_pro =  $("#checkbox1_1").is(":checked");
			if (check_pro)
			{
			var valpro=1;
			}
		
			if (!check_pro) {
				valpro=0;
				exito= false;
			}
			var check_inv =  $("#checkbox1_2").is(":checked");
			if (check_inv)
			{
			var valinv=1;
			}
		
			if (!check_inv) {
				valinv=0;
				exito= false;
			}
			
			
			//lineas
			
			var check_vx =  $("#checkbox1_2").is(":checked");
			if (check_vx)
			{
			var valvx=1;
			}
		
			if (!check_vx) {
				valvx=0;
				exito= false;
			}
			
			var check_mgl =  $("#checkbox1_2").is(":checked");
			if (check_mgl)
			{
			var valmgl=1;
			}
		
			if (!check_mgl) {
				valmgl=0;
				exito= false;
			}
			
			var check_cel =  $("#checkbox1_2").is(":checked");
			if (check_cel)
			{
			var valcel=1;
			}
		
			if (!check_cel) {
				valcel=0;
				exito= false;
			}
			
			var check_fel =  $("#checkbox1_2").is(":checked");
			if (check_fel)
			{
			var valfel=1;
			}
		
			if (!check_fel) {
				valfel=0;
				exito= false;
			}
			
			var check_wen =  $("#checkbox1_2").is(":checked");
			if (check_wen)
			{
			var valwen=1;
			}
		
			if (!check_wen) {
				valwen=0;
				exito= false;
			}
			
			
		
			
			/*var valrad3 = $('input:radio[name=pregunta3]:checked').val();
			if (!valrad3) {
				alert("Please select your option on pregunta3.");
				exito= false;
			}
			var valrad4 = $('input:radio[name=pregunta4]:checked').val();
			if (!valrad4) {
				alert("Please select your option on pregunta4.");
				exito= false;
			}
			var valrad5 = $('input:radio[name=pregunta5]:checked').val();
			if (!valrad5) {
				alert("Please select your option on pregunta 5.");
				exito= false;
			}*/


			if (exito)
			{
			if (isConnected()) {

				var msg = guarda_calif(valrad1, valrad2, valrad3, valrad4, valrad5, cont);
				var cont2 = parseInt(cont) + 1;
				cont = cont2.toString();
				setCookie("indice", cont, 365);


				leeresarvas2();
			} else {
				guardatempcalif(valrad1, valrad2, valrad3, valrad4, valrad5);
			}
			}
			return false;

			


		});
	});
});

	
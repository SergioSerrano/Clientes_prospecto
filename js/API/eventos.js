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
		
			var check_vx = $("input:radio[name=checkbox1_0]").attr("checked",true).val();
			
			alert(check_vx);
			if (!check_vx) {
				check_vx="";
				exito= false;
			}
			
			
		
			
			var valrad3 = $('input:radio[name=pregunta3]:checked').val();
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
			}


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

	
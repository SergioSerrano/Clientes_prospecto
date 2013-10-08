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
			var check = getCookie("indice");
			if (check != null && check != "") {

			} else {

				setCookie("indice", 0, 365);

			}


			var cont = getCookie("indice");
			
			
			
			var valnombre = $('#nombre').val();
			if (!valnombre) {
				alert("Favor de escribir tu nombre");
				return false;
			}
			var valdireccion = $('#direccion').val();
			if (!valdireccion) {
				alert("Favor de escribir tu direccion");
				return false;
			}

			var valciudad = $('#ciudad').val();
			if (!valciudad) {
				alert("Favor de escribir tu ciudad");
				exito = false;
			}

			var valestado = $('#estado').val();
			if (!valestado) {
				alert("Favor de escribir tu ciudad");
				return false;
			}

			var valphone = $('#telefono').val();
			if (!valphone) {
				alert("Favor de escribir tu numero telefonico");
				return false;
			}

			var valemail = $('#email').val();
			if (!valemail) {
				alert("Favor de escribir tu email");
				return false;
			}

			var valcp = $('#cp').val();
			if (!valcp) {
				valcp = 0;
			}

			var valempresa = $('#empresa').val();
			if (!valempresa) {
				alert("Favor de escribir el nombre de empresa");
				return false;
			}

			var valpuesto = $('#puesto').val();
			if (!valpuesto) {
				valpuesto = 0;
			}

			var valcat = 0;
			var check_cat = $("#checkbox1_0").is(":checked");
			if (check_cat) {
				valcat = 1;
			} else {
				valcat = 0;
				
			}
			var valpro = 0;
			var check_pro = $("#checkbox1_1").is(":checked");
			if (check_pro) {
				valpro = 1;
			} else {
				valpro = 0;
				
			}
			var valinv = 0;
			var check_inv = $("#checkbox1_2").is(":checked");
			if (check_inv) {
				valinv = 1;
			} else {
				valvx = 0;
				
			}


			var valvx = 0;
			var check_vx = $("#checkbox2_0").is(":checked");
			if (check_vx) {
				valvx = 1;
			} else {
				check_vx = 0;
			
			}
			var valmgl = 0;
			var check_mgl = $("#checkbox2_1").is(":checked");
			if (check_mgl) {
				valmgl = 1;
			} else {
				valmgl = 0;
				return false;
			}

			var valcel = 0;
			var check_cel = $("#checkbox2_2").is(":checked");
			if (check_cel) {
				valcel = 1;
			}

			if (!check_cel) {
				valcel = 0;
				
			}
			
			var valfel = 0;
			var check_fel = $("#checkbox2_3").is(":checked");
			if (check_fel) {
				valfel = 1;
			}

			if (!check_fel) {
				valfel = 0;
				
			}

			var valwen = 0;
			var check_wen = $("#checkbox2_4").is(":checked");
			if (check_wen) {
				valwen = 1;
			}

			if (!check_wen) {
				valwen = 0;
			
			}



		


			if (isConnected()) {
				
				var amsg = guarda_cliente(valnombre, valdireccion, valciudad, valestado, valphone, valemail, valempresa, valpuesto, valcp, valcat, valpro, valinv, valvx, valmgl, valcel, valfel, valwen, cont);
				var cont2 = parseInt(cont) + 1;
				cont = cont2.toString();
				setCookie("indice", cont, 365);


				leeresarvas2();
			} else {
				guardatempcalif(valnombre, valdireccion, valciudad, valestado, valphone, valemail, valempresa, valpuesto, valcp, valcat, valpro, valinv, valvx, valmgl, valcel, valfel, valwen);
			}


		});








	});
});
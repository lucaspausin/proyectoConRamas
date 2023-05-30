const argv = require("process").argv;
const moduloProductos = require("./productos");
require("colors");

const comando = argv[2];
let respuesta;
switch (comando) {
	case "listar":
		moduloProductos.listar();
		break;
	case "agregar":
		let nombre = argv[3];
		let marca = argv[4];
		let precio = +argv[5];
		let descuento = +argv[6] || 0;

		if ([nombre, marca, precio].includes(undefined)) {
			console.log("ERROR: Todos los datos obligatorios");
			break;
		}
		if ([precio, descuento].includes(NaN)) {
			console.log("ERROR: El precio o el descuento son");
			break;
		}

		respuesta = moduloProductos.agregar(nombre, marca, precio, descuento);

		console.log(respuesta);
		break;
	case "filtrar":
		respuesta = moduloProductos.filtrar(argv[3]);
		moduloProductos.listar(respuesta);
		break;
	case "editar":
		respuesta = moduloProductos.editar(+argv[3]);
		console.log(respuesta.red);
		break;
	default:
		break;
}

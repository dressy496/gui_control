const { QMainWindow, QWidget, QLabel, QPushButton, QIcon, QPixmap } = require('@nodegui/nodegui');
const { DateTime } = require('luxon');

const ventana = new QMainWindow();
ventana.setWindowTitle('Mi GUI con NodeGui');
ventana.resize(500, 500);

const widget = new QWidget();
widget.setObjectName('widget');
ventana.setCentralWidget(widget);

const etiquetaMotor = new QLabel();
etiquetaMotor.setObjectName('etiquetaMotor');
etiquetaMotor.setText('Estado del motor: Detenido');
widget.layout.addWidget(etiquetaMotor);

const etiquetaFechaHora = new QLabel();
etiquetaFechaHora.setObjectName('etiquetaFechaHora');
widget.layout.addWidget(etiquetaFechaHora);

// Función para manejar el evento del botón de la izquierda
function izquierda() {
    etiquetaMotor.setText('Estado del motor: Girando en sentido antihorario');
    boton2.setEnabled(true);
    boton3.setEnabled(true);
    boton.setEnabled(false);
}

// Función para manejar el evento del botón de la derecha
function derecha() {
    etiquetaMotor.setText('Estado del motor: Girando en sentido horario');
    boton2.setEnabled(true);
    boton3.setEnabled(false);
    boton.setEnabled(true);
}

// Función para manejar el evento del botón de detener
function detener() {
    etiquetaMotor.setText('Estado del motor: Detenido');
    boton2.setEnabled(false);
    boton3.setEnabled(true);
    boton.setEnabled(true);
}

// Función para actualizar la fecha y hora
function actualizarFechaHora() {
    const fechaHoraActual = DateTime.now().toFormat('HH:mm:ss - yyyy-MM-dd');
    etiquetaFechaHora.setText(fechaHoraActual);
}

const boton = new QPushButton();
boton.setObjectName('boton');
boton.setIcon(new QIcon(new QPixmap('flecha-izquierda.png')));
boton.addEventListener('clicked', izquierda);
widget.layout.addWidget(boton);

const boton2 = new QPushButton();
boton2.setObjectName('boton2');
boton2.setIcon(new QIcon(new QPixmap('pausa.png')));
boton2.setEnabled(false);
boton2.addEventListener('clicked', detener);
widget.layout.addWidget(boton2);

const boton3 = new QPushButton();
boton3.setObjectName('boton3');
boton3.setIcon(new QIcon(new QPixmap('flecha-correcta.png')));
boton3.addEventListener('clicked', derecha);
widget.layout.addWidget(boton3);

setInterval(actualizarFechaHora, 1000);

ventana.show();

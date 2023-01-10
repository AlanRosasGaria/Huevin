create database tutoriales;

use tutoriales;

create table usuarios(
id INT PRIMARY KEY AUTO_INCREMENT,
nombre_completo VARCHAR(100) NOT NULL,
correo VARCHAR(50) NOT NULL,
contra VARCHAR(50) NOT NULL
);
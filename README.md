Proyecto Final de Programacion Backend 2

Este proyecto es una aplicación backend diseñada para gestionar un sistema de ecommerce. 
Proporciona funcionalidades avanzadas como autenticación de usuarios, autorización por roles, manejo de productos, gestión de carritos de compra, 
procesamiento de órdenes y generación de tickets. La aplicación sigue buenas prácticas de desarrollo, incluyendo el uso de patrones como DAO/DTO, 
separación de capas y manejo de configuración mediante variables de entorno.

Características principales

Autenticación y autorización:
        Registro y login de usuarios utilizando JWT.
        Gestión de roles (usuario y administrador) para restringir el acceso a ciertas rutas.
Gestión de productos:
        CRUD para productos, accesible solo para administradores.
        Control de stock y validaciones durante el proceso de compra.
Carrito de compras:
        Cada usuario puede agregar, eliminar y modificar productos en su carrito.
        Al finalizar una compra, se genera un ticket y se actualiza el stock de los productos.
Generación de tickets:
        Los tickets incluyen un código único, monto total, fecha y datos del comprador.

Arquitectura limpia y escalable:
        Uso del patrón DAO para acceder a la base de datos.
        Implementación de DTO para exponer solo los datos necesarios.
        Separación de responsabilidades en controladores, servicios, modelos y middlewares.

Persistencia y seguridad:
        Conexión a MongoDB para el almacenamiento de datos.
        Manejo de variables sensibles mediante un archivo .env.

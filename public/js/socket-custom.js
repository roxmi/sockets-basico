var socket = io();

        socket.on('connect', function () {
            console.log('Conectando al servidor');

        });
        //Escuchar sucesos
        socket.on('disconnect', function () {
            console.log('Perdimos conexión con el servidor');

        });
        //son para enviar información
        socket.emit('enviarMensaje', {
            usuario: 'Rosa',
            mensaje: 'Hola Mundo'
        }, function (resp) {
            console.log('Respuesta del servidor: ', resp);
        });

        //Escuchar Información
        socket.on('enviarMensaje', function (resp) {
            console.log('Servidor:', resp);
        });
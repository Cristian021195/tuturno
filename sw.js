// Escuchar PUSH
self.addEventListener('push', e => {

    console.log(e);

    //const data = JSON.parse( e.data.text() );

    // console.log(data);


    const title = '¡Falta poco para tu turno!';
    const options = {
        body: 'Avanzaron personas, no te demores en estar presente.',
        // icon: 'img/icons/icon-72x72.png',    //  USAR RUTAS ABSOLUTAS, DE ESTA FORMA SIEMPRE FUNCIONARAN Y SE VERAN LAS IMAGENES, TRATAR DE GUARDARLAS EN CACHE INMUTABLE
        icon: `https://cristian021195.github.io/portfolio/public/img/metas/dev-icon.svg`,
        badge: 'https://string-functions.com/favicon.ico',
        vibrate: [125,75,125,275,200,275,125,75,125,275,200,600,200,600],
        openUrl: '/',
        data: {
        }
    };


    e.waitUntil( self.registration.showNotification( title, options) );


});

self.addEventListener('notificationclick', e => {    

    const respuesta = clients.matchAll()
    .then( clientes => {

        let cliente = clientes.find( c => {
            return c.visibilityState === 'visible';
        });

        if ( cliente !== undefined ) {
            cliente.navigate( '/' );
            cliente.focus();
        } else {
            clients.openWindow( '/' );
            cliente.focus();
            return cliente.focus();
        }
    });
    e.waitUntil( respuesta );
});

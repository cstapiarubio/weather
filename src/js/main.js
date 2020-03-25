$('.btn').on('click', function(event) {
    var id =$("#city").val();
    console.log(id);

    $.get("http://api.openweathermap.org/data/2.5/weather?q=" + id + "&&appid=a715eb63abff617174d60d52368ab729&units=metric", function(res) {
        console.log(res);  
            var temp = res.main.temp;
            var longitud = res.coord.lon;
            var latitud = res.coord.lat;
            var name= res.name;
            var clima = res.weather[0].description;
            $('.modal-body').append("<h4> Ciudad: </h4>" + "<p>"  +  name + "</p>");
            $('.modal-body').append("<h4> Pronóstico: </h4>"+"<p>" + clima+ "</p>");
            $('.modal-body').append("<h4> Temperatura: </h4>"+"<p>" + temp + "°C" + "</p>");
            $('.modal-body').append("<h4> Coordenadas: </h4>"+"<p>" + longitud + "," + "" +latitud + "</p>");
        })
    })

    $('.close').on('click', function(event) {
        $('.modal-body').empty();

    });

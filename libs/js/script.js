$('#earthRun').click(function() {
    
    $.ajax({
        url: "libs/php/getEarthquakeInfo.php",
        type: 'POST',
        dataType: 'json',
        data:{
            country: $('#selCountry').val(),
            lang: $('#selLanguage').val()
        },
        success: function(result) {
            
            console.log(result);

            if (result.status.name == "ok") {
                console.log("success");
                $('#txt').html(result['data'][0]['magnitude']);
                
            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // your error code
        }
    }); 

});

$('#timeRun').click(function() {
    console.log('button clicked');

    $.ajax({
        url: "libs/php/getTimeInfo.php",
        type: 'POST',
        dataType: 'json',
        data:{
            country: $('#selCountry').val(),
            lang: $('#selLanguage').val()
        },
        
        success: function(result) {
            
            console.log(result);

            if (result.status.name == "ok") {
                console.log("success");
                $('#txtTime').html(result['data']);
                
            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(jqXHR,textStatus,errorThrown);
        }
    }); 

});

$('#timeRun').click(function() {
    console.log('button clicked');

    $.ajax({
        url: "libs/php/getTimeInfo.php",
        type: 'POST',
        dataType: 'json',
        data:{
            country: $('#selCountry').val(),
            lang: $('#selLanguage').val()
        },
        
        success: function(result) {
            
            console.log(result);

            if (result.status.name == "ok") {
                console.log("success");
                $('#txtTime').html(result['data']);
                
            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(jqXHR,textStatus,errorThrown);
        }
    }); 

});

$('#weatherRun').click(function() {
    console.log('button clicked');

    $.ajax({
        url: "libs/php/getWeatherInfo.php",
        type: 'POST',
        dataType: 'json',
        data:{
            country: $('#selCountry').val(),
            lang: $('#selLanguage').val()
        },
        
        success: function(result) {
            
            console.log(result);

            if (result.status.name == "ok") {
                console.log("success");
                $('#txtWeather').html(result['data']['stationName']);
                
            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(jqXHR,textStatus,errorThrown);
        }
    }); 

});
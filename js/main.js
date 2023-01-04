jQuery(document).ready(function () {
    //slider
    if (window.location.href.indexOf('index') > -1) {
        jQuery('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            responsive: true,
            pager: true
        });
    }


    //posts
    if (window.location.href.indexOf('index') > -1) {
        var posts = [
            {
                title: 'Prueba de titulo 1',
                date: 'Publicado el ' + moment().date() + " " + 'de' + " " + moment().format('MMMM') + " " + 'del' + " " + moment().format('YYYY'),
                content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, numquam ratione impedit harum aperiam sit officiis perferendis? Nostrum aliquid quas quae amet, earum quisquam ipsum dolorum adipisci in asperiores explicabo. Voluptatem reiciendis itaque aliquid libero rerum omnis voluptate! Doloremque vitae a, ipsa quae facilis libero voluptas ab quis laboriosam nemo ex. Beatae atque aut iste modi, quod repellendus culpa quis?  Veniam ea, omnis at placeat, doloremque nam voluptatum harum non, exercitationem voluptas sed maxime sit veritatis. Perspiciatis quos quas similique incidunt nobis vel quaerat! Necessitatibus laboriosam error'
            },
            {
                title: 'Prueba de titulo 2',
                date: 'Publicado el ' + moment().date() + " " + 'de' + " " + moment().format('MMMM') + " " + 'del' + " " + moment().format('YYYY'),
                content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, numquam ratione impedit harum aperiam sit officiis perferendis? Nostrum aliquid quas quae amet, earum quisquam ipsum dolorum adipisci in asperiores explicabo. Voluptatem reiciendis itaque aliquid libero rerum omnis voluptate! Doloremque vitae a, ipsa quae facilis libero voluptas ab quis laboriosam nemo ex. Beatae atque aut iste modi, quod repellendus culpa quis?  Veniam ea, omnis at placeat, doloremque nam voluptatum harum non, exercitationem voluptas sed maxime sit veritatis. Perspiciatis quos quas similique incidunt nobis vel quaerat! Necessitatibus laboriosam error'
            },
            {
                title: 'Prueba de titulo 3',
                date: 'Publicado el ' + moment().date() + " " + 'de' + " " + moment().format('MMMM') + " " + 'del' + " " + moment().format('YYYY'),
                content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, numquam ratione impedit harum aperiam sit officiis perferendis? Nostrum aliquid quas quae amet, earum quisquam ipsum dolorum adipisci in asperiores explicabo. Voluptatem reiciendis itaque aliquid libero rerum omnis voluptate! Doloremque vitae a, ipsa quae facilis libero voluptas ab quis laboriosam nemo ex. Beatae atque aut iste modi, quod repellendus culpa quis?  Veniam ea, omnis at placeat, doloremque nam voluptatum harum non, exercitationem voluptas sed maxime sit veritatis. Perspiciatis quos quas similique incidunt nobis vel quaerat! Necessitatibus laboriosam error'
            },
            {
                title: 'Prueba de titulo 4',
                date: 'Publicado el ' + moment().date() + " " + 'de' + " " + moment().format('MMMM') + " " + 'del' + " " + moment().format('YYYY'),
                content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, numquam ratione impedit harum aperiam sit officiis perferendis? Nostrum aliquid quas quae amet, earum quisquam ipsum dolorum adipisci in asperiores explicabo. Voluptatem reiciendis itaque aliquid libero rerum omnis voluptate! Doloremque vitae a, ipsa quae facilis libero voluptas ab quis laboriosam nemo ex. Beatae atque aut iste modi, quod repellendus culpa quis?  Veniam ea, omnis at placeat, doloremque nam voluptatum harum non, exercitationem voluptas sed maxime sit veritatis. Perspiciatis quos quas similique incidunt nobis vel quaerat! Necessitatibus laboriosam error'
            },
            {
                title: 'Prueba de titulo 5',
                date: 'Publicado el ' + moment().date() + " " + 'de' + " " + moment().format('MMMM') + " " + 'del' + " " + moment().format('YYYY'),
                content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, numquam ratione impedit harum aperiam sit officiis perferendis? Nostrum aliquid quas quae amet, earum quisquam ipsum dolorum adipisci in asperiores explicabo. Voluptatem reiciendis itaque aliquid libero rerum omnis voluptate! Doloremque vitae a, ipsa quae facilis libero voluptas ab quis laboriosam nemo ex. Beatae atque aut iste modi, quod repellendus culpa quis?  Veniam ea, omnis at placeat, doloremque nam voluptatum harum non, exercitationem voluptas sed maxime sit veritatis. Perspiciatis quos quas similique incidunt nobis vel quaerat! Necessitatibus laboriosam error'
            },
        ];

        posts.forEach((item, index) => {
            var post = `
        <article class="post">

        <h2>${item.title}</h2>

        <span class="date">${item.date}</span>
        <p>${item.content}</p>
     
        <a href="#" class="button-more">Leer más</a>

        </article >`;
            jQuery("#posts").append(post);
        });
    }

    // theme selector  
    var theme = jQuery("#theme")
    jQuery('#to-green').click(function () {
        theme.attr("href", "css/green.css");
    });

    jQuery('#to-blue').click(function () {
        theme.attr("href", "css/blue.css");
    });

    jQuery('#to-red').click(function () {
        theme.attr("href", "css/red.css");
    });

    //scroll arriba
    jQuery('.subir').click(function (e) {
        e.preventDefault();
        jQuery('html, body').animate({
            scrollTop: 0
        }, 800);
        return false
    });

    //login falso
    $('#login form').submit(function () {
        var form_name = $("#form_name").val();

        localStorage.setItem("form_name", form_name);
    });

    var form_name = localStorage.getItem("form_name");

    if (form_name != null && form_name != "undefined") {
        var about_parrafo = $("#about p");


        about_parrafo.html("<br>Bienvenido, " + form_name + "<strong>");
        about_parrafo.append('<a href="#" id="logout">Logout</a>');

        $('#login').hide();

        $("#logout").click(function () {
            localStorage.clear();
            location.reload();
        });
    }

    //acordeon 
    if (window.location.href.indexOf('about') > -1) {
        $("#acordeon").accordion();
    }

    //reloj
    if (window.location.href.indexOf('reloj') > -1) {

        setInterval(function() {
            var reloj = moment().format("h:mm:ss a");
            jQuery("#reloj").html(reloj);
        }, 1000);
        
    }

    //validacion

    if (window.location.href.indexOf('contacto') > -1) {
        
        $("form input[name='birth']").datepicker({
			dateFormat: 'dd-mm-yy'
		});
       

        $.validate({
            lang: 'es',
             errorMessagePosition: 'top',
		        scrollToTopOnError: true
         });
       
    }

});


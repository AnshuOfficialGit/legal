function nav() {
    var htmlView = '';
    htmlView += `
         <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
         <div class="advocate-image3" style="background-image: url('./master/inc/images/adv1.jpg');">
                        </div>
            <div class="container">
            <a class="navbar-brand " href="index-2.html">
                <span class="text-dark navText" >
                 
                Adv. Praveen Kumar Tripathi</span>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="oi oi-menu"></span> Menu
            </button>
            <div class="collapse navbar-collapse" id="ftco-nav">
                <ul class="navbar-nav ml-auto">
                <li class="nav-item active"><a href="index-2.html" class="nav-link">Home</a></li>
                <li class="nav-item"><a href="about.html" class="nav-link">About Us</a></li>
                <li class="nav-item"><a href="#pactise_areas" class="nav-link">Practice Areas</a></li>
               
                <li class="nav-item"><a href="#contact" class="nav-link">Contact</a></li>
               
                </ul>
            </div>
            </div>
        </nav>
    `;

    return htmlView;
}
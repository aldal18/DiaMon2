<!DOCTYPE html>
<html lang="da">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>App</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.3.0-alpha1/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.7.2/font/bootstrap-icons.min.css">
    <style>
        /* Custom Styles */
        body {
            background-color: #f8f9fa;
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            color: #343a40;
            line-height: 1.6;
        }
        .hero {
            background-image: url('https://images.unsplash.com/photo-1562576109-2b7e4741a2eb'); /* Placeholder image */
            background-size: cover;
            background-position: center;
            color: #ffffff; /* White text color */
            padding: 7rem 0;
            text-align: center;
        }
        .hero h1 {
            font-size: 4rem;
            margin-bottom: 1.5rem;
            font-weight: bold;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
            color: #000000; /* Black text color */
            font-family: "Roboto", sans-serif; /* Professional font */
        }
        .hero .lead {
            font-size: 1.5rem;
            margin-bottom: 3rem;
            opacity: 0.9;
            color: #000000; /* Black text color */
            font-family: "Roboto", sans-serif; /* Professional font */
        }
        .hero .btn-primary {
            font-size: 1.25rem;
            padding: 1.2rem 2.5rem;
            border-radius: 25px;
            background-color: #007bff;
            border-color: #007bff;
            transition: all 0.3s ease;
        }
        .hero .btn-primary:hover {
            background-color: #0056b3;
            border-color: #0056b3;
        }

        .hero .btn-light {
            font-size: 1.25rem;
            padding: 1.2rem 2.5rem;
            border-radius: 25px;
            background-color: #007bff;
            border-color: #007bff;
            transition: all 0.3s ease;
        }
        .hero .btn-light:hover {
            background-color: #0056b3;
            border-color: #0056b3;
        }
        .features {
            background-color: #f1f1f1; /* Light background color */
            padding: 4rem 0;
            text-align: center;
        }
        .features h2 {
            font-size: 3rem;
            margin-bottom: 3rem;
            color: #343a40;
        }
        .feature-item {
            margin-bottom: 3rem;
            padding: 0 15px;
        }
        .feature-icon {
            font-size: 4rem;
            margin-bottom: 1.5rem;
            color: #007bff;
        }
        .feature-item h3 {
            font-size: 2rem;
            margin-bottom: 1rem;
            font-weight: bold;
            color: #343a40;
        }
        .feature-item p {
            font-size: 1.25rem;
            opacity: 0.85;
            color: #6c757d;
        }
        .cta {
            background-color: #343a40; /* Dark background color */
            color: #ffffff; /* White text color */
            padding: 6rem 0;
            text-align: center;
        }
        .cta h2 {
            font-size: 3rem;
            margin-bottom: 2.5rem;
            color: #ffffff;
        }
        .cta .btn-light {
            font-size: 1.25rem;
            padding: 1.2rem 2.5rem;
            border-radius: 25px;
            background-color: #ffffff;
            color: #343a40;
            transition: all 0.3s ease;
        }
        .cta .btn-light:hover {
            background-color: #e6e6e6;
            color: #343a40;
        }
    </style>
</head>
<body>

<div class="hero">
    <h1>Din vej til velvære</h1>
    <p class="lead">Uanset hvor du er på din sundhedsrejse, har vi de ressourcer og værktøjer, du har brug for til at leve og trives med diabetes.</p>
    <div class="d-flex justify-content-center">
        <button class="btn btn-primary btn-lg me-2">
            <a href="register" style="text-decoration: none; color: white;">Registrer</a>
        </button>
        <button class="btn btn-light btn-lg">
            <a href="login" style="text-decoration: none; color: white;">Login</a>
        </button>
    </div>
</div>

<div class="features">
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <div class="feature-item">
                    <i class="bi bi-heart feature-icon"></i>
                    <h3>Overvågning af data</h3>
                    <p>Modtag tilpassede behandlingsplaner tilpasset dine behov.</p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="feature-item">
                    <i class="bi bi-book feature-icon"></i>
                    <h3>Uddannelsesressourcer</h3>
                    <p>Adgang til et væld af uddannelsesmaterialer for at forbedre din forståelse af diabetesstyring.</p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="feature-item">
                    <i class="bi bi-chat-dots feature-icon"></i>
                    <h3>24/7 Support</h3>
                    <p>Få hjælp døgnet rundt fra vores team af diabetes specialister.</p>
                </div>
            </div>
        </div>
    </div>
</div>

</body>
</html>

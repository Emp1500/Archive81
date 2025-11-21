# Capstone 3 - A Simple Blog Website

A simple and elegant blog-style website built with Node.js, Express, and EJS. This project serves as a basic template for a personal blog or a small-scale web application.

## Features

*   **Home Page:** A welcoming landing page.
*   **About Page:** A section to describe yourself or your project.
*   **Contact Page:** A page for visitors to get in touch.
*   **Blog Posts:** Separate pages for individual blog posts.
*   **Static Assets:** Serves static files like CSS and images.
*   **EJS Templating:** Uses EJS for dynamic HTML rendering.
*   **Responsive Design:** (Assuming the CSS is responsive) A clean and responsive layout that works on different devices.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   [Node.js](https://nodejs.org/) (which includes npm) must be installed on your system.

### Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/Emp1500/Archive81.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd Archive81
    ```
3.  Install the dependencies:
    ```sh
    npm install
    ```

### Running the Application

To start the server, run the following command:

```sh
npm start
```

The application will be available at `http://localhost:3000`.

## Project Structure

```
.
├── public/
│   ├── css/
│   └── images/
├── views/
│   ├── partials/
│   ├── about.ejs
│   ├── contact.ejs
│   ├── index.ejs
│   └── ... (other pages)
├── index.js        # Main application file
├── package.json    # Project dependencies and scripts
└── README.md
```

*   `public/`: Contains all static files (CSS, images, etc.).
*   `views/`: Contains the EJS templates for the web pages.
    *   `partials/`: Contains reusable parts of the templates, like the header and footer.
*   `index.js`: The main entry point of the application, where the Express server is configured and started.

## Technologies Used

*   [Node.js](https://nodejs.org/) - JavaScript runtime environment
*   [Express.js](https://expressjs.com/) - Web framework for Node.js
*   [EJS](https://ejs.co/) - Embedded JavaScript templating

## Deployment

This project is ready to be deployed on platforms like [Vercel](https://vercel.com/) or [Heroku](https://www.heroku.com/). The `start` script in `package.json` is configured for this purpose, and the application will use the port provided by the hosting environment.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

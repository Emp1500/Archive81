# Capstone 3 - A Simple Blog Website

A simple and elegant blog-style website designed to showcase content in a clean and organized manner. Built with Node.js, Express, and EJS, this project provides a robust foundation for personal blogs, portfolios, or small content-driven websites. It emphasizes ease of use and a straightforward development experience.

## Features

This project comes with a set of core features designed for a functional and user-friendly blog:

*   **Home Page:** A welcoming landing page that can display recent posts or a general introduction to the blog.
*   **About Page:** A dedicated section to describe the author, the project's mission, or any relevant background information.
*   **Contact Page:** Provides a simple way for visitors to get in touch, typically including a contact form or relevant contact details.
*   **Blog Posts:** Individual, dedicated pages for each blog entry, allowing for detailed content presentation.
*   **Static Assets:** Efficiently serves static files such as stylesheets (CSS), JavaScript files, and images, ensuring a fast loading experience.
*   **EJS Templating:** Leverages Embedded JavaScript (EJS) as the templating engine for dynamic HTML rendering, making it easy to inject data into views and reuse UI components.
*   **Responsive Design:** (Assuming the CSS is responsive) Features a clean and responsive layout, ensuring the website looks great and functions well across various devices and screen sizes.

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

*   `public/`: Contains all static files (CSS, images, etc.) that are directly served to the client's browser.
*   `views/`: Contains the EJS templates for the web pages, defining the structure and content of each route.
    *   `partials/`: Contains reusable parts of the templates, like the header and footer, promoting modularity and consistency.
*   `index.js`: The main entry point of the application. It sets up the Express server, defines routes, and configures middleware, acting as the central hub for the application's logic.

## Technologies Used

*   [Node.js](https://nodejs.org/) - JavaScript runtime environment
*   [Express.js](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
*   [EJS](https://ejs.co/) - Embedded JavaScript templating for generating HTML markup with plain JavaScript

## Deployment

This project is configured for easy deployment on platforms like [Vercel](https://vercel.com/) or [Heroku](https://www.heroku.com/). With a `start` script defined in `package.json`, these platforms can automatically detect and run the application. Continuous deployment can be set up to automatically deploy new changes pushed to your Git repository.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

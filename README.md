# Software Requirements document 

## Links to deployed apps and git repositories
	•	Deployed on Hosting
	  ⁃	byrondevin.com
	•	Git repository
	  ⁃	https://github.com/byrondevin/developer-portfolio.git

## System Architecture  
	•	App’s web stack
	  ⁃	React
	•	Architecture choice. 
	  ⁃	Deployed on Hostinger
	  ⁃	Create react app
	    ⁃	Want to make use of the dynamic display that changes with user interactions when state values are updated
	•	Styling tools 
	  ⁃	Custom css, bootstrap
	  ⁃	Custom css
	    ⁃	Full control 
	    ⁃	Reliable
	    ⁃	Fast load speeds
	  ⁃	Bootstrap
	    ⁃	Convenience
	    ⁃	Responsive
	•	Reused architectural components that will be reused
	  ⁃	Navbar
	  ⁃	Education components in the History section
	  ⁃	Work experience components in the History section

## System Requirements  
	•	How the application will work
	  ⁃	Web development portfolio website for Byron Devin
	    ⁃	No e-commerce capabilities
	    ⁃	Informational site about Byron Devin and his web development skills and experience
	    ⁃	Contact form
	•	Users
	  ⁃	Byron’d potential employers and clients
	•	Traffic sources
	  ⁃	Organic Social media (IG & FB)
	  ⁃	Direct traffic
	  ⁃	Google
	    ⁃	Name searches (no SEO campaign targeting other keywords) 
	•	Site uses
	  ⁃	Informational website informing users about Byron’s services
	  ⁃	Ability to contact the owner through contact form or linked social accounts
	•	System Requirements
	  ⁃	Functional Requirements
	    ⁃	Direct user to appropriate skill or service from homepage
	    ⁃	View education and work experince
	    ⁃	Display previous projects
	  ⁃	Non-Functional Requirements
	    ⁃	Usability
	      ⁃	User-interface
	        ⁃	Responsive (Mobile first)
	        ⁃	Intuitive to the user
	        ⁃	User friendly
	      ⁃	Documentation
	        ⁃	The code will include detailed comments that explain the app.
	        ⁃	A readme file with additional information will be stored in the project’s root folder
	    ⁃	Reliability
	      ⁃	Server running 24/7/365
	      ⁃ Daily backups provided by host (Hostinger)
	        ⁃	Users can revert back to previous version of site using the backups
	    ⁃	Performance
	      ⁃	Google PageSpeed Insights score of over 80 on all pages
	    ⁃	Security
	       ⁃	Helmet security
	    ⁃	Design constraints
	       ⁃ Responsive design (Mobile first)
	       ⁃ Intuitive UI (User friendly)
	       ⁃ Funnel customers towards required information/the product they are interested in
      ⁃ Implementation requirements
	      ⁃	Programming Languages and tools
	        ⁃	React 
	        ⁃	Jest Tests
	        ⁃	Bootstrap
	    ⁃	Interface requirements
	      ⁃	User interacts with database through the frontend (react), which sends requests to the backend (Express). 
	      ⁃	The express backend then communicates with the Database (MongoDB) before responding to the request originally initiated by the user on the frontend.
	    ⁃	Physical Requirements
	      ⁃	Host servers (Hostinger)
	      ⁃	User’s device must be connected to a stable internet connection 
	    ⁃	Supportability Requirements
	      ⁃	How the system is run
	        ⁃	The software runs on the browser
	        ⁃	The software must be able to run smoothly on mainstream browsers and any modern desktop or mobile device released in the last 5 years
	      ⁃	How the system is monitored and updated
	        ⁃	JEST testing will notify the development team of issues.
	        ⁃	Otherwise, monthly manual audits check the functioning of the website. This is included in the website management package.
	    ⁃	Testing the app
	      ⁃	Jest snapshot tests used for frontend testing 
	      ⁃	How to run the test: Run the command “npm test” in terminal from  project folder 


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

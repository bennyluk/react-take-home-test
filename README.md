# Parallel Domain Front End Engineering Challenge

Welcome candidate and thank you for taking the time to complete the Parallel Domain take-home challenge for our frontend engineer position.

This should take around 4-6 hours. Once you have completed your solution, please reply with a link to a github repository and the website where your application has been deployed. In case the repository is private, please grant access by adding the github user `pd-recruiting-frontend` as a collaborator.

The goal of this challenge is to rebuild the Parallel Domain [jobs](https://paralleldomain.com/join-us) page. Please clone this repository and submit it once you are finished.

Here are the rules of this challenge... you must:

1.  Build an application that displays a list of open job positions - grouped by teams (Product engineering, Go-to-market, etc).
2.  Use the React `useEffect` hook to fetch the jobs data from the Lever API, and save it to state by using the React `useState` hook. You can access all job postings via GET request to `https://api.lever.co/v0/postings/paralleldomain?mode=json`.
3.  Display a loading state while the data is being fetched. You can use the [CircularProgress](https://mui.com/components/progress/#circular) component.
4.  Add [select](https://mui.com/components/selects/#main-content) fields for location, teams and work type and store the active values by using the React `useState` hook. The dropdown options should be populated dynamically based on the available jobs. Once the user selects one or multiple options, the visible job postings should be filtered accordingly.
5.  Add a banner component to the top of the page. You can access the image here `src/images/banner.jpeg`.
6.  Make the layout fully responsive.
7.  Follow the design language of the Parallel Domain website.

_Important:_ You don't need to develop the jobs single page in this challenge. Instead, let the apply button link directly to the Lever page (e.g. [Frontend Engineer](https://jobs.lever.co/paralleldomain/a71b87c8-b0a6-4425-bb96-91c169ca2318/apply)). Furthermore, you can ignore fonts, footer and the header menu.

## What we want to see

1.  Demonstrate use of React hooks and data management
2.  Demonstrate knowledge of component modularization
3.  Utilize CSS to create the layout of the page
4.  Create components as you feel is best suited for your solution

## Bonus points

Apply a new design to the jobs page :raised_hands:

## Styling Guidelines

We're using the [Material UI](https://mui.com/) design library behind the scenes to speed up the development process. You can apply global style overrides via the theme file `src/theme/mui` or use the [`sx` property](https://mui.com/system/the-sx-prop/#main-content) for individual components.

If you are more familiar with other styling methods such as CSS-in-JS libraries (emotion is installed) or CSS/SCSS stylesheets, it's totally fine to use those instead.

Good luck and if you have questions, please reach out to us at robin@paralleldomain.com

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

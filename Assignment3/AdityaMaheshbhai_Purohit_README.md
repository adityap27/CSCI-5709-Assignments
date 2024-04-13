
<!--- The following README.md sample file was adapted from https://gist.github.com/PurpleBooth/109311bb0361f32d87a2#file-readme-template-md by Gabriella Mosquera for academic use --->

<!--- You may delete any comments in this sample README.md file. If needing to use as a .txt file then simply delete all comments, edit as needed, and save as a README.txt file --->

  

# Assignment 3

  

*  *Date Created*: 01 Apr 2024

*  *Last Modification Date*: 03 Apr 2024

*  *Assignment Frontend URL (Deployed Application)*: [<https://park-flex.netlify.app>](https://park-flex.netlify.app)

*  *Assignment Backend URL (Deployed Application)*: [<https://park-flex-api.onrender.com/api>](https://park-flex-api.onrender.com/api)

*  *Git URL of Group Repo.*: [<https://git.cs.dal.ca/ketulp/csci-5709-grp-09/-/tree/main?ref_type=heads>](https://git.cs.dal.ca/ketulp/csci-5709-grp-09/-/tree/main?ref_type=heads)

* *Git URL of my Branch.*: [<https://git.cs.dal.ca/ketulp/csci-5709-grp-09/-/tree/aditya_purohit?ref_type=heads>](https://git.cs.dal.ca/ketulp/csci-5709-grp-09/-/tree/aditya_purohit?ref_type=heads)

  
  
  

## Authors

  

* [Aditya Maheshbhai Purohit](aditya.purohit@dal.ca)

  

## Completed feature and realted tasks  

**Feature:** Ratings and Reviews.

**Tasks:**

 1. View all reviews and ratings of a listing. (Can be viewed with or without login)
 2. Add a new review and rating of a listing. (Needs login)

## List of files created

 1. api\src\controllers\reviews.ts 
 2. api\src\models\Review.ts
 3. api\src\routes\reviews.ts
 4. frontend\src\ratings-and-reviews\SummaryCard\HostReviewSummaryCard.tsx
 5. frontend\src\ratings-and-reviews\SummaryCard\SpotReviewSummaryCard.tsx
 6. frontend\src\ratings-and-reviews\AddReviewModal.tsx
 7. frontend\src\ratings-and-reviews\ReviewCard.tsx
 8. frontend\src\ratings-and-reviews\ReviewsPage.tsx


## Integration Instructions
To redirect the user from your page to my review page, use the below URL format:

http://\<domain-name\>/#/listings/:listingId/reviews


To integrate this feature in the fronted, just copy the ratings-and-reviews folder from frontend/src path to the main /src path.

To add this page in the routes, add below in App.tsx
- Here, ReviewPage is the main component of my feature.
```
<Route path='/listings/:listingId/reviews' Component={ReviewsPage}></Route>
```

To add these APIs in the routes, add below in routes/index.ts
- Here, reviewRoutes is the main router of my feature, where it has 2 routes GET /reviews and POST /review.

```
router.use("/listings/:listingId", reviewRoutes);
```

Similarly, to integrate this feature in the backend, just copy the 3 files, 1 each from model, controller and routes, to the main /src path in /api.

The path of the 2 APIs are:

GET http://<domain>/api/listings/:listingId/reviews - to get all reviews of a listing.

POST http://<domain>/api/listings/:listingId/review - to add a review for a listing.

## How to test my feature.
  
Task-1: View all ratings and reviews.

    Test-1: Open any listing and click on reviews url (2 Reviews) under Owner Name, a Page will open will 2 reviews. You can use sort and filter options.

    Test-2: Open any listing and click on reviews url (0 Reviews) under Owner Name, a Page will open will 0 reviews and a message to show no reviews. You can't use sort and filter options.

    eg: https://park-flex.netlify.app/#/listings/660df7a89ebf2820585143b2/reviews


Task-2: Add a rating and review.

    Test-1: Open any reviews page without login. The add review button will be disabled.

    eg: https://park-flex.netlify.app/#/listings/660df7a89ebf2820585143b2/reviews

    Test-2: Open any reviews page with login. The add review button will be enabled. Click on that and a form will open, select rating and review as both are mandatory and click submit.

    Note:
    - Owners can't review own booking.
    - User can review only once per listing.
    - User needs a previous booking with that listing, inorder to review.
    - rating and review both are mandatory field in form.


## Getting Started

  

### Prerequisites

  

To have a local copy of this up and running on your local machine, you will first need to install the following software / libraries / plug-ins

  

```

npm (Comes with node.js installation)

Frontend Dependencies:
"dependencies": {

"@emotion/react": "^11.11.4",

"@emotion/styled": "^11.11.5",

"@heroicons/react": "^2.1.3",

"@mui/material": "^5.15.14",

"@stripe/react-stripe-js": "^2.6.2",

"@stripe/stripe-js": "^3.1.0",

"animate.css": "^4.1.1",

"axios": "^1.6.7",

"bootstrap": "^5.3.2",

"buffer": "^6.0.3",

"dayjs": "^1.11.10",

"leaflet": "^1.9.4",

"react": "^18.2.0",

"react-bootstrap": "^2.10.0",

"react-bootstrap-icons": "^1.11.3",

"react-calendar": "^4.8.0",

"react-dom": "^18.2.0",

"react-icons": "^5.0.1",

"react-leaflet": "^4.2.1",

"react-loader-spinner": "^6.1.6",

"react-router-dom": "^6.3.0",

"react-scripts": "5.0.1",

"react-star-ratings": "^2.3.0",

"react-toastify": "^10.0.4",

"sweetalert2": "^11.10.6",

"typescript": "^4.9.5",

"web-vitals": "^2.1.4",

"zustand": "^4.5.2"

}

Backend Dependencies:

"dependencies": {

"bcrypt": "^5.1.1",

"cors": "^2.8.5",

"dotenv": "^16.4.5",

"express": "^4.18.3",

"jsonwebtoken": "^9.0.2",

"mongoose": "^8.2.2",

"multer": "^1.4.5-lts.1",

"nodemailer": "^6.9.13",

"stripe": "^14.23.0"

}

```

  

See the following section for detailed step-by-step instructions on how to install this software / libraries / plug-ins

  

### Installing

  

#### Install Node.js (to use npm)

  

1. Goto https://nodejs.org/en/download and download the LTS installer as per your OS.

2. Run the installer.

3. Accept License Agreement

4. Choose Installation path.

5. Keep the default installation settings and click next.

6. Skip the optional installation window and click next and click install.

7. To check the installation, run the below commands.

  

```
node -v
```

Sample output: v20.11.0

```
npm -v
```

Sample output: 10.2.4

  
#### Install concurrently for easy installtion and startup

```
npm install -g concurrently
```

#### Install all libraries (Frontend + Backend)

Goto top level folder of the project ("/"). Run the below command.
This will install dependencies of both React and Node.js apps.

```
npm install
```

Sample output: added 1565 packages, changed 69 packages, and audited 1635 packages in 2m
Done in 3m 34.4s

#### Start Frontend and Backend

Goto top level folder of the project ("/"). Run the below command.
This will start both React and Node.js apps.

```
npm start
```
 

## Deployment

  
**Frontend:**

Link the GitHub/GitLab repository with [Netlify](https://app.netlify.com/).

Then, use the below site configurations:

* Base directory: `/frontend/`

* Build command: `npm run build`

* Publish directory: `/frontend/build`

  
**Backend:**

Link the GitHub/GitLab repository with [OnRender](https://app.netlify.com/).

Then, use the below site configurations:
* Base directory: `/api/`

* Build command: `npm install && npm run build`

* Start Command: `node index.js`

## Built With

  

<!--- Provide a list of the frameworks used to build this application, your list should include the name of the framework used, the url where the framework is available for download and what the framework was used for, see the example below --->

  

* [React](https://react.dev/) - The Frontend Library

* [Create React App](https://create-react-app.dev/) - Tool to generate boilerplate code and structure of a React App

* [npm](https://www.npmjs.com/) - Dependency management

* [Node](https://www.npmjs.com/) - JavaScript runtime environment

* [Express](https://www.npmjs.com/) - web framework for [Node.js](https://nodejs.org/en/)

* [MongoDB](https://www.mongodb.com/) - NoSQL Database

* [Mongoose](https://mongoosejs.com/) - Node. js-based Object Data Modeling (ODM) library for MongoDB
  
  

## Sources Used

### frontend\src\ratings-and-reviews\ReviewCard.tsx

  

*Lines 25 - 66*

  

```

    <div className="block max-w-4xl m-3 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-50 ">
      <div className="flex items-center mb-4">
        <img
          className="w-10 h-10 me-4 rounded-full object-cover ring-2"
          src={
            review.user.profilePic
              ? require(`../assets/images/${review.user.profilePic}`)
              : require(`../assets/images/default-user-pic.png`)
          }
          alt=""
        />
        <div className="font-medium">
          <p>
            {`${review.user.firstName} ${review.user.lastName} `}
            <span className="block text-sm text-gray-500">
              Booked this spot for {review.durationInDays || 0} days
            </span>
          </p>
        </div>
      </div>
      <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
        <StarRatings
          rating={review.rating}
          starRatedColor="rgb(250, 175, 0)"
          numberOfStars={5}
          name="rating"
          starDimension="24px"
          starSpacing="2px"
        />
      </div>
      <footer className="mb-5 text-sm text-gray-500">
        <p>
          Reviewed on{" "}
          {new Date(review.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </footer>
      <p className="mb-2 text-gray-500 ">{review.description}</p>
    </div>

```

  

The code above was created by adapting the code in [Flowbite - Rating Comment](https://flowbite.com/docs/components/rating/#rating-comment) as shown below:

  

```
<article>

<div class="flex items-center mb-4">

<img class="w-10 h-10 me-4 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="">

<div class="font-medium dark:text-white">

<p>Jese Leos <time datetime="2014-08-16 19:00" class="block text-sm text-gray-500 dark:text-gray-400">Joined on August 2014</time></p>

</div>

</div>

<div class="flex items-center mb-1 space-x-1 rtl:space-x-reverse">

<svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">

<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>

</svg>

<svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">

<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>

</svg>

<svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">

<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>

</svg>

<svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">

<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>

</svg>

<svg class="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">

<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>

</svg>

<h3 class="ms-2 text-sm font-semibold text-gray-900 dark:text-white">Thinking to buy another one!</h3>

</div>

<footer class="mb-5 text-sm text-gray-500 dark:text-gray-400"><p>Reviewed in the United Kingdom on <time datetime="2017-03-03 19:00">March 3, 2017</time></p></footer>

<p class="mb-2 text-gray-500 dark:text-gray-400">This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.</p>

<p class="mb-3 text-gray-500 dark:text-gray-400">It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.</p>

<a href="#" class="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Read more</a>

<aside>

<p class="mt-1 text-xs text-gray-500 dark:text-gray-400">19 people found this helpful</p>

<div class="flex items-center mt-3">

<a href="#" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Helpful</a>

<a href="#" class="ps-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 border-gray-200 ms-4 border-s md:mb-0 dark:border-gray-600">Report abuse</a>

</div>

</aside>

</article>

  
  

```

  
<!---How--->
-  The code in [Flowbite - Rating Comment](https://flowbite.com/docs/components/rating/#rating-comment) was implemented by properly reading the original source and understanding the html tags and tailwind css classes being used. Then I have modified the code as per the requirements of my assignment task.

  
<!---Why--->
-  [Flowbite - Rating Comment](https://flowbite.com/docs/components/rating/#rating-comment)'s Code was used because it provided various options to implement the same feature and thus gave me ideas for my task. Also, it was a good starting point for me to experiement and try my own ideas on it. It helped me to understand some best practicies being followed in the industry which I could learn and create my feature with better efficiency.

  
<!---How--->
-  [Flowbite - Rating Comment](https://flowbite.com/docs/components/rating/#rating-comment)'s Code was modified by converting html to jsx so that I can use it in React. I also added new secions, changed the alignment, colours, texts, paddings and margins to design as per my assignment needs.


### frontend\src\ratings-and-reviews\AddReviewModal.tsx

*Lines 46 - 75*

```
        axios
      .post(
        `/listings/${listingId}/review`,
        {
          rating: rating,
          description: review,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        toast.success(response.data.message);
        setIsModalOpen(false);
        onReviewAdded(); // Re-render reviews to show new review.
      })
      .catch((error) => {
        toast.error(
          error.response?.data?.error ||
            error.response?.data ||
            "Something went wrong."
        );
      })
      .finally(() => {
        // Reset loading state
        setIsLoading(false);
      });

```

The code above was created by adapting the code in [Axios Readme - Performing a POST request](https://github.com/axios/axios?tab=readme-ov-file#example) as shown below: 

```
axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```
<!---How--->
-  The code in [Axios Readme - Performing a POST request](https://github.com/axios/axios?tab=readme-ov-file#example) was implemented by properly reading the original source and understanding the logic. Then I have modified the code as per the requirements of my assignment task.

<!---Why--->
- [Axios Readme - Performing a POST request](https://github.com/axios/axios?tab=readme-ov-file#example)'s Code was used because it provided an ideal way to use the axios library for sending requests to a REST API.

<!---How--->
-  [Axios Readme - Performing a POST request](https://github.com/axios/axios?tab=readme-ov-file#example)'s Code was modified by changing the request url, request data, success handling part with toast, error handling part with toast and setting loader.

### frontend\src\ratings-and-reviews\ReviewsPage.tsx

*Lines 31 - 40*

```
    axios
      .get(`/listings/${listingId}/reviews`)
      .then((response) => {
        setReviewsData(response.data);
        setLoading({ isLoading: false, success: true });
      })
      .catch((error) => {
        toast.error(error.response?.data?.error || "Something went wrong.");
        setLoading({ isLoading: false, success: false });
      });

```

The code above was created by adapting the code in [Axios Readme - Example - GET](https://github.com/axios/axios?tab=readme-ov-file#example) as shown below: 

```
// Make a request for a user with a given ID
axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
```
<!---How--->
-  The code in [Axios Readme - Example - GET](https://github.com/axios/axios?tab=readme-ov-file#example) was implemented by properly reading the original source and understanding the logic. Then I have modified the code as per the requirements of my assignment task.

<!---Why--->
-  [Axios Readme - Example - GET](https://github.com/axios/axios?tab=readme-ov-file#example)'s Code was used because it provided an ideal way to use the axios library for sending requests to a REST API.

<!---How--->
-  [Axios Readme - Example - GET](https://github.com/axios/axios?tab=readme-ov-file#example)'s Code was modified by changing the request url, removing query params, success handling part with setting reviews and 'loading' state and error handling part with setting the toast error and 'loading' state. I also removed the finally part, as it was not needed in my case.


## Acknowledgments

  
* I would like to express my gratitude to the creators and developers of the above sources for gving lots of ideas and providing best practices for a specific functionality. This has really helped me to develop things efficiently.

  

* I would like to mention Amazon.ca for my inspiration behind my rating and review page ideas.

  

* I would also like to mention below source for proving me good image sources for my webpage:

    * https://freesvg.org/users-profile-icon

    * https://freerangestock.com/photos/119589/business-man-profile-vector.html

**References:**

[1]	“Node.Js — download,” Nodejs.org. [Online]. Available: https://nodejs.org/en/download. [Accessed: 03-Apr-2024].

[2]	  “React,” React.dev. [Online]. Available: https://react.dev/. [Accessed: 03-Apr-2024].

[3]	“Netlify app,” Netlify.com. [Online]. Available: https://app.netlify.com/. [Accessed: 03-Apr-2024].

[4]	“Express - Node.js web application framework,” Expressjs.com. [Online]. Available: https://expressjs.com. [Accessed: 03-Apr-2024].

[5]	“Create react app,” Create-react-app.dev. [Online]. Available: https://create-react-app.dev/. [Accessed: 03-Apr-2024].

[6]	“Npm: React-router-dom,” npm. [Online]. Available: https://www.npmjs.com/package/react-router-dom. [Accessed: 03-Apr-2024].

[7]	“Npm: React-toastify,” npm. [Online]. Available: https://www.npmjs.com/package/react-toastify. [Accessed: 03-Apr-2024].

[8]	“Rapidly build modern websites without ever leaving your HTML,” Tailwindcss.com. [Online]. Available: https://tailwindcss.com. [Accessed: 03-Apr-2024].

[9]	“Npm: Typescript,” npm. [Online]. Available: https://www.npmjs.com/package/typescript.[Accessed: 03-Apr-2024].

[10]	“MongoDB: The developer data platform,” MongoDB. [Online]. Available: https://www.mongodb.com. [Accessed: 03-Apr-2024].

[11] “Mongoose,” Mongoosejs.com. [Online]. Available: https://mongoosejs.com. [Accessed: 03-Apr-2024].


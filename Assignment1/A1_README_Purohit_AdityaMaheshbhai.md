<!--- The following README.md sample file was adapted from https://gist.github.com/PurpleBooth/109311bb0361f32d87a2#file-readme-template-md by Gabriella Mosquera for academic use ---> 
<!--- You may delete any comments in this sample README.md file. If needing to use as a .txt file then simply delete all comments, edit as needed, and save as a README.txt file --->

# Assignment 1

* *Date Created*: 04 Feb 2024
* *Last Modification Date*: 06 Feb 2024
* *Assignment URL*: [<https://aditya-purohit-csci-5709-web-a1.netlify.app/>](https://aditya-purohit-csci-5709-web-a1.netlify.app/)
* *Git URL*: [<https://git.cs.dal.ca/apurohit/csci-5709-assignments/-/tree/main/Assignment1?ref_type=heads>](https://git.cs.dal.ca/apurohit/csci-5709-assignments/-/tree/main/Assignment1?ref_type=heads)



## Authors

* [Aditya Maheshbhai Purohit](aditya.purohit@dal.ca)



## Getting Started

### Prerequisites

To have a local copy of this lab up and running on your local machine, you will first need to install the following software / libraries / plug-ins

```
npm (Comes with node.js installation)

react: "^18.2.0",
react-dom: "^18.2.0",
react-icons: "^5.0.1",
react-scripts: "5.0.1",
react-star-ratings: "^2.3.0",
typescript: "^4.9.5",
web-vitals: "^2.1.4"
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

#### Install React and related libraries
```
npm install
```
Sample output: added 1552 packages, and audited 1553 packages in 43s

## Deployment

Link the GitHub/GitLab repository with [Netlify](https://app.netlify.com/).
Then, use the below site configurations:

* Base directory: `/Assignment1/ratings-and-reviews-app`
* Build command: `npm run build`
* Publish directory: `/Assignment1/ratings-and-reviews-app/build`


## Built With

<!--- Provide a list of the frameworks used to build this application, your list should include the name of the framework used, the url where the framework is available for download and what the framework was used for, see the example below --->

* [React](https://react.dev/) - The Frontend Library
* [Create React App](https://create-react-app.dev/) - Tool to generate boilerplate code and structure of a React App
* [npm](https://www.npmjs.com/) - Dependency management


## Sources Used

### src/components/NavBar.tsx

*Lines 07 - 142*

```
<nav className="bg-sky-700">
      <div className="mx-auto max-w-screen px-1 sm:px-4">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setMobileNavActive(!mobileNavActive)}
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              {/*
              Icon when menu is closed.

              Menu open: "hidden", Menu closed: "block"
            */}
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              {/*
              Icon when menu is open.

              Menu open: "block", Menu closed: "hidden"
            */}
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="https://upload.wikimedia.org/wikipedia/commons/5/57/Electric_car_icon.png"
                alt="ParkFlex"
              />
              <div className="text-white px-3 py-2 font-semibold text-2xl">
                ParkFlex
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-white hover:bg-white hover:text-sky-900 rounded-md px-3 py-2 text-sm font-medium"
                >
                  Blogs
                </a>
                <a
                  href="#"
                  className="text-white hover:bg-white hover:text-sky-900 rounded-md px-3 py-2 text-sm font-medium"
                >
                  Gift Cards
                </a>
                <a
                  href="#"
                  className="text-white hover:bg-white hover:text-sky-900 rounded-md px-3 py-2 text-sm font-medium"
                >
                  Bookings
                </a>
                <div className="relative ml-3">
                  <button>
                    <img
                      className="h-8 w-8 rounded-full object-cover"
                      src={require("../assets/images/men-profile.jpg")}
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu, show/hide based on menu state. */}
      <div
        className={mobileNavActive ? "block sm:hidden" : "hidden sm:hidden"}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pb-3 pt-2">
          {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
          <a
            href="#"
            className="text-white hover:bg-white hover:text-sky-900 block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page"
          >
            Blogs
          </a>
          <a
            href="#"
            className="text-white hover:bg-white hover:text-sky-900 block rounded-md px-3 py-2 text-base font-medium"
          >
            Gift Cards
          </a>
          <a
            href="#"
            className="text-white hover:bg-white hover:text-sky-900 block rounded-md px-3 py-2 text-base font-medium"
          >
            Bookings
          </a>
          <a
            href="#"
            className="text-white hover:bg-white hover:text-sky-900 block rounded-md px-3 py-2 text-base font-medium"
          >
            Profile
          </a>
        </div>
      </div>
    </nav>
```

The code above was created by adapting the code in [Navbars - Official Tailwind CSS UI Components: Simple dark with menu button on left
](https://tailwindui.com/components/application-ui/navigation/navbars) as shown below: 

```
<nav class="bg-gray-800">
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div class="relative flex h-16 items-center justify-between">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <!-- Mobile menu button-->
        <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span class="absolute -inset-0.5"></span>
          <span class="sr-only">Open main menu</span>
          <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          -->
          <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          -->
          <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex flex-shrink-0 items-center">
          <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company">
        </div>
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <a href="#" class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Dashboard</a>
            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Team</a>
            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</a>
            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Calendar</a>
          </div>
        </div>
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <button type="button" class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <span class="absolute -inset-1.5"></span>
          <span class="sr-only">View notifications</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
          </svg>
        </button>

        <!-- Profile dropdown -->
        <div class="relative ml-3">
          <div>
            <button type="button" class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span class="absolute -inset-1.5"></span>
              <span class="sr-only">Open user menu</span>
              <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
            </button>
          </div>

          <!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          -->
          <div class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
            <!-- Active: "bg-gray-100", Not Active: "" -->
            <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile menu, show/hide based on menu state. -->
  <div class="sm:hidden" id="mobile-menu">
    <div class="space-y-1 px-2 pb-3 pt-2">
      <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
      <a href="#" class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
    </div>
  </div>
</nav>


```

- <!---How---> The code in [Navbars - Official Tailwind CSS UI Components: Simple dark with menu button on left](https://tailwindui.com/components/application-ui/navigation/navbars) was implemented by properly reading the original source and understanding the html tags and tailwind css classes being used. Then I have modified the code as per the requirements of my assignment task.


- <!---Why---> [Navbars - Official Tailwind CSS UI Components: Simple dark with menu button on left](https://tailwindui.com/components/application-ui/navigation/navbars)'s Code was used because it provided various options to implement the same feature and thus gave me ideas for my task. Also, it was a good starting point for me to experiement and try my own ideas on it. It helped me to understand some best practicies being followed in the industry which I could learn and create my feature with better efficiency.

- <!---How---> [Navbars - Official Tailwind CSS UI Components: Simple dark with menu button on left](https://tailwindui.com/components/application-ui/navigation/navbars)'s Code was modified by converting html to jsx so that I can use it in React. Moreover, I added states to use the navbar properly for mobile devices. I also changed the alignment, colours, texts, paddings and margins to design as per my assignment needs.


### src/components/Footer.tsx

*Lines 04 - 18*

```
    <footer className="bg-sky-700 rounded-lg shadow mt-2">
      <div className="w-full mx-auto max-w-screen p-4 flex flex-col md:flex-row items-center justify-between">
        <span className="text-sm text-white sm:text-center ">
          © 2024{" "}
          <a href="#" className="hover:underline">
            ParkFlex™
          </a>
          . All Rights Reserved.
        </span>

        <a href="#" className="hover:underline text-sm text-white">
          Help Center
        </a>
      </div>
    </footer>

```

The code above was created by adapting the code in [Flowbite - Default Footer](https://flowbite.com/docs/components/footer/#default-footer) as shown below: 

```


    <footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">About</a>
        </li>
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
        </li>
        <li>
            <a href="#" class="hover:underline">Contact</a>
        </li>
    </ul>
    </div>
</footer>


```

- <!---How---> The code in [Flowbite - Default Footer](https://flowbite.com/docs/components/footer/#default-footer) was implemented by properly reading the original source and understanding the html tags and tailwind css classes being used. Then I have modified the code as per the requirements of my assignment task.

- <!---Why---> [Flowbite - Default Footer](<https://flowbite.com/docs/components/footer/#default-footer>)'s Code was used because it provided various options to implement the same feature and thus gave me ideas for my task. Also, it was a good starting point for me to experiement and try my own ideas on it. It helped me to understand some best practicies being followed in the industry which I could learn and create my feature with better efficiency.

- <!---How---> [Flowbite - Default Footer](https://flowbite.com/docs/components/footer/#default-footer)'s Code was modified by converting html to jsx so that I can use it in React. I also changed the alignment, colours, texts, paddings and margins to design as per my assignment needs.

### src/components/ReviewCard.tsx

*Lines 07 - 39*

```
    <div className="block max-w-4xl m-3 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-50 ">
      <div className="flex items-center mb-4">
        <img
          className="w-10 h-10 me-4 rounded-full object-cover ring-2"
          src={require(`../assets/images/${review.user.profilePic}`)}
          alt=""
        />
        <div className="font-medium">
          <p>
            {review.user.name + " "}
            <span className="block text-sm text-gray-500">
              Booked this spot for {review.bookingPeriod}
            </span>
          </p>
        </div>
      </div>
      <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
        <StarRatings
          rating={review.stars}
          starRatedColor="rgb(250, 175, 0)"
          numberOfStars={5}
          name="rating"
          starDimension="24px"
          starSpacing="2px"
        />
      </div>
      <footer className="mb-5 text-sm text-gray-500">
        <p>
          Reviewed on {review.date}
        </p>
      </footer>
      <p className="mb-2 text-gray-500 ">{review.text}</p>
    </div>

```

The code above was created by adapting the code in [Flowbite - Rating Comment](https://flowbite.com/docs/components/rating/#rating-comment) as shown below: 

```
    <div className="block max-w-4xl m-3 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-50 ">
      <div className="flex items-center mb-4">
        <img
          className="w-10 h-10 me-4 rounded-full object-cover ring-2"
          src={require(`../assets/images/${review.user.profilePic}`)}
          alt=""
        />
        <div className="font-medium">
          <p>
            {review.user.name + " "}
            <span className="block text-sm text-gray-500">
              Booked this spot for {review.bookingPeriod}
            </span>
          </p>
        </div>
      </div>
      <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
        <StarRatings
          rating={review.stars}
          starRatedColor="rgb(250, 175, 0)"
          numberOfStars={5}
          name="rating"
          starDimension="24px"
          starSpacing="2px"
        />
      </div>
      <footer className="mb-5 text-sm text-gray-500">
        <p>
          Reviewed on {review.date}
        </p>
      </footer>
      <p className="mb-2 text-gray-500 ">{review.text}</p>
    </div>

```

- <!---How---> The code in [Flowbite - Rating Comment](https://flowbite.com/docs/components/rating/#rating-comment) was implemented by properly reading the original source and understanding the html tags and tailwind css classes being used. Then I have modified the code as per the requirements of my assignment task.

- <!---Why---> [Flowbite - Rating Comment](https://flowbite.com/docs/components/rating/#rating-comment)'s Code was used because it provided various options to implement the same feature and thus gave me ideas for my task. Also, it was a good starting point for me to experiement and try my own ideas on it. It helped me to understand some best practicies being followed in the industry which I could learn and create my feature with better efficiency.

- <!---How---> [Flowbite - Rating Comment](https://flowbite.com/docs/components/rating/#rating-comment)'s Code was modified by converting html to jsx so that I can use it in React. I also added new secions, changed the alignment, colours, texts, paddings and margins to design as per my assignment needs.


## Acknowledgments

* I would like to express my gratitude to the creators and developers of the above sources for gving lots of ideas and providing best pracicies for a specific functionality. This has really helped me to develop things efficiently.

* I would like to mention Amazon.ca for my inspiration behind my rating and review page ideas.

* I would also like to mention below source for proving me good image sources for my webpage:
    * https://commons.wikimedia.org/wiki/File:Electric_car_icon.png
    * https://pxhere.com/en/photo/1036410
    * https://pxhere.com/en/photo/1107799
    * https://www.pickpik.com/smile-profile-face-male-portrait-young-141495
    * https://pxhere.com/en/photo/510762
    * https://commons.wikimedia.org/wiki/File:220109_Everglow_Yiren_Return_of_the_Girl_Fansign.png

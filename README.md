This is a simple social media app built using React Native. The app demonstrates core mobile development principles such as managing user data, adding posts, editing user profiles, and rendering dynamic content. The app consists of four main screens:

HomeScreen - Displays posts and allows users to interact with them (e.g., liking and commenting).
ProfileScreen - Shows the user's profile details and uploaded posts.
AddScreen - Allows users to add new posts to the app.
EditProfileScreen - Lets users edit their profile details, such as the name, bio, and profile picture.
Installation
To get started, follow these steps:

Clone the repository:

Install dependencies:
npm install

Run the app:

npx react-native run-android # for Android
npx react-native run-ios # for iOS

Screens Overview

1. HomeScreen
   The HomeScreen displays all the posts added by users. Each post includes a profile picture, username, post images, title, and description. Users can like posts, comment on them, or share them.

Key Features:

FlatList: Used to render the posts dynamically.
Carousel: Allows users to swipe through multiple images for a post.
Like and Comment: Users can like or comment on posts.
Post Date: Displays the date when the post was created. For existing posts, the date is fixed. For new posts, the current date is shown.
Important Logic:

The toggleLike() function manages the "liked" state of posts.
The date for new posts is formatted as DD/MM/YYYY using new Date().toLocaleDateString('en-GB'). 2. ProfileScreen
The ProfileScreen displays the user's profile details, including the profile picture, username, bio, number of followers, and number of posts. It also shows a grid of uploaded posts. If a post contains more than one image, only the first image is displayed on the profile.

Key Features:

Displays a minimalistic profile page with basic user details.
Uses a grid layout to display posts uploaded by the user.
Renders the first image of each post in the grid for posts with multiple images.
Important Logic:

The ProfileScreen fetches the user's details from the PostsContext and shows their profile picture, bio, and posts.
The posts displayed are linked to the specific user. 3. AddScreen
The AddScreen allows users to create and upload a new post. The user can select multiple images for the post, add a title, and provide a description. Upon submission, the new post is added to the list of posts in the HomeScreen.

Key Features:

Allows users to upload multiple images for a post.
Users can add a title and description for each post.
The post is automatically linked to the logged-in user's profile picture and username.
Important Logic:

The addPost() function in the PostsContext adds a new post to the existing list of posts.
The current date is added to the post when it is created, and the post appears in the HomeScreen with the correct user information. 4. EditProfileScreen
The EditProfileScreen allows users to edit their profile details, such as the name, bio, and profile picture. The updated information is then reflected across the app, including in the ProfileScreen and HomeScreen for new posts.

Key Features:

Users can change their profile picture, username, and bio.
Once edited, the new profile information is applied to future posts and displayed in the profile section.
Important Logic:

The updateUser() function in the PostsContext is used to update the user's profile information.
The changes are reflected immediately in the ProfileScreen and in any new posts created after the update.
Context Management
The app uses PostsContext to manage the state of posts and user data throughout the app. Here's a brief explanation of the main context functions:

posts: Stores the array of posts.
addPost(newPost): Adds a new post to the posts array. It associates the post with the current user’s profile picture and username.
user: Stores the logged-in user's profile data, including userName, bio, and profilePic.
updateUser(updatedUser): Updates the user's profile information.

Conclusion
This app demonstrates how to build a functional social media interface using React Native. It includes key functionalities like creating posts, editing user profiles, and rendering posts in a dynamic and responsive way. The app efficiently manages state using context (PostsContext) and keeps the user experience smooth and intuitive.

Feel free to modify and extend the app to include more features such as comments, post reactions, and advanced user settings!

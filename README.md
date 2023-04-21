<div align="center">
  
<img src="https://user-images.githubusercontent.com/116925227/232105248-9d013d14-7e46-4a74-a1f5-7e61e5ccadc9.png" width="30%" height="15%" />

### LEVEL UP YOUR GAMING EXPERIENCE

# Level Up Lounge

### Built by: **[Anthony Khong](https://www.linkedin.com/in/anthonykhong956/)**

[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)

![JS badge](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Heroku badge](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)
![Tailwind badge](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![MongoDB badge](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js badge](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![React badge](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js badge](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)

  
**_Click the following link to be redirected to the live version of the code!_**

## [Level Up Lounge](https://level-up-lounge.herokuapp.com/)

### Description:

  **_Level Up Lounge_** is a Full-Stack Web Application that utilizes React, Node.js, Express.js, MongoDB, Mongoose, Tailwind Css, and JavaScript to create a fully immersive experience for users to discuss any topics within the world of gaming! Token authentication is also implemented to prevent non users from accessing a resource by requring them to provide a valid token that proves their authorization.
<br />
On this website, users are able to exchange their thoughts on current gaming trends, news, or anything they seem fit that is related to the gaming world! This social media platform allows different individuals from all around the globe to share their common passion!
<br />
Sign up now to join Level Up Lounge and start connecting with like-minded peers!

## :link: Associated Links:

Click the following links to be redirected to the planning board of the code! 
<br />
[Trello](https://trello.com/b/dz8CgLXN/level-up-lounge-user-stories)
<br />
[Whimsical](https://whimsical.com/project-3-LGxmfKn8LX6w1NzJqdiH9w)
  
</div>

## :camera_flash: Visuals and Helpful Insight (Getting Started):

### Sign Up/ Login Page

![login](https://user-images.githubusercontent.com/116925227/233503742-c691439e-e997-455a-a124-c74214942fdc.gif)

Sign up now to join our community! If already a user, simply login.

### Home Page

![homepage2](https://user-images.githubusercontent.com/116925227/233504117-09f9b0b0-338d-47f6-886a-417ea033f9a9.gif)

Find a list of suggested free-to-play games on the home page.

### Discussion Page

![blogpage](https://user-images.githubusercontent.com/116925227/233504217-bcbc0c0c-f84f-4a56-b221-4e0495f21639.gif)

Here, users are able to interact with one another.

### Create a new post!

![create post](https://user-images.githubusercontent.com/116925227/233504261-93d6a8c7-f2cf-4c6d-abec-4ed7b3db8c48.gif)

Feel free to share your thoughts with other gamers by creating a post!

### Edit a post

![editpost](https://user-images.githubusercontent.com/116925227/233504816-bb3fe939-280f-4a3c-862e-430b022873ce.gif)

Is their a new update? Edit your post to keep the community up to date!

### Add :heart: and comments on a post!

![likecomment](https://user-images.githubusercontent.com/116925227/233504640-bf5f5321-ed5e-40d2-8eea-34ea9382f402.gif)

Find an interesting post? Exchange with the author and like their post to show interest!

## :computer: Technologies Used

- ![HTML badge](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
- ![CSS badge](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
- ![JS badge](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
- ![Heroku badge](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)
- ![Tailwind badge](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
- ![MongoDB badge](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
- ![Express.js badge](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
- ![React badge](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
- ![Node.js badge](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

## The Code Behind The Program:

```javascript

async function addLike(req, res) {
  try {
    const user = req.user._id;
    const post = await Post.findById(req.params.id);

    if (!post.likes.includes(user)) {
      post.likes.push(user);
      await post.save();
    }

    res.json(post);
  } catch (error) {
    res.status(500).json(error);
  }
}

```

```javascript

async function removeLike(req, res) {
  try {
    const user = req.user._id;
    const post = await Post.findById(req.params.id);

    if (post.likes.includes(user)) {
      post.likes = post.likes.filter(
        (userId) => userId.toString() !== user.toString()
      );
      await post.save();
    }

```

### These preceding code snippets displays the like functionality, a staple social media feature which allows users to express their appreciation for a post. These blocks of code specifically allows the user to add and remove their like on a specific post.

## :chart_with_upwards_trend: Looking Forward

- [ ] Implement Socket.io for real time communication between users
- [ ] Implement light/dark mode
- [ ] Make the website mobile responsive
- [ ] Add notifications to signal user when their post have been commented on or liked
- [ ] Add a user profile page

# Bloggle

## Description:
Bloggle is a platform that alllows users to upload and share unique blogs about any topic of their choice! Users can upload new blogs and comment on others.

Front end links:
[Github](https://github.com/bloggle/team-project-client)

[Front End](https://bloggle.github.io/team-project-client/)

## Project planning:
The project needed modular implementation due to feature interdependency. We planned, managed, and delegated tasks with scrum best practices.

The project was initially scoped by the team with organic wireframe and erd mapping and development of a blue print of what needed to be delivered on for each day of the available time to work on the project.

Sprints were utilized each day to ensure we hit goals and deadlines.

Version control was managed with github team repos and frequent rebases and commits. Commits are available on the project github page.

## V1 Functionality:
Users can post new blogs with title and text. Anyone can view blogs and comments.
Comments have text and email.

## Dev Diary:
### Day 1:
Back end: API development of schema, models, back end CRUD actions.

Front end: implementation of handlebars starter code for blogs and comments,
html boilerplate for user actions, simple css, basic JS for user actions.

## Day 2:
Back end: Patch requests update and streamlined, refactoring. Ownership implemented for blogs and comments.

Front End: Utilization of handlebars to create blogs and comments and populate each iteration with buttons, CSS color, styling, animations. HTML containers for
items to populate into. All crud actions for each resource linked to front end.
Hide and show actions implemented for user forms and blogs. Bootstrap utilized to cleanly present blogs.

## Day 3

Finish some stylizing points and user-facing bugs for deployment

Front end features:
Using handlebars all blogs are populated to the page with related CRUD buttons if the user has ownership when clicking the view
blogs button. Comments and related CRUD buttons are populated to individual blogs with a view comments button. Users can back out of menus with a back button and can hide items as needed.

## API Route Catalog:

### comments
| Verb    | URI Pattern           | Route Action                    |
|---------|-----------------------|---------------------------------|
| POST    | `/comments`           | `router.create(/comments)`      |
| GET     | `/comments`           | `router.index(/comments)`       |
| GET     | `/comments/:id`       | `router.show(/comments/:id)`    |
| PATCH   | `/comments/:id`       | `router.patch(/comments/:id)`   |
| DELETE  | `/comments/:id`       | `router.delete(/comments/:id)`  |


### Blog
| Verb    | URI Pattern           | Route Action      |
|---------|-----------------------|-------------------|
| POST    | `/blogs`              | `create`          |
| GET     | `/blogs`              | `blogs#index`     |
| GET     | `/blogs/:id`          | `blogs#show`      |
| PATCH   | `/blogs/:id`          | `blogs#update`    |
| DELETE  | `/blogs/:id`          | `blogs#destroy`   |

### User
| Verb   | URI Pattern            | Controller#Action             |
|--------|------------------------|-------------------------------|
| POST   | `/sign-up`             | `users.post/sign-up`          |
| POST   | `/sign-in`             | `users.post/sign-in`          |
| PATCH  | `/change-password`     | `users.patch/change-password` |
| DELETE | `/sign-out`            | `users.delete/sign-out`       |


## User Stories:
- As a unregistered user, I would like to sign up with email and password.
- As a registered user, I would like to sign in with email and password.
- As a signed in user, I would like to change password.
- As a signed in user, I would like to sign out.
- As a unregistered user, I would like to see all users blog posts.
- As a unregistered user, I would like to see comments on those blog posts.
- As a signed in user, I would to create blog posts.
- As a signed in user, I would to comment on other users' blog posts.
- As a signed in user, I would to update my blog posts and comments.
- As a signed in user, I would to delete my blog posts and comments.

## ERD:

[ERD](https://i.imgur.com/NGzSRlv.png)

### Technologies Used:
- html
- css
- javascript
- jquery
- mongoDB
- mongoose
- express API
- boootstrap
- handlebars

### Unsolved problems and Future plans:
- Future iterations should have a search feature
- Future iterations should allow a master blog container with each update being displayed within it.
- Future iterations should have a more stylized standalone view for writing new posts.

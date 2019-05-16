Description:
Bloggler is a platform that alllows users to upload and share unique blogs about any topic of their choice! Users can upload new blogs and comment on others.

Front end links:
Github: https://github.com/bloggle/team-project-client

Front End: https://bloggle.github.io/team-project-client/

Project planning:
The project needed modular implementation due to feature interdependency. We planned, managed, and delegated tasks with scrum best practices.

The project was initially scoped by the team with organic wireframe and erd mapping and development of a blue print of what needed to be delivered on for each day of the available time to work on the project.

Sprints were utilized each day to ensure we hit goals and deadlines.

Version control was managed with github team repos and frequent rebases and commits. Commits are available on the project github page.

V1 Functionality:
Users can post new blogs with title and text. Anyone can view blogs and comments.
Comments have text and email.

Dev Diary:
Day 1:
Back end: API development of schema, models, back end CRUD actions.

Front end: implementation of handlebars starter code for blogs and comments,
html boilerplate for user actions, simple css, basic JS for user actions.

Day 2:
Back end: Patch requests update and streamlined, refactoring. Ownership implemented for blogs and comments.

Back End: Utilization of handlebars to create blogs and comments and populate each iteration with buttons, CSS color, styling, animations. HTML containers for
items to populate into. All crud actions for each resource linked to front end.
Hide and show actions implemented for user forms and blogs. Bootstrap utilized to cleanly present blogs.

Back end features:
Utilized mongodb and mongoose to create a series of schema, models, controllers, and routes. Curl scrips are available for feature testing.

API Route Catalog:
Verb    URI Pattern    Route Action
POST    /blogs    create
GET    /blogs    blogs#index
GET    /blogs/:id    blogs#show
PATCH    /blogs/:id    blogs#update
DELETE    /blogs/:id    blogs#destroy


POST    /comments    create
GET    /comments    blogs#index
GET    /comments/:id    blogs#show
PATCH    /comments/:id    blogs#update
DELETE    /comments/:id    blogs#destroy

POST    /user    create
GET    /user    blogs#index
GET    /user/:id    blogs#show
PATCH    /user/:id    blogs#update
DELETE    /user/:id    blogs#destroy
PATCH    /user/:id    blogs#update


User Stories:
As a unregistered user, I would like to sign up with email and password.
As a registered user, I would like to sign in with email and password.
As a signed in user, I would like to change password.
As a signed in user, I would like to sign out.
As a unregistered user, I would like to see all users blog posts.
As a unregistered user, I would like to see comments on those blog posts.
As a signed in user, I would to create blog posts.
As a signed in user, I would to comment on other users' blog posts.
As a signed in user, I would to update my blog posts and comments.
As a signed in user, I would to delete my blog posts and comments.

Wireframe and ERD:


Technologies Used:
html
css
javascript
jquery
mongoDB
mongoose
express API
boootstrap
handlebars

Unsolved problems and Future plans:
Future iterations need a search feature
Future iterations should allow a master blog container with each update being displayed within it.
Future iterations need to have a more stylized standalone view for writing new posts.
Future iterations will allow users to stylize their blog posts.

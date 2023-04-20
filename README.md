# a99 Final Project Template Repo

**DUE:** 2023-05-05T22:00 (End of Exam Period)

General final project issues and questions: https://github.com/comp426-2022-spring/a99/issues

**NOTE: You are all each individually responsible for submitting a final self- and team-assessment in addition to your team's submission of the final project. This will be emailed to you in the last week of the semester.**

## Overview

Your team will be responsible for scoping, planning, and designing a PROTOTYPE web application or system.

The app should be fully documented, including setup instructions, full API documentation, and user instructions, as well as your planning workflow (notes, GitHub Project boards, discussions archives, etc.).

Your team will create a <= 3-minute video describing your app to present to the class about your app.
This can be a very basic walkthrough, or a description/presentation of features/use cases, or something else.
Be creative.
Think of it as an opportunity to hone your ability to pitch an idea that you have in prototype (because that is what it is).

## Deliverables

A GitHub repository in the class organization containing your code and documentation and a prototype release package.
Your project should take the form of a Node package, with all of the attendant items associated with that.
The following three script commands should work in your package:

1. `npm install` - Install dependencies for your package.
2. `npm test` - Start app, check that everything can run, and then stop app.
3. `npm run` - Command to bring up all parts of the app/system's server scripts.

Your team is responsible for incorporating the following specifications and deliverables into your final project:

1. Back-end specifications
	1. API built on whatever framework you choose. You can build an API that interacts with other APIs as well in order to integrate them.
	2. API root endpoint at `http://HOST/app/`.
	4. Create (if nonexistent) and interact with a database of users (optional) and interactions (this can be logs, even). If users do not need to login to use your app, then do not worry about a user DB. These can be separate databases for different microservices or separate tables in one database. It is up to your team's decisions.
	5. Database can be of any type you choose.
2. Front-end specifications
	1. Give users the ability to register an account, update their information, see their information somewhere, and delete their account.
	2. Interactions with the front end should be logged in a database. 
3. Database specifications
	1. User database (if relevant) - registration details (username, email address, etc.)
	2. Interaction database - details of user interactions (login history, access logs, etc.)
4. Documentation
	1. License documenation - Choose a license and include it in the repository just like we have been.
	1. README.md file with basic descriptiong, installation requirements/instructions, dependency list, run instructions.
	3. `/docs/` directory containing full documentation of every available API endpoint that you create for your app. This directory shoud also house an archive of your planning documentation. 
	2. Code comments (preferably referring to the documentation)
	3. User instructions in the interface if needed.
5. Demo video
	1. In order to get credit for this, add a row to the table in the README here and make a pull request: https://github.com/comp426-2022-fall/a99-demos/edit/main/README.md
7. Self/group evaluation (Individual group members: this is part of the final exam for the course.)

## Logistics

You have been assigned to work on a small team for the final project assignment. 

Your team will be responsible for planning the project, determining roles, and then employing a collaborative workflow to build out your project.
Different people will be interested in different parts of the project.
Not everyone has to do the same things, nor should they.

Teams have been created for you and you should have received an invitation to the team and the class GitHub organization.

### Using collaboration features on GitHub

*At the end of the project, the `README.md` in your team's repo should be relevant to your project. It is part of the documentation.*

See the `CHECKLIST.md` file with more information and some beginning steps instructions in it.

#### Documentation

As you can see above and in `CHECKLIST.md`, documentation is crucial.
Get good at it.
You'll thank me later.

##### Some documentation examples

(May be updated later)

https://open-meteo.com/en/docs#api-documentation

[Postman Generate API Documentation](https://learning.postman.com/docs/publishing-your-api/documenting-your-api/)

#### Pull requests

Your team must use the fork and pull requests feature in GitHub to manage contributions, changes, and discussions about your code and documentation.
This makes everything a lot easier and you are less likely to overwrite someone elses work, run into merge conflicts, etc. 
It is a built-in collaborative workflow.

#### Issues

Additionally, use the issues feature to manage bug-fixing and feature discussions.
It makes things easier to keep track of.
It also helps the instructional staff help you because there will be context and documentation related to your project that we can review when we meet with your team during office hours.

#### Projects tab

There is a "Projects" tab available in your team repo.
Create a project board in the class GH organization and attach it to your team. 

This is a great place to organize your work rather than relying on email, Google docs, GroupMe, etc.
This also allows us (the instructional staff) to see how your project is progressing and to help you with questions and issues because it will give us context.

### License your work

In addition to this `README.md`, you'll find a `LICENSE` file.
This is provided as a placeholder so that you may replace it with the license of your choice.

The placeholder file contains some information about choosing a license and how to include it in your repository.
Read through the links in this file and try out the decision tools to prepare for having a discussion with your team about licensing.

Make sure that the license specified in your Node `package.json` file matches that in your `LICENSE` file.

```LICENSE
You will want to change the text in this file to be the text of the license for your project.

Information about choosing a license can be found here:

[Licensing a repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository)

[Choose an open source license](https://choosealicense.com/)

[SPDX License List](https://spdx.org/licenses/)

[Browse Software Licenses and Summaries](https://tldrlegal.com/licenses/browse)

[How to choose a license for your own work](https://www.gnu.org/licenses/license-recommendations.en.html) - GNU Operating System

[Public license selector](https://ufal.github.io/public-license-selector/) - Institute of Formal and Applied Linguistics (ÚFAL), Faculty of Mathematics and Physics, Charles University
```

## Expectations

The expectations for this project is something along the lines of a working prototype.
It does not have to be beautiful, it just has to work for the most part (sort of).
And it does not have to be feature rich, it just has to do some pretty basic things (though more advanced features are a place for you to flex your skills).

I expect and encourage inter-team collaboration as well.
If there is something that your team finds useful: create a discussion in our class organization about it!

The repositories for this project will be created under the course organization as open source.
This is intentional to encourage you to share things and learn from what your peers are doing.  

Finally, be creative!

This doesn't mean that what you build has to be earth-shattering.
It can be whatever your team wants it to be.

AND it can serve as a portfolio piece if you plan accordingly.

So, BE CREATIVE, and do interesting things!

# Final Project Checklist

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

## First steps

1. Create a repository in your team using this template repo
2. Choose a license and update the LICENSE file accordingly (default is GPL-3.0-or-later). 
3. Edit this CHECKLIST.md file and use it as the main location of your technical documentation with links out to other information contained under `/docs/`.
4. Create a `/docs/` directory for more elaborate documentation of your API, planning notes, etc.
5. Make sure that all of your team members have access to the repository.
6. Create a project under the **Projects** tab. Use this to manage your planning. Create a To-do list, etc. Explore the tools available and user them to manage your project.
7. Assign team roles and include a listing of those roles in this CHECKLIST.md file or in another file under `/docs/`.
8. Then put your entire development workflow in this repository.
9. Assign ONE approver to maintain the package and merge pull requests.
10. Create **forks** to add basic structure, files, and to develop features. Be mindful to not run over each other's code.
11. Use **Pull requests** to propose changes and incorporate them into your code from various team members. 
12. Use **Issues** to identify and track bugs and also to communicate about various aspects of the project.

## Team mangement 

Plan to meet with your team ASAP.
Talk through identifying roles within your team.

Try to figure out what each of you are good at/enjoy doing and try to work out roles that incorporate that.

Some basic roles you will want to consider:

1. A review manager - someone to review pull requests and merge or reject them and manage the related discussions
2. A plan manager - someone to keep an eye on the overall plan and keep the project tab/to-do list up to date
3. A documentation manager - someone to keep the documentation in order and identify what is missing and needs to be documented
4. A release manager - someone to manage the packaging and release process for your prototype package
5. A project manager - someone keeping track of all the moving parts and make sure that everything that needs to happen is happening
5. Roles for team members to take charge or different parts of the project. Possible roles:
    1. Front end lead
    2. Back end lead
    3. Database lead
    4. Design lead
    5. Etc.

You will notice that there are more roles than people in your group.
That is because you will all be doing a hybrid job of managing a thing while working on other things.

## Next steps
1. Brainstorm (no ideas are bad) and DOCUMENT the brainstorming.
2. Refine an idea into a plan (And DOCUMENT this process)
3. Set a scope of work (what can you feasibly develop in the second half of the semester? Document this!)
4. Develop a roadmap (Create a project board to document your process)
5. Assign tasks (DOCUMENT who is doing what)
6. Start building components (COMMENT and DOCUMENT your code)
7. Test and review components before you merge them into the main branch of your project (Use the review to document this) 
8. Fork, develop features, and merge (and DOCUMENT all versions. See a theme here?)
9. Demo your project. 
10. Assemble your final documentation.
11. Clean up code and create a release.
12. Create a pull request to post a link to your project and your demo the demo repo: https://github.com/comp426-2023-spring/a99-project-demo/

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

##### Some documentation examples

(May be updated later)

https://open-meteo.com/en/docs#api-documentation

[Postman Generate API Documentation](https://learning.postman.com/docs/publishing-your-api/documenting-your-api/)

#### Pull requests

Your team must use the fork and pull requests feature in GitHub to manage contributions, changes, and discussions about your code and documentation.
This makes everything a lot easier and you are less likely to overwrite someone elses work, run into merge conflicts, etc. 
It is a built-in collaborative workflow.

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

General final project issues and questions: https://github.com/comp426-2022-spring/a99/issues

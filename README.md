[![Build Status](https://dev.azure.com/msa-devops-2020-food-finder/msa-devops/_apis/build/status/azizul-i.recipe-search-engine-NZMSA-2020?branchName=master)](https://dev.azure.com/msa-devops-2020-food-finder/msa-devops/_build/latest?definitionId=1&branchName=master)


# Food-Finder Web App MSA 2020 Phase 1
A Typescript/React Web App that displays information about food recipes.
To use the food-finder web app, simply add ingredients by typing it into the text field, and adding it to your ingredients list (these can be considered as the ingredients you have with you to prepare your next meal) The system/API will then search for recipes that contain whatever ingredients you have in your list, so that you can make delicious food with what you have in your cupboard.

To run the web app locally:
1) Make sure you have Node installed.
2) Go to the food-finder-msa-2020 directory in VSCode
3) run `npm i` in the integrated terminal
4) run `npm start` to run the web app


**DevOps 2020:**
Continous Deployment has been implemented using Azure DevOps services. 

**Build Pipeline**
The build pipeline is set to trigger a build artifact when code has been commited to the master or develop branches.
The build pipeline excludes trigger on changes to the README.md file, because it can cause unneccessary new release deployments. **EDIT** Removed, due to conflict with assignment requirements (continous deployment of commits to master branch), but the code I would have added to the YAML file is (with the appropriate indentations) :<br/>
`branches:`<br/>
&nbsp;&nbsp;` include:`<br/>
&nbsp;&nbsp;` - master`<br/>
&nbsp;&nbsp;` - develop`<br/>
&nbsp;&nbsp;`  paths:`<br/>
&nbsp;&nbsp;&nbsp;&nbsp;`   exclude:`<br/>
&nbsp;&nbsp;&nbsp;&nbsp;`   - README.md ` <br/>
Variables have been used to minimise use of repeating long commands that reference specific locations/texts.
Since we are using Node services to use npm, Node 10.x is installed.
We then check and install the required dependencies using npm install.
The code is then tested using npm run test with CI being set to true, so that Watch usage is disabled and does not halt the pipeline. This is essential for future scope when reviewing pull requests and pushing code to develop or master branches, such that regression cases are handled.
The pipeline then archives the artifact and publishes it for the Release Continous Deployment to trigger on.

**Release Pipeline**
The Continous deployment is triggered when a new built artifact is published from the build pipeline.
The applied Branch filter is the master, so that only the artifacts published from the master branch will cause the Release CD pipeline to trigger (Not develop branches, because these are still work in progress branches, not a finalized addition).
Stage 1 then uses the Azure App Service Deploy Task to deploy the release artifact to the resource and web app service on our Azure subscription.

Links to Deployed Web app:
(Free Plan)
https://msa-devops-2020-food-finder.azurewebsites.net

(Backup: Basic Plan)
https://food-finder-backup.azurewebsites.net




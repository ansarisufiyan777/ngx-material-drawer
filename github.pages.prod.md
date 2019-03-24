To deploy the Angular application to GitHub, you need to first globally install the angular-cli-ghpages:

>> npm install -g angular-cli-ghpages 

After installing ghpages, use Angular CLI to build the project. For that, run the command as shown below:

>> ng build --prod --base-href https://ansarisufiyan777.github.io/ngx-material-drawer

For the last step, run the command ngh -no-silent to publish

>> ngh --dir=dist/AngularMaterialDrawer

Changes in index.html

>> <base href="">

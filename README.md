# Axel Springer AI Landing Page

## What this project is all about

[axelspringerai.github.io](https://axelspringerai.github.io) is the landing page for the AI unit of the Axel Springer Group. It provides an overview of our open source projects across the group.

## How to contribute

### Local Development

* `npm install`
* `npm run start` will start a local dev server at http://localhost:8080

Send PULL-Requests if you want to contribute your ideas and alterations to the project. Please remember to stick to the common code conventions and make sure that your commit messages are self-explanatory.

**Important**: All changes should be made on the **develop** branch! They will then be integrated into the master branch automatically.

### Present your project on axelspringerai.github.io

If you want to present your open source project on the landing page, go to **/src/data/projects.js**, copy one of the existing projects within the file and simply alter the project-specific information. Title and project ID should be identical to the name of your GitHub project.

### Testing

There are Snaphot Tests available, run those tests using `npm run tests`.
Please remember to alter these tests if you’ve modified the structure of the page.

## License
This project is based on [axelspringer.github.io](https://axelspringer.github.io). See [LICENSE](LICENSE) for details.
Deals on Demand - Client
Getting Started
Prerequisites
node version: v18
npm version: v9
pnpm version: v8 (optional, but recommended)
Setup
Install dependencies. Two ways to do this:

pnpm install
or if you stay at root directory, you can do

pnpm run install:client
Start the development server

pnpm dev
Open http://localhost:5173 with your browser to see the result.

Code Formatting
This project uses Prettier for code formatting. You can run the formatter with the following command:

pnpm format
The configuration for Prettier is located in the .prettierrc.json file.

Linting
This project uses ESLint for linting. You can run the linter with the following command:

pnpm lint
The configuration for ESLint is located in the .eslintrc.cjs file.

Testing
This project uses Jest for testing. You can run the tests with the following command:

pnpm test
Pre-commit Hooks
This project uses Husky for pre-commit hooks. The pre-commit hooks are configured in the .husky directory of the parent directory. Since this is a monorepo including client and server both, the pre-commit hooks have to be configured in the root directory.

When you commit your changes, the hooks will automatically run the following commands: eslint --fix --> prettier --write --> jest, iff any {js,jsx,ts,tsx} files have been staged.

Requirements
Layout
copy the layout of the current client
make sure the layout is responsive
Features
Authentication
back service is under construction (not required so far, will be added later)

Home Page
show the list of all the deals
show the list of all the categories
show the advertisement on the right side
show the search input on the top
show the menu and account setting button on the top right
show the navigation bar between top header and the list of deals
navigation bar includes Top Deals and product categories
clicking Top Deals will redirect to the home page
clicking one category will redirect to the category page
clicking View deals will redirect to the product page
Product Page
show the product details, including the title, description, price, images etc.
clicking Buy Now button will redirect to the product page on the original website
Search Page
show the list of all the deals that match the search query (debounced)
searching
if clicking one option from the search result, it will redirect to the product page
if not selecting any option, instead clicking the Search button, it will redirect to the search page with all products that match the search query

# Web Dev Blog

This is a framework/template to bootstrap your personal or professional portfolio and blog site.  Quickly spin up a slick Vue SPA with a Laravel backend.

This project intends to create Laravel/Vue CMS for the pupose of a web developers blog and portfolio site.

Some features:
    * SPA architecture for seemless loading and transitions, better user experience
    * Ability to add new resources to API easily by convenient naming conventions (ex. 'reesouce-item')
    * Full CRUD operations for resources
    * Default blog post, portfolio item, and tutorial API resources
    * User authentication
    * User Dashboard to create, edit, and delete resources
    * Markdown editor for easy resource creation and editing
    * Factory resource seeding from [picsum](picsum.com) and [pravatar](pravatar.com)

One goal of this project is to create an easy to learn and modify CMS framework that fulfills all the requriements of a professional web site for a web developer that has a blog, portfolio, and an online method of contact.

Attempts have been made to write models and components in a way to allow new resources to be easilty added and components to be reusable.

This is written as a monolith with the Vue SPA housed inside the Laravel app.

## Installation

Clone the repo locally and cd into the repo

```
composer install
npm install
cp .env.example .env
php artisan key:generate
```

After generating the key, edit the new .env file with your database information

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=dev_blog
DB_USERNAME=root
DB_PASSWORD=
```

To migrate and seed the database with mock resources use

`php artisan migrate:fresh --seed`

For developemnt mode:

`php artisan serve` and `npm run dev`

You can also use `npm run watch` for hot reload and compilation

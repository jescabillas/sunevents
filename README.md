# Sunevents

Sunevents is a personal project for posting and managing events.

Clone project with the following command:

`
git clone git@github.com:jescabillas/sunevents.git
`

## Techs used
- Laravel
- Next.js
- GraphQL
- Tailwind

## Prerequisites
- NodeJs
- Composer
- MySQL

## Frontend (Next.js)
1. Install NodeJs and skip if already installed
2. Make sure you're at the `sunevents` folder in the cli
3. `cd frontend`
4. `npm install`
5. `npm run dev`

## Backend (Laravel)
1. Install Composer and skip if already installed
2. Install MySQL and configure settings, skip if done with the set-up
3. Make sure you're at the `sunevents` folder in the cli
4. `cd backend`
5. Update the `.env` file 
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=sunevents
DB_USERNAME=root
DB_PASSWORD=password
````
7. `php artisan migrate`
8. `php artisan serve`

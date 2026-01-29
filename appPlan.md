# App Plan

## Single Page Application Overview

The app will be a dashboard for the mechanics.
The mechanic will log in to get to the dash board.
The dashboard will display all service tickets.
The dashboard will allow mechanics to add tickets.
Tickets can be:

- Updated
- Closed
When closed the ticket will be removed from the dashboard.

## Design

- The home page will be a simple login form component
- The navbar will just have the app name and a logout button
- When logged in the mechanic will be taken to the dashboard page

- The mechanic dashboard tickets will be cards and have:
  - See details button
  - Update button
  - Close/Completed button
- Ticket details will show all info in the database

- Only admins can create/delete mechanics(principle of least privilege)
- Admins will have a separate dashboard to manage mechanics
- The admin dashboard will:
  - Show mechanics as cards
  - Card will have a delete button
  - Card Update mechanics button
  - Update mechanics will open a form prefilled with current data

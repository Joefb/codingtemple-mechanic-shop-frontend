# Backend API Routes

## Local Server

<http://127.0.0.1:5000/>

## Tech Routes

### Login: POST /tech/login

Required fields:

- last_name="smith"
- password="password"

### Create Tech(Admin Only): POST /tech

Required fields:

- first_name="bob"
- last_name="smith"
- password="password"
- phone_number="123-456-7890"
- position="tech"

### Get tech by ID: GET /tech/1

### Get logged in tech: GET /tech

### Get all techs: GET /tech/list

### Delete tech by ID(Admin Only): DELETE /tech/1

### Update current logged in tech: PUT /tech

Only include fields to be updated.

- first_name="bob"
- last_name="smith"
- password="password"
- phone_number="123-456-7890"
- position="tech"

### Update tech by ID(Admin Only): PUT /tech/1

Only include fields to be updated.

- first_name="bob"
- last_name="smith"
- password="password"
- phone_number="123-456-7890"
- position="tech"

## Invoice Routes

### Create Invoice: POST /invoice

Required fields:

customer_id="1"
date="1-23-2026"
status="Need oil change"
total_cost="234.00"
vehicle="Ford Shitter"

### Get invoice by ID: GET /invoice/1

### Get all invoices: GET /invoice

### Delete invoice by ID: DELETE /invoice/1

### Update invoice by ID: PUT /invoice/1

Only include fields to be updated.

customer_id="1"
date="1-23-2026"
status="Need oil change"
total_cost="234.00"
vehicle="Ford Shitter"

## Customer Routes

### Create Customer: POST /customer

Required fields:

address="111 Bob way"
email="<bob@bob.com>"
first_name="bob"
last_name="barker"
password="password"
phone="555-555-5555"

### Get Customer by ID: GET /customer/1

### Get all Customers: GET /customer/list

# Build a full stack application using React.js and Firebase

## TODO 

* [ ] Admin-panel
    * [ ] Home - Dashboard page
    * [x] User
        * [x] Sign in
        * [x] Sign up
        * [x] Log out - fix TypeError: Cannot read property 'loading' of null

    *  [x] Products
        * [x] Add new product feature 
            * [x] solve image upload bug
                * [x] handle validation errors
                * [x] add modal after action completion
                * [x] add category field
                    * [x] Fields
                        * Title
                        * Item Number
                        * Brand
                        * Price
                        * Currency
                        * Material
                        * Weight
                        * Weight m.u.
                        * Description
                        * Category
                        * Created At
        * [x] Add edit product feature
             * [x]  handle image edit
             * [x]  add modal after product edit
             * [x]  validate new inputs
        * [x]  Add view product feature
             * [x]  Delete product feature
             * [x]  Delete image when deleting a product
             * [x]  add a modal after product delete

        * [x] Categories 
            * [x]  New Category
            * [x]  Edit Category
            * [x]  List Categories
            * [x]  Delete Category
            * [x]  View Category
        * [x]  Orders
            * [x]  Fields 
                * uid 
                * products: 
                  * productId
                  * quantity
                * deliveryAddress, 
                * billingAddress,
                * comments,
                * createdAt
            * [x]  Display all orders
            * [x]  View order
            * [x] Mark order as shipped
        * [x]  Home page 
            * [x]  Layout
        * [x]  Users
            * [x]  users
            * [x]  view user
            * [x]  delete user
        * [x] Pagination Component and functionality
        * [ ] sort
        * [ ] add responsiveness
        * [ ] format dates 
        * [ ] add filters 
        * [ ] add sort
        * [ ] route guard

* [ ] Firebase functions
    * [x] Users functions
        * [ ] add user to database after login with Google
    * [x] Products functions
    * [x] Categories functions
    * [x] Orders functions
    * [ ] Check for duplicate products

* [ ] View 
    * [x] Add store 
        * [x] user
        * [x] products 
    * [x] Header
        * [x] implement a dropdown menu for user options
    * [x] Footer
    * [x] Login
        * [x] Login page
            * [x] Signin with google
            * [ ] Signin with facebook 
            * [x] Signin with email and password
        * [x] Logout page
    * [x] Signup
    * [x] Home page
    * [ ] View all products
    * [ ] Category
        * [ ] Category page 
        * [ ] Category item
    * [ ] Product 
        * [ ] Product item 
        * [ ] Product page 
    * [ ] Cart
        * [ ] Cart page
    * [ ] Favourites 
    * [ ] About 
    * [ ] Terms and conditions
    * [ ] Search 
    * [x] Store
        * [x] Products
        * [x] Users 
    * [ ] route guard 
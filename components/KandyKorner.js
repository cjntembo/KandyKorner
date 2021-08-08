import React from "react"
import "./KandyKorner.css"

export const KandyKorner = () => (
    <>
        <h2>Nashville KandyKorner</h2>
        <small>Sweet Kandy when You Need IT.</small>
        <address>
            <div>Visit Us at Any Nashville Locations</div>
            <div>678 SugarRush Lane</div>
        </address>

        <h2>Locations</h2>
        <article className="locations">
          <LocationProvider>
            <LocationList />
          </LocationProvider>
        </article>

        <h2>Product Types</h2>
        <article className="prductTypes">
          <ProductTypeProvider>
            <ProductTypeList />
          </ProductTypeProvider>
        </article>

        <h2>Products</h2>
        <article className="products">
          <ProductProvider>
            <ProductList />
          </ProductProvider>
        </article>

        <h2>Employees</h2>
        <article className="employees">
          <EmployeeProvider>
            <EmployeeList />
          </EmployeeProvider>
        </article>

        <h2>Customers</h2>
        <article className="customers">
          <CustomerProvider>
            <CustomerList />
          </CustomerProvider>
        </article>
    </>
)
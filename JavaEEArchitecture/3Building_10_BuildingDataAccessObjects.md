
# Building. Building Data Access Objects


### Transaction Management Strategies

-   **Servlet Filter** strategy, use a Servlet filter, which is executed on all
    web transactions to issue all commits for sucessfull transactions and
    rollbacks for all transactions that except.

-   **Aspect-Oriented Programming** (AOP) strategy, to surround methods in data
    access classes with commit and rollback logic. Often, this approach is too
    granular to be useful.

-   **Autocommit** strategy, is the most convenient for initial development. It
    is  possible, often at a JDBC driver configuration level, to set all
    connections to be “autocommit” by default. Using this strategy, the JDBC
    driver automatically issues a “commit” after successful SQL statements and a
    “rollback” after failed transactions.

 

### Data Access Object Coding Guidelines

-   Validate arguments for public and protected methods

-   JDBC objects created within a method should be closed within the same method

-   Use host variables in SQL statements instead of hard-coding literals in SQL
    strings

-   Consolidate formation of SQL statement strings

-   Limit use of column functions

-   Always specify a column list with an insert statement

-   Code test cases for all DAO methods and put them in the test suite

-   Define a standard method for managing data needed for DAO test cases

 

### XML Access Object Coding Guidelines

-   Avoid direct use of the DOM to interpret XML data (XML Bean tool).

-   Apply XML technologies consistently throughout the application

-   Place XML-related code into separate classes

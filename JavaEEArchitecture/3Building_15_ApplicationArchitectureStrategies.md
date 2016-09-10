
# Building. Application Architecture Strategies


### Logging Strategies

-   Limit coding for logging methods to one line

-   Bundle needed information with exceptions that you throw

-   Log transaction exceptions only once

-   Do not commingle transaction logs with normal application logging

 

### Exception-handling Strategies

-   Validate all arguments explicitly in all public methods and constructors in
    all public classes

-   Trend toward unchecked exceptions

-   Use native JDK exceptions before creating your own

-   Limit the nesting depth of a try/catch block to two or one

-   Don’t catch exceptions and do nothing with them

-   Never put a return statement in a finally block

-   The architect and project manager should establish an exception-handling and
    logging strategy before coding begins

 

### Asynchronous Task Strategies

It’s generally preferable to leverage a product to manage asynchronously running
tasks rather than write threading code yourself.

 

### Configuration Management Strategies

-   Making values for configuration items available to application classes

-   Documenting configurable items for developers

 

### Caching Strategies

-   Popular caching package: guava and Ehcache

-   Unless your database is poorly configured or your network between the
    application server and database server has bad performance, Hibernate
    caching doesn’t make nay difference

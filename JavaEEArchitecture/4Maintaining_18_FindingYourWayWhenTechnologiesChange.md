
# Maintaining. Finding Your Way When Technologies Change


### Architectural principles

 

**Simpler is better**

-   Simpler solutions are always better than complex solutions

-   Tolerate only enough complexity to satisfy known business requirements

-   Consistency is a form of simplicity

-   Standardize solutions to common problems across the enterprise

 

**Reuse, don’t reinvent**

-   Trend toward reusing components that exist rather than inventing new
    versions of existing components

-   A corollary to the reuse principle is Don’t Repeat Others

-   Centralize domain or architecture specific utility code across the
    enterprise

 

**Enforce separation of concerns**

-   Applying the separation of concerns principle will produce a large number of
    software components or classes

-   Software components should have a clearly defined mission

-   Only give software components information they “need” to accomplish their
    task

-   Individual classes and methods should not make assumptions about execution
    context

-   Don’t expose more fields and methods than are necessary

-   Don’t introduce dependencies that aren’t needed

-   Insulate all application interfaces using proxies

 

**Swim with the stream**

-   Use products and technologies as they were intended to be used

-   Using the product as it was meant to be used increases the probability that
    you will benefit from product advances

-   Don’t use internal product classes that were not meant to be used outside
    the product

 

**Catch errors earlier rather than later**

-   It is always better to catch coding errors as early in the development
    process as possible

-   A corollary to this principle is to adopt practices that prevent bugs in the
    first place

-   Automated error reporting and notification of support personnel is essential

-   Code the most technically risky portions of a project first

 

**Functional requirements are the highest priority**

Functional requirements is a business need. A “need” is a feature essential to
the operation of the business. A “want” is something that optimizes one portion
of that business

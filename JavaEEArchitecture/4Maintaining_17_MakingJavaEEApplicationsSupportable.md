### Application Support Objectives

-   Maximizing the end-user experience. Minimizing unplanned outages, minimizing
    defects, providing acceptable performance, and resolving user issues

-   Minimizing cost. Minimizing costs and time associated with addressing
    outages and defects

 

Streamlining Investigations for Application Defects

-   Prioritize defects using the number of system-generated exceptions produced
    by that defect

-   Prioritize defects indicating the lack of needed resources first

-   System-generated exceptions usually precede corresponding user-reported
    defects

-   Follow best practices for generating exceptions

 

### Streamlining Investigations for Unplanned Outages: Memory Shortages

-   The first and most important question with any memory shortage
    investigation: Is it a memory leak or a usage spike.

-   Memory can be measured at the container-level only

-   Memory leaks can be detected from memory dumps, but it requires detailed
    knowledge of application code running within the container

-   Memory leaks can also be detected by analyzing memory allocation patterns
    over time

-   Java locking or race conditions issues can cause memory shortages

-   It is possible for a Java EE container to be unstable after an
    OutOfMemoryException

-   Resource limits can cause memory shortages

 

### Investigating java Contention Issues

-   Code that uses the synchronized keyword is potentially a creator of
    contention issues

-   Contention issues often appear to users as performance issues

-   Contention does not consume CPU resources

-   Contention issues must be caught red-handed with a thread dump to be
    diagnosed and resolved

-   Monitor Java contention and automatically take thread dumps in response to
    contention events

-   Database connection pools are a common cause for contention issues with Java
    EE aplications

 

Investigating Performance Issues

-   Measure performance for all HTTP traffic, batch jobs, and JMS message
    handling in production

-   Establish performance targets for common application features

-   Performance tuning benefits follow the 80/20 rule

-   Performance tuning activities should be planned for the UAT testing phase of
    the project

-   Thread dumps taken at high load can be used to identify hot spots within
    your application

-   Measure resource utilization on all application, database, and web servers
    in production

-   Deploy one application per Java EE container

-   Take thread and memory dump as standard procedure before recycling and
    inoperative Java EE container

 

### Assessing Application Quality

-   The number of application defects that made it into production is often
    viewed as an indicator of application quality

-   Automated test coverage can be taken as one indicator of quality

-   Simpler code is perceived as higher quality code

 

### Identifying Refactoring Opportunities

-   Classes that you can’t change without inadvertently creating other bugs may
    need to be refactored

-   Enhancements or bug fixes requiring identical changes in multiple classes
    may indicate a need to refactor

-   Abnormally complicated methods or classes that developers fear changing may
    need to be refactored

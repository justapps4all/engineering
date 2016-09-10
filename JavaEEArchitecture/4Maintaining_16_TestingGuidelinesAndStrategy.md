### Different layers of testing

-   Unit testing: tests that verify the correctness of a public or protected
    method or constructor of a specific class

-   Integration testing: test that verify that an individual software feature or
    function works as intended

-   System integration testing: tests that verify that the software product as a
    whole functions as intended and interfaces correctly with external
    applications or software components

-   User acceptance testing: test conducted by end users or end-user
    representative to ensure that delivered software works correctly and
    delivers on its intended business purpose

-   Performance testing: test that the software product scales and that
    performance is acceptable when operating under full workload

 

### Unit Testing Guidelines

-   What level of unit test code coverage is adequate? Check with Nemo, Sonar or
    Crap4J

-   Where do I put my unit tests? (Add Test to the end of the File)

-   How often are unit tests expected to be run? Who fixes them when they break?
    (at least once a day)

-   What environment are my unit test expected to run in? (database, mocked WS)

-   What unit testing tools are in the technical stack and are available for
    use? junit, easymock, ...

-   Automated Testing 80/20

 

### Unit Testing Best Practices

-   keep test cases and supporting classes in a separate folder, but in an
    identical package structure

-   Adopt a naming convention for test classes that makes them easy to find

-   Make each test case self-sufficient and independent

 

### Performance Testing

-   What metrics will be measured

-   What measurements are required to “pass” the performance test: 80/20

-   What products and tools will be used to conduct the test. Jmeter

-   What features will be included in performance tests: Thread dump, O/S Disk
    usage, O/S Network usage and Database disk, memory and lock contention
    measurements

 

### Performance Testing Tips and Guidelines

-   Don’t start tunning until after the application is in user acceptance
    testing

-   Most performance problems originate in application code

-   Measure performance before tunning to establish a baseline

-   Always run load tests under the same conditions multiple times

-   Document and limit changes between each test

-   Monitor and record CPU and memory usage during the test

-   Use load tests to detect memory leaks in addition to performance

-   Measuring performance under Load

 

### Memory Leaks 

Memory leaks in Java EE applications are frequently caused by statically defined
Collection objects

 

### Identifying Memory Leaks

-   Load testing will not find all memory leaks

-   Memory leaks are most likely discovered in production. Use VisualVM and
    commercial profiler YourKit

-   Configure the Java EE container to produce a memory dump when the first
    OutOfMemoryError is thrown

 

### Investigating Performance Problems

-   Use profiler tools to tune hot spots with a specific unit test script

-   Do not attempt to profile in a clustered environment

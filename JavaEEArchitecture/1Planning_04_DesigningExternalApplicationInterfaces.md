
# Planning: Designing External Application Interfaces



External interfaces create stability risk

External interfaces complicate development and support activities

 

### Strategies for Consuming External Application Data

**1 Reading External Application Databases Directly**

Advantages:

-   Is the simplest and cheapest t implement

-   Requires little or no involvement from the external application vendor

-   Provides data that is always up-to-date

Disadvantages:

-   Increased risk of adverse impact from external application change

-   Increased risk of unintended consequences on external application user
    (i.e., performance). This could be mitigated by an operational data store
    (duplicated db).

-   Writing to external application databases directly has considerable risk

 

**2 Utilizing Web Services**

Advantages:

-   Self-documented using WSDL

-   Extensive product support

-   Provide a change insulation layer

-   Platform neutral

-   Can be publish securely over the Internet

-   Java EE specification (JAX-WS) has added web service annotations

Disadvantages:

-   Often more expensive to develop and maintain compared to other interface
    methods

-   Not optimized for retrieving large amount of data

-   May be unavailable when needed

 

**3. Utilizing RESTful Web Services**

Advantages:

-   Provide change insulation layer

-   Platform neutral

-   Often easier to consume than web services

Disadvantages:

-   May be unavailable when needed

-   Don’t have a built-in documentation strategy

 

**4. Utilizing Messaging Services**

Advantages:

-   Messaging services provide guaranteed delivery

-   Messaging services are platform neutral

-   Messaging services have Java EE container support

Disadvantages:

-   Messaging services don’t have a built-in documentation strategy

 

**5. Utilizing Enterprise Java Beans**

Advantages:

-   EJB definitions are self-documented using the published Java interface

-   EJBs have extensive product support

-   EJBs provide a change insulation layer

Disadvantages:

-   EJBs are restricted to Java-based clients

-   EJBs are not easily secured

-   EJBs may be unavailable when needed

 

### Common Mistakes

-   Using databases and file systems as “message brokers”

-   Using an asynchronous communication method, such a messaging, when a
    response is required.

-   Not considering production environment requirements

 

### Suggestions

-   Use simple structured formats for interfaces to legacy platforms such as XML
    or CSV

-   It is not necessary to validate XML documents for external interfaces

-   Avoid sending serialized Java objects as message content

-   Document and discuss Error-Handling Requirements

-   All external application interfaces should have error notification
    procedures

-   Use mechanical error notification (i.e., e-mail notification for severe
    system errors)

-   Don’t be afraid to be verbose when logging for errors. User BMC Patrol,
    EcoTools and Tivoli. Open source: Open NMS and Nagios

-   Make retry procedures mechanical

-   All mechanical retry logic should have limits

 

### External Interface Guidelines

-   Record every request or transmission from or to an external application (in
    too many corporations you are guilty until proven innocent)

-   Create a way for an application administrator to resubmit a work from an
    external application.

-   Collect the identity of the transmitter

-   Develop a mechanical way to “push” errors to the transmitter

-   Ensure that you adequately test error-handling logic

 

 

 

 

 

 

 

 

 

 

 

 

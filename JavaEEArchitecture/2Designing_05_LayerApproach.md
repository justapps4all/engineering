### Data Access Object layer

-   Simplified Data Access Pattern (factory based). This patter implements the
    DAO as an interface. A factory is required to product objects that implement
    this interface. In addition you will have an implementation of this
    interface for each type of data source.

-   Consider using an Inversion of Control (IOC) product in place of manually
    coding the object factories. Curent poopula IOC implementations are Spring,
    Google Guice, and Pico.

-   Entity Objet Layer. Entity classes have a one-to-one mapping. For example,
    if you have a Customer table, there will also be a CustomerEntity class that
    represents that table in Java.

-   Value Object Layer.

 

### Business Logic Layer

Business objects should be deployment independent and self-contained

BL contains transaction script for any work performed by the application

Common Pattern:

-   Transaction Script pattern

-   Layered initialization, commonly use when you have different varieties of
    the same object.

-   Adapter pattern, when the same business object might have to produce
    different outputs or use different inputs.

-   Strategy patter, is used when the activities of a business object are likely
    to vary according to the context.

 

### Deployment Layer

DL classes publish business logic.

Do not implement business logic directly within DL classes

Trend toward publishing that is an independent unit of work

Choosing DL.

-   It is not uncommon to create message-driven bean and web service deployment
    for a customer object.

-   Is your business object called from applications that are’t Java? usually WS
    with XML and SOAP.

-   Does your business object receive and process messages via JMS? usually JMS.

Common Patterns:

-   The pattern commonly used for deployment wrappers is a combination of the
    session facade pattern

-   Further Reading: *Gamma, Erich, Richard Helm, Ralph Johnson, and John
    Vlissides. 1995. Design Patterns. Reading, MA: Addison-Wesley*

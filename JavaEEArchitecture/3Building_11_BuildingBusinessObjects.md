
# Building. Building Business Objects


Business Object Coding Patters, the most commonly used is the Transaction Script
pattern [Fowler], but it is not always considered as OO pattern.

 

### Business Object Coding Guidelines

-   Always have a consistent strategy for instantiating business layer and data
    access layer classes. Common strategies include autowiring with the help of
    Inversion of Control (IOC) software or by using the Factory pattern.

-   Trend toward stateless classes in the business layer. Trend toward use of
    the Transaction Script pattern. State for web applications is more
    appropiately kept on the session in the form of entity or value object
    classes. Keeping additional copies of state in the business layer or other
    layers adds unneeded complexity in that keeping those additional copies
    up-to-date requires additional code and violates the DRY principle.

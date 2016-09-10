**Design Practices and Normal Form (3NF)**

-   All repeating attribute groups should be removed and placed in a separate
    entity

-   All non-key attributes should be dependent only on the primary key

-   All non-key attributes should be dependent on every attribute in the primary
    key

 

**Creating Database Schema Definitions**

-   Directly translate each entity into a table

-   Assign a foreign key in the child entity of each one-to-many relationship

-   Rewrite each many-to-many relationship by adding an associative table

 

**Common Database Design Mistakes**

-   Denormalizing the database out of habit

-   Dropping database integrity constraints for programmatic convenience

-   Attempting to use relational data modeling concepts to design NoSQL
    databases

 

**Improving Your Data Modeling Skills**

-   Get a mentor

-   Audit relational databases for applications you support

 

**Creating XML Document Formats**

-   Entities in a data model translate to elements in an XML document

-   Attributes of an entity become attributes of the corresponding element

-   A one-to-many relationship implies that one element is the child of another
    in an XML document.

-   Common XML Design Mistakes: Declaring attributes as elements

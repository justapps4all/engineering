-   Always implement java.io.Serializable. If you put a non-serializable object
    in a value object, declare **transient** so it’s bypassed during any
    serialization attempts.

-   Always populate all fields of a value object or entity

-   Always type fields accurately

-   Check dependence on third-party classes in value objects

-   Always override method toString()

-   Consider overriding methods **equals** and **hashcode**

-   Consider implementing java.lang.Comparable

-   Warning: It is dangerous ot have entities extend BaseVO

 

### Common Mistakes

-   Populating VOs inconsistently

-   Using a blank string to avoid a NullPointerException

-   Embedding formatting assumptions into entities or VOs

-   Maintaining parent-child relationships for VOs or entities in both
    directions

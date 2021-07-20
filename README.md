# Code-Review-Assessment-CoGrammer


# Reviews

- Section A
    - So the commented line is unnecessary, it cluttering the code
    - So when comparing strings in Java you use the equals method
    - Also, the input dialog message is wrong it's supposed to be "Enter password"
- Section B
- Section C
- Section D
    - Option 2
        - So the worst-case scenario would be adding values > 2, the time complexity for the algorithm would be O(n), because we are looping until we hit a reference pointing to a null reference
        - So an alternative would be to have two pointers, one referencing the front and the other the rear
            - so if the front and rear pointers are null when adding then they would both point to the current object instance
            - if  not, we assign the rear #next to point to the incoming item or value instance
            - by adjusting the logic like above, we would get a runtime of O(1) because we're just reassigning references.

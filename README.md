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

            ```jsx
            class Collection {
                #value
                #next
                #tail

                constructor(value, next) {
                    this.#value = value
                    this.#tail = null
                    if (next) this.#next = new Collection(next)
                    else this.#next = null
                }

                get value() { return this.#value }
            		get next() { return this.#next }

                add(value) {
                    if (this.#tail){
                         this = new Collection(value);
            	           this.#tail = this
                    }
                    else {
                         collection = new Collection(value);
                         this.#tail.#next = collection
                         this.#tail = collection
                    }
                }
            }
            ```

            - by adjusting the logic like above, we would get a runtime of O(1) because we're just reassigning references.
  - to set up the project locally,
  - you'll need nodejs, if you don't have download it here and install it
  - next, clone this repo, then install the dependencies
  
    
    
    
# Install dependencies for server
npm install

## Install dependencies for client
npm run client-install

## Run the client & server with concurrently
npm run dev

## Run the Express server only
npm run server

## Run the React client only
npm run client

# Server runs on http://localhost:5000 and client on http://localhost:3000

import sys
# Value, e.g. "3.2" -> "3.2"
# ○ Factorial, e.g. "factorial 5" -> "120"
# ○ Highest prime number under a given value, e.g. "prime 10" -> "7"
# ○ Highest Fibonacci number under a given value, e.g. "fibonacci 12" ->
# "8"
# ○ Addition, e.g. "+ 12.5 12.5" -> "25"
# ○ Subtraction, e.g. "- 43.7 50" -> "-6.3"
# ○ Multiplication, e.g. "* 6 -12" -> "72"
# ○ Division, e.g. "/ 20 10" -> "2"
# ○ Long arithmetic expressions, e.g. "+ 2 3 4 10" -> "19"
# ○ Nested expressions where parentheses surround subexpressions,
# e.g. "/ (factorial (* 2 2 5)) 600" -> "12096"
# ○ Expressions with contiguous whitespace, e.g. "\t 3.22 "  -> "3.22"


def factorial(num):
    product = 1
    for i in range(1, num+1):
        product *= i
    
    return product

def highest_prime(num):
    max = 0
    for i in range(1, num+1):
        count = 0
        for j in range(1, num+1):
            if i % j == 0:
                count += 1
        if count == 2:
            if i > max:
                max = i
    return max

def highest_fibonacci(num):
    max = 0
    n_1 = 0
    n_2 = 1
    n = 0
    for i in range(2, num+1):
        n = n_1 + n_2
        n_1 = n_2
        n_2 = n
        if n > max and n <= num:
            max = n
    return max

def compute_operation(input, operation):
    num = input[len(operation):]
    num = num.strip()
    num_list = num.split()
    sum = 0
    sum_mul = 1
    div_counter = 0
    for i in num_list:
        if operation == "+":
            sum += float(i)
        elif operation == "-":
            sum -= float(i)
        elif operation == "/":
            if div_counter == 0:
                sum_mul = float(i)
                div_counter += 1
            else: 
                sum_mul /= float(i)
        elif operation == "*":
            sum_mul *= float(i)
        elif operation == "factorial":
            sum += factorial(int(i))
        elif operation == "prime":
            sum += highest_prime(int(i))
        elif operation == "fibonacci":
            sum += highest_fibonacci(int(i))
    
    if operation == "*" or operation == "/":
        check = float(sum_mul)-int(sum_mul)
        return str(sum_mul) if check != 0.0 else str(int(sum_mul))
    else:
        check = float(sum)-int(sum)
        return str(sum) if check != 0.0 else str(int(sum))


input = sys.argv[1]
input = input.strip()

total = 0
while (input != ""):
    open_index = input.rfind("(")
    close_index = input.find(")")
    temp = ''
    if open_index != -1 and close_index != -1:
        nested = True
        chop = input[open_index+1: close_index]
        temp = chop
    else:
        nested = False
        temp = input
    print(temp)
    if temp.startswith("+"):
        total = compute_operation(temp, "+")
    elif temp.startswith("-"):
        total = compute_operation(temp, "-")
    elif temp.startswith("*"):
        total = compute_operation(temp, "*")
    elif temp.startswith("/"):
        total = compute_operation(temp, "/")
    elif temp.startswith("factorial"):
        total = compute_operation(temp, "factorial")
    elif temp.startswith("prime"):
        total = compute_operation(temp, "prime")
    elif temp.startswith("fibonacci"):    
        total = compute_operation(temp, "fibonacci")
    else:
        total = temp
        
    print(total)
    if nested:
        input = input[0:open_index] + total + input[close_index+1:]
    else:
        input = ''

print(total)

import math

A = 20
B = 40
C = 50

# change the quantity of A_val,B_val,C_val as per your requirement
# they are quantity of A,B,C
A_val = int(input("Enter the quantity of product A: "))
B_val = int(input("Enter the quantity of product B: "))
C_val = int(input("Enter the quantity of product C: "))

wrapA = int(input("Do you want to wrap product A? Type 0 for no and 1 for yes: "))
wrapB = int(input("Do you want to wrap product B? Type 0 for no and 1 for yes: "))
wrapC = int(input("Do you want to wrap product C? Type 0 for no and 1 for yes: "))

totalcost = A * A_val + B * B_val + C * C_val
totalquantity = A_val + B_val + C_val


def flat10():
    if totalcost > 200:
        return totalcost * 0.9
    return totalcost


def bulk5():
    val1, val2, val3 = A * A_val, B * B_val, C * C_val
    if A_val > 10:
        val1 = A * A_val * 0.95
    if B_val > 10:
        val2 = B * B_val * 0.95
    if C_val > 10:
        val3 = C * C_val * 0.95
    return val1 + val2 + val3


def bulk10():
    if totalquantity > 20:
        return totalcost * 0.9
    return totalcost


def tiered50():
    if totalquantity > 30:
        val1, val2, val3 = A * A_val, B * B_val, C * C_val
        if A_val > 15:
            val1 = (A_val - 15) * A * 0.5 + 15 * A
        if B_val > 15:
            val2 = (B_val - 15) * B * 0.5 + 15 * B
        if C_val > 15:
            val3 = (C_val - 15) * C * 0.5 + 15 * C
        return val1 + val2 + val3
    return totalcost


print(f"Quantity of A is {A_val}")
print(f"Quantity of B is {B_val}")
print(f"Quantity of C is {C_val}")
print(f"subtotal = {totalcost}")

ProductCost = min(flat10(), bulk5(), bulk10(), tiered50())

if ProductCost == totalcost:
    print("Sorry you don't get any discount, the total price remains", ProductCost)
elif ProductCost == flat10():
    print("Congratulations you got the flat_10_discount, now the total price is", ProductCost)
elif ProductCost == bulk5():
    print("Congratulations you got the bulk_5_discount, now the total price is", ProductCost)
elif ProductCost == bulk10():
    print("Congratulations you got the bulk_10_discount, now the total price is", ProductCost)
elif ProductCost == tiered50():
    print("Congratulations you got the tiered_50_discount, now the total price is", ProductCost)

wrapfeeA, wrapfeeB, wrapfeeC = 0, 0, 0

if wrapA == 1:
    wrapfeeA = A_val
if wrapB == 1:
    wrapfeeB = B_val
if wrapC == 1:
    wrapfeeC = C_val

wrapfee = wrapfeeA + wrapfeeB + wrapfeeC
print(f"The wrap fee is {wrapfee}")

shippingFee = math.ceil((A_val + B_val + C_val) / 10) * 5
print(f"Shipping fee is {shippingFee}")

print(f"Total cost is {ProductCost + wrapfee + shippingFee}")

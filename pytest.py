num = 5
print(type(num))
new = str(num)
print(type(new))

x = 71
d = 40

if x % 2 ==0:
    print("It is even ")
else:
    print("it is odd")

while d < 50:
    print("getting to the limit")
    d += 1


class Person:
    def __init__(self, name, age, color):
        self.name = name
        self.age =age
        self.color = color
    
    
person = Person("Prinx", 34, "black")
print(person.name, person.age, person.color)


dict_list = {
    "name": 'Buchi',
    "age": 40,
    "color": 'black',

}

for key in dict_list:
    print(key, dict_list[key])



def greeting(user):
    return f"Hello {user}"

user = 'Rex-David'
greet = greeting(user)
print(greet)
graph = {}
graph["you"] = ["alice","bob","claire"]
graph["alice"] = ["peggy"]
graph["bob"] = ["anuj","peggy"]
graph["claire"] = ["thom","jonny"]
graph["anuj"] = []
graph["peggy"] = []
graph["thom"] = []
graph["jonny"] = []

from collections import deque

def person_is_seller(name):
    return name[-1] == "m" #if name ends with m then mango seller

def search(starting_person):
    search_queue = deque()
    search_queue += graph[starting_person] #this will add to the end

    searched = set() #keep track of searched people to avoid duplicates and checking again

    while search_queue:# if there are still people to check
        person = search_queue.popleft() #get the first person

        if person not in searched: #don't search twice
            if person_is_seller(person): 
                print(person +" is a mango seller")
                return True
            else:
                #add their friends to the queue
                search_queue += graph[person]
                searched.add(person)

    return False

    
search("you")